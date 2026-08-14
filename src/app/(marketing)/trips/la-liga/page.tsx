import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function LaLigaPage() {
  const trip = await getTripDetail("la-liga");

  return <TripDetailPage {...trip} />;
}
