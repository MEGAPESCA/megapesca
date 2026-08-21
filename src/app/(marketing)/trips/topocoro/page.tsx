import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function TopocoroPage() {
  const trip = await getTripDetail("topocoro");

  return <TripDetailPage {...trip} />;
}
