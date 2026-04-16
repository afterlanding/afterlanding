"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

export function AuthStatus() {
  const [status, setStatus] = useState("Checking Supabase connection...");

  useEffect(() => {
    let cancelled = false;

    async function checkSession() {
      const { data, error } = await supabase.auth.getSession();

      if (cancelled) {
        return;
      }

      if (error) {
        setStatus("Supabase connected, but session check returned an error.");
        return;
      }

      if (data.session) {
        setStatus(`Signed in as ${data.session.user.email ?? "crew member"}.`);
        return;
      }

      setStatus("Supabase connected. No active session yet.");
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (cancelled) {
        return;
      }

      if (session) {
        setStatus(`Signed in as ${session.user.email ?? "crew member"}.`);
        return;
      }

      setStatus("Supabase connected. No active session yet.");
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="rounded-[1.4rem] bg-slate-900 px-4 py-3 text-sm text-sky-50">
      {status}
    </div>
  );
}
