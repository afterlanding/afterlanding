"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type Profile = {
  username: string | null;
  full_name: string | null;
  airline: string | null;
  position: string | null;
};

function formatRole(profile: Profile | null) {
  if (!profile) {
    return "Crew member";
  }

  const parts = [profile.airline, profile.position].filter(Boolean);
  return parts.length ? parts.join(" • ") : "Crew member";
}

export function SessionNav() {
  const [loading, setLoading] = useState(true);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) {
        return;
      }

      setSessionEmail(session?.user.email ?? null);

      if (!session) {
        setProfile(null);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("username, full_name, airline, position")
        .eq("id", session.user.id)
        .maybeSingle();

      if (!mounted) {
        return;
      }

      setProfile(data ?? null);
      setLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadSession();
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    setSigningOut(true);
    await supabase.auth.signOut();
    setSigningOut(false);
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-[1.5rem] border border-sky-100 bg-white px-4 py-2 shadow-sm">
        <p className="text-sm text-muted">Checking session...</p>
      </div>
    );
  }

  if (!sessionEmail) {
    return (
      <div className="flex items-center gap-3 rounded-[1.5rem] border border-sky-100 bg-white px-4 py-2 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-secondary">Guest mode</p>
          <p className="text-xs text-muted">Login to save check-ins and activities</p>
        </div>
        <Link
          href="/auth"
          className="rounded-full border border-sky-100 px-3 py-2 text-xs font-semibold text-secondary transition hover:border-sky-300 hover:text-primary-strong"
        >
          Login / Sign Up
        </Link>
      </div>
    );
  }

  const displayName =
    profile?.full_name || profile?.username || sessionEmail.split("@")[0];

  return (
    <div className="flex items-center gap-3 rounded-[1.5rem] border border-sky-100 bg-white px-4 py-2 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-secondary">{displayName}</p>
        <p className="text-xs text-muted">{formatRole(profile)}</p>
      </div>
      <button
        onClick={handleSignOut}
        disabled={signingOut}
        className="rounded-full border border-sky-100 px-3 py-2 text-xs font-semibold text-secondary transition hover:border-sky-300 hover:text-primary-strong disabled:cursor-not-allowed disabled:opacity-70"
      >
        {signingOut ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}
