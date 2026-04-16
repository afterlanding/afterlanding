"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui";
import { supabase } from "@/lib/supabase/client";

type AuthFeedback = {
  tone: "success" | "error" | "info";
  message: string;
} | null;

const inputClassName =
  "mt-2 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-sky-300";

const feedbackClassNames: Record<NonNullable<AuthFeedback>["tone"], string> = {
  success: "bg-emerald-50 text-emerald-700",
  error: "bg-rose-50 text-rose-700",
  info: "bg-sky-50 text-primary-strong",
};

export function AuthForms() {
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFullName, setSignUpFullName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [loginPending, setLoginPending] = useState(false);
  const [signUpPending, setSignUpPending] = useState(false);
  const [loginFeedback, setLoginFeedback] = useState<AuthFeedback>(null);
  const [signUpFeedback, setSignUpFeedback] = useState<AuthFeedback>(null);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginPending(true);
    setLoginFeedback(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      setLoginFeedback({
        tone: "error",
        message: error.message,
      });
      setLoginPending(false);
      return;
    }

    setLoginFeedback({
      tone: "success",
      message: "Welcome back!",
    });
    router.refresh();
    setLoginPending(false);
  }

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSignUpPending(true);
    setSignUpFeedback(null);

    const { error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
      options: {
        data: {
          username: signUpUsername,
          full_name: signUpFullName || null,
        },
      },
    });

    if (error) {
      setSignUpFeedback({
        tone: "error",
        message: error.message,
      });
      setSignUpPending(false);
      return;
    }

    setSignUpFeedback({
      tone: "info",
      message: "Confirm your email - We've sent you a confirmation link.",
    });
    router.refresh();
    setSignUpPending(false);
    setSignUpPassword("");
  }

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="section-card">
        <div className="flex gap-2">
          <span className="pill">Login</span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
            Sign Up
          </span>
        </div>
        <form className="mt-6 grid gap-4" onSubmit={handleLogin}>
          <label className="block">
            <span className="text-sm font-semibold text-secondary">Email</span>
            <input
              className={inputClassName}
              type="email"
              placeholder="you@airline.com"
              value={loginEmail}
              onChange={(event) => setLoginEmail(event.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-secondary">Password</span>
            <input
              className={inputClassName}
              type="password"
              placeholder="Enter your password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
              required
            />
          </label>
          <div className="mt-2 flex flex-wrap gap-3">
            <PrimaryButton type="submit" disabled={loginPending}>
              {loginPending ? "Please wait..." : "Login"}
            </PrimaryButton>
          </div>
        </form>
        {loginFeedback ? (
          <div
            className={`mt-6 rounded-[1.4rem] px-4 py-3 text-sm ${feedbackClassNames[loginFeedback.tone]}`}
          >
            {loginFeedback.message}
          </div>
        ) : null}
      </article>

      <article className="section-card">
        <div className="flex gap-2">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
            Login
          </span>
          <span className="pill">Sign Up</span>
        </div>
        <form className="mt-6 grid gap-4" onSubmit={handleSignUp}>
          <label className="block">
            <span className="text-sm font-semibold text-secondary">Username*</span>
            <input
              className={inputClassName}
              placeholder="Choose a unique username"
              value={signUpUsername}
              onChange={(event) => setSignUpUsername(event.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-secondary">
              Full Name <span className="ml-2 text-muted">(Optional)</span>
            </span>
            <input
              className={inputClassName}
              placeholder="Optional"
              value={signUpFullName}
              onChange={(event) => setSignUpFullName(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-secondary">Email*</span>
            <input
              className={inputClassName}
              type="email"
              placeholder="crew@airline.com"
              value={signUpEmail}
              onChange={(event) => setSignUpEmail(event.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-secondary">Password*</span>
            <input
              className={inputClassName}
              type="password"
              placeholder="Create a strong password"
              value={signUpPassword}
              onChange={(event) => setSignUpPassword(event.target.value)}
              required
              minLength={6}
            />
          </label>
          <div className="mt-2 flex flex-wrap gap-3">
            <PrimaryButton type="submit" disabled={signUpPending}>
              {signUpPending ? "Please wait..." : "Create Account"}
            </PrimaryButton>
            <SecondaryButton
              disabled={signUpPending}
              onClick={() => {
                setSignUpUsername("");
                setSignUpFullName("");
                setSignUpEmail("");
                setSignUpPassword("");
                setSignUpFeedback(null);
              }}
            >
              Clear
            </SecondaryButton>
          </div>
        </form>
        {signUpFeedback ? (
          <div
            className={`mt-6 rounded-[1.4rem] px-4 py-3 text-sm ${feedbackClassNames[signUpFeedback.tone]}`}
          >
            {signUpFeedback.message}
          </div>
        ) : null}
      </article>
    </section>
  );
}
