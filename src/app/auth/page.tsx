import { AppShell } from "@/components/app-shell";
import { PrimaryButton, SecondaryButton } from "@/components/ui";
import { AuthStatus } from "./auth-status";
import { AuthForms } from "./auth-forms";

export default function AuthPage() {
  return (
    <AppShell
      badge="Account Access"
      title="Login or Register"
      subtitle="Access your crew network, manage your profile, and start checking in at destinations worldwide."
      actions={
        <>
          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>Create Account</SecondaryButton>
        </>
      }
    >
      <AuthStatus />
      <AuthForms />
    </AppShell>
  );
}
