import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function PlayasPage() {
  const trip = await getTripDetail("playas");

  return <TripDetailPage {...trip} />;
}
