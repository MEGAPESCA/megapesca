import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function PunchinaPage() {
  const trip = await getTripDetail("punchina");

  return <TripDetailPage {...trip} />;
}
