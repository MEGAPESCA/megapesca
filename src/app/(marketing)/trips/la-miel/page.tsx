import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function LaMielPage() {
  const trip = await getTripDetail("la-miel");

  return <TripDetailPage {...trip} />;
}
