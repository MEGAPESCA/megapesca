import { query, mutation } from "../_generated/server";
import type { MutationCtx, QueryCtx } from "../_generated/server";
import { v } from "convex/values";

type Ctx = QueryCtx | MutationCtx;

async function findRequester(ctx: Ctx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("UNAUTHORIZED");

  const byClerk = await ctx.db
    .query("users")
    .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
    .unique();
  if (byClerk) return byClerk;

  const emailLower = identity.email?.toLowerCase();
  if (!emailLower) throw new Error("UNAUTHORIZED");

  const byEmail = await ctx.db
    .query("users")
    .withIndex("by_email", (q) => q.eq("email", emailLower))
    .unique();
  if (!byEmail) throw new Error("UNAUTHORIZED");

  return byEmail;
}

export const listByUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    const requester = await findRequester(ctx);
    if (requester.role !== "admin" && requester._id !== userId) {
      throw new Error("FORBIDDEN");
    }

    return await ctx.db
      .query("orders")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

export const upsertFromShopify = mutation({
  args: {
    userId: v.id("users"),
    shopifyOrderId: v.string(),
    total: v.number(),
    currency: v.string(),
    status: v.string(),
    createdAt: v.number(),
  },
  handler: async (ctx, args) => {
    const requester = await findRequester(ctx);
    if (requester.role !== "admin") {
      throw new Error("FORBIDDEN");
    }

    const existing = await ctx.db
      .query("orders")
      .withIndex("by_shopifyOrderId", (q) =>
        q.eq("shopifyOrderId", args.shopifyOrderId)
      )
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        total: args.total,
        currency: args.currency,
        status: args.status,
      });
      return existing._id;
    }

    return await ctx.db.insert("orders", args);
  },
});
