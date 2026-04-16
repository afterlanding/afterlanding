import { AppShell } from "@/components/app-shell";
import { CheckInForm } from "./check-in-form";

export default function CheckInPage() {
  return (
    <AppShell
      badge="Location Visibility"
      title="Check In to Location"
      subtitle="Let other crew members know where you are."
    >
      <CheckInForm />
    </AppShell>
  );
}
