import { AppShell } from "@/components/app-shell";
import { MyCheckInsList } from "./my-checkins-list";

export default function MyCheckInsPage() {
  return (
    <AppShell
      badge="Your Locations"
      title="Your Check-ins"
      subtitle="Manage your location check-ins."
    >
      <MyCheckInsList />
    </AppShell>
  );
}
