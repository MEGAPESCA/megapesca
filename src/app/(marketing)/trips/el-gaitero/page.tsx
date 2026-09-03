import TripDetailPage from "@/components/trips/TripDetailPage";
import { getTripDetail } from "@/lib/trips/catalog";

export default async function ElGaiteroPage() {
  const trip = await getTripDetail("el-gaitero");

  return <TripDetailPage {...trip} />;
}
