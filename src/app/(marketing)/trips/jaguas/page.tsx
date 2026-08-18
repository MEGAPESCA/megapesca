import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function JaguasPage() {
  const trip = await getTripDetail("jaguas");

  return <TripDetailPage {...trip} />;
}
