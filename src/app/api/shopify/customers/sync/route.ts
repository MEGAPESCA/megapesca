import { shopifyAdminFetch } from "@/lib/shopify";

type ShopifyCustomer = {
  id: number;
  first_name?: string;
  last_name?: string;
  phone?: string;
  tags?: string;
};

type ShopifyCustomersResponse = {
  customers: ShopifyCustomer[];
};

type ShopifyCustomerResponse = {
  customer: ShopifyCustomer;
};

type CustomerPayload = {
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  tags?: string[];
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Unexpected error";
}

function assertSyncAuthorized(req: Request) {
  const configuredSecret = process.env.SHOPIFY_SYNC_SECRET;
  if (!configuredSecret) {
    throw new Error("Missing env: SHOPIFY_SYNC_SECRET");
  }

  const requestSecret = req.headers.get("x-sync-secret");
  if (!requestSecret || requestSecret !== configuredSecret) {
    return false;
  }

  return true;
}

export async function POST(req: Request) {
  try {
    if (!assertSyncAuthorized(req)) {
      return new Response(JSON.stringify({ ok: false, error: "unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = (await req.json()) as CustomerPayload;
    const normalizedEmail = body?.email?.trim().toLowerCase();

    if (!normalizedEmail) {
      return new Response(JSON.stringify({ ok: false, error: "email required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1) Intentar encontrar cliente por email
    const search = await shopifyAdminFetch<ShopifyCustomersResponse>(
      `/customers/search.json?query=email:${encodeURIComponent(normalizedEmail)}`
    );
    const existing = search.customers?.[0];

    if (existing) {
      // 2) Actualizar
      const updated = await shopifyAdminFetch<ShopifyCustomerResponse>(
        `/customers/${existing.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            customer: {
              id: existing.id,
              first_name: body.first_name ?? existing.first_name,
              last_name: body.last_name ?? existing.last_name,
              phone: body.phone ?? existing.phone,
              tags: body.tags?.join(", ") ?? existing.tags,
            },
          }),
        }
      );
      return Response.json({ ok: true, action: "updated", customer: updated.customer });
    }

    // 3) Crear
    const created = await shopifyAdminFetch<ShopifyCustomerResponse>(
      `/customers.json`,
      {
        method: "POST",
        body: JSON.stringify({
          customer: {
            email: normalizedEmail,
            first_name: body.first_name,
            last_name: body.last_name,
            phone: body.phone,
            tags: body.tags?.join(", ") ?? "megapesca",
            verified_email: true, // evita email de verificación; puedes poner false si prefieres
          },
        }),
      }
    );

    return Response.json({ ok: true, action: "created", customer: created.customer });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ ok: false, error: getErrorMessage(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
