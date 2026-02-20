import { shopifyAdminFetch } from "@/lib/shopify";

type ShopifyCustomer = {
  id: number;
  email?: string;
};

type ShopifyCustomersResponse = {
  customers: ShopifyCustomer[];
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Unexpected error";
}

export async function GET() {
  try {
    const data = await shopifyAdminFetch<ShopifyCustomersResponse>(
      "/customers.json?limit=1"
    );
    return Response.json({ ok: true, sample: data.customers?.[0] ?? null });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ ok: false, error: getErrorMessage(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
