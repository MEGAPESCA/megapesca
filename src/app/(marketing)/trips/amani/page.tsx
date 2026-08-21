import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function AmaniPage() {
  const trip = await getTripDetail("amani");

  return <TripDetailPage {...trip} />;
}
