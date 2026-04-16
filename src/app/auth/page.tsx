import { AppShell } from "@/components/app-shell";
import { AuthStatus } from "./auth-status";
import { AuthForms } from "./auth-forms";

export default function AuthPage() {
  return (
    <AppShell
      badge="Account Access"
      title="Login or Register"
      subtitle="Use your email and password to create an account, sign in, and verify that your session is working correctly."
    >
      <AuthStatus />
      <AuthForms />
    </AppShell>
  );
}
