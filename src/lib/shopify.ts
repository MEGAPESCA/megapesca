function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function getShopifyConfig() {
  const storeDomain = requiredEnv("SHOPIFY_STORE_DOMAIN");
  const adminToken = requiredEnv("SHOPIFY_ADMIN_TOKEN");
  const adminBaseUrl = `https://${storeDomain}/admin/api/2024-10`;
  return { adminToken, adminBaseUrl };
}

export async function shopifyAdminFetch<T>(
  path: string,
  init?: RequestInit & { asJson?: boolean }
): Promise<T> {
  const { adminToken, adminBaseUrl } = getShopifyConfig();
  const url = `${adminBaseUrl}${path}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-Shopify-Access-Token": adminToken,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    ...init,
    body: init?.body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Shopify ${res.status} ${res.statusText}: ${text}`);
  }
  return (await res.json()) as T;
}
