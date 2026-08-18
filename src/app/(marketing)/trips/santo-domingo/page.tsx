import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function SantoDomingoPage() {
  const trip = await getTripDetail("santo-domingo");

  return <TripDetailPage {...trip} />;
}
