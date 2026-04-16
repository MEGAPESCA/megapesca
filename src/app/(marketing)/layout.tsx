import CommunityWelcomePopup from "@/components/common/CommunityWelcomePopup";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-page min-h-screen">
      <CommunityWelcomePopup />
      {children}
    </div>
  );
}
