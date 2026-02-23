import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.optional(v.string()),
    email: v.optional(v.string()),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    role: v.union(v.literal("client"), v.literal("admin")),
    createdAt: v.number(),
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"]),

  orders: defineTable({
    userId: v.id("users"),
    shopifyOrderId: v.string(),
    total: v.number(),
    currency: v.string(),
    status: v.string(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_shopifyOrderId", ["shopifyOrderId"]),

  captures: defineTable({
    userId: v.id("users"),
    date: v.number(),
    location: v.string(),
    species: v.string(),
    weightKg: v.optional(v.number()),
    lengthCm: v.optional(v.number()),
    notes: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_date", ["date"]),

  gear: defineTable({
    userId: v.id("users"),
    title: v.string(),
    items: v.array(
      v.object({
        kind: v.string(),
        brand: v.optional(v.string()),
        model: v.optional(v.string()),
        notes: v.optional(v.string()),
      })
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_user", ["userId"]),

  tickets: defineTable({
    userId: v.id("users"),
    subject: v.string(),
    message: v.string(),
    status: v.union(v.literal("open"), v.literal("closed")),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"]),

  // 🔥 NUEVO: VIAJES
  trips: defineTable({
    slug: v.string(),
    title: v.string(),
    region: v.string(),
    priceCOP: v.number(),
    priceUSD: v.number(),
    duration: v.string(),
    tagline: v.string(),
    highlight: v.optional(v.string()),
    description: v.string(),
    features: v.array(v.string()),
    images: v.array(v.string()),
    stock: v.number(),
    isActive: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_isActive", ["isActive"]),

  // 🔥 NUEVO: RESERVAS DE VIAJES
  tripBookings: defineTable({
    tripId: v.id("trips"),
    userId: v.id("users"),
    quantity: v.number(),
    totalPaid: v.number(),
    currency: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("paid"),
      v.literal("cancelled")
    ),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_trip", ["tripId"])
    .index("by_status", ["status"]),
});