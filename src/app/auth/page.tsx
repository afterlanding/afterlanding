import { AppShell } from "@/components/app-shell";
import { Field, PrimaryButton, SecondaryButton } from "@/components/ui";

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
      <section className="grid gap-4 lg:grid-cols-2">
        <article className="section-card">
          <div className="flex gap-2">
            <span className="pill">Login</span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
              Sign Up
            </span>
          </div>
          <div className="mt-6 grid gap-4">
            <Field label="Email" placeholder="you@airline.com" type="email" />
            <Field label="Password" placeholder="Enter your password" type="password" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton>Login</PrimaryButton>
            <SecondaryButton>Please wait...</SecondaryButton>
          </div>
          <div className="mt-6 rounded-[1.4rem] bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Welcome back!
          </div>
        </article>

        <article className="section-card">
          <div className="flex gap-2">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
              Login
            </span>
            <span className="pill">Sign Up</span>
          </div>
          <div className="mt-6 grid gap-4">
            <Field label="Username*" placeholder="Choose a unique username" />
            <Field label="Full Name" placeholder="Optional" optional />
            <Field label="Email*" placeholder="crew@airline.com" type="email" />
            <Field label="Password*" placeholder="Create a strong password" type="password" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton>Create Account</PrimaryButton>
            <SecondaryButton>Please wait...</SecondaryButton>
          </div>
          <div className="mt-6 rounded-[1.4rem] bg-sky-50 px-4 py-3 text-sm text-primary-strong">
            Confirm your email - We&apos;ve sent you a confirmation link.
          </div>
        </article>
      </section>
    </AppShell>
  );
}
