const OFFICIAL_TRM_URL =
  "https://www.datos.gov.co/resource/32sa-8pi3.json?$select=valor,vigenciadesde&$order=vigenciadesde DESC&$limit=1";

const DEFAULT_TRIP_EXCHANGE_RATE_COP_PER_USD = 3_123.28;
const DEFAULT_TRM_REFERENCE_DATE = "2026-08-13";

type TrmRecord = {
  valor?: string;
  vigenciadesde?: string;
};

function parsePositiveNumber(value: string | undefined) {
  if (!value) {
    return null;
  }

  const normalized = value.replace(/[^\d.]/g, "");
  const parsed = Number(normalized);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function formatCopReference(value: number) {
  return new Intl.NumberFormat("es-CO", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatReferenceDate(value: string) {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

function buildReferenceLabel(rateCopPerUsd: number, sourceDate?: string | null) {
  const formattedRate = formatCopReference(rateCopPerUsd);
  const formattedDate = sourceDate ? formatReferenceDate(sourceDate) : null;

  return formattedDate
    ? `TRM de referencia del ${formattedDate}: COP ${formattedRate} por USD`
    : `TRM de referencia: COP ${formattedRate} por USD`;
}

export async function getTripExchangeRate() {
  const manualRate = parsePositiveNumber(
    process.env.TRIP_EXCHANGE_RATE_COP_PER_USD,
  );

  if (manualRate) {
    return {
      rateCopPerUsd: manualRate,
      referenceLabel: buildReferenceLabel(manualRate),
      source: "env",
    } as const;
  }

  try {
    const response = await fetch(OFFICIAL_TRM_URL, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 60 * 60 * 12,
      },
    });

    if (!response.ok) {
      throw new Error(`TRM fetch failed with status ${response.status}`);
    }

    const data = (await response.json()) as TrmRecord[];
    const latestRate = parsePositiveNumber(data[0]?.valor);

    if (!latestRate) {
      throw new Error("TRM value missing from official response");
    }

    return {
      rateCopPerUsd: latestRate,
      referenceLabel: buildReferenceLabel(latestRate, data[0]?.vigenciadesde),
      source: "official-trm",
    } as const;
  } catch {
    return {
      rateCopPerUsd: DEFAULT_TRIP_EXCHANGE_RATE_COP_PER_USD,
      referenceLabel: buildReferenceLabel(
        DEFAULT_TRIP_EXCHANGE_RATE_COP_PER_USD,
        DEFAULT_TRM_REFERENCE_DATE,
      ),
      source: "fallback",
    } as const;
  }
}

export async function getTripPricing(priceCop: number) {
  const exchangeRate = await getTripExchangeRate();

  return {
    priceCop,
    priceUsd: Math.round(priceCop / exchangeRate.rateCopPerUsd),
    priceReferenceLabel: exchangeRate.referenceLabel,
  };
}
