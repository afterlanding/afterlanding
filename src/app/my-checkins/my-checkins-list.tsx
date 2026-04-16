"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type CheckIn = {
  id: string;
  city: string;
  location: string | null;
  arrival_date: string;
  departure_date: string;
  airline: string;
  looking_for: string | null;
  notes: string | null;
  created_at: string;
};

export function MyCheckInsList() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadCheckIns() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) {
        return;
      }

      if (!session) {
        setUserId(null);
        setCheckIns([]);
        setMessage("Please log in to manage your check-ins.");
        setLoading(false);
        return;
      }

      setUserId(session.user.id);

      const { data, error } = await supabase
        .from("check_ins")
        .select("id, city, location, arrival_date, departure_date, airline, looking_for, notes, created_at")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (!mounted) {
        return;
      }

      if (error) {
        setMessage(error.message);
        setCheckIns([]);
        setLoading(false);
        return;
      }

      setCheckIns(data ?? []);
      setMessage(null);
      setLoading(false);
    }

    loadCheckIns();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadCheckIns();
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleDelete(checkInId: string) {
    const { error } = await supabase
      .from("check_ins")
      .delete()
      .eq("id", checkInId)
      .eq("user_id", userId);

    if (error) {
      setMessage(error.message);
      return;
    }

    setCheckIns((current) => current.filter((entry) => entry.id !== checkInId));
    setMessage("Delete Check-in? - This action cannot be undone. Your check-in will be permanently deleted.");
  }

  if (loading) {
    return <section className="section-card text-sm text-muted">Loading your check-ins...</section>;
  }

  return (
    <section className="grid gap-4">
      {checkIns.length ? (
        checkIns.map((item) => (
          <article key={item.id} className="section-card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">{item.city}</h2>
                <p className="mt-2 text-sm text-muted">{item.location || "No specific location"}</p>
              </div>
              <div className="flex gap-2">
                <button disabled className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <Info label="Dates" value={formatDateRange(item.arrival_date, item.departure_date)} />
              <Info label="Airline" value={item.airline} />
              <Info label="Looking For" value={item.looking_for || "Open"} />
              <Info label="Notes" value={item.notes || "No notes added"} />
              <Info label="Created" value={formatTimestamp(item.created_at)} />
            </div>
          </article>
        ))
      ) : (
        <div className="section-card text-sm text-muted">
          {message || "You haven't checked in anywhere yet."}
        </div>
      )}

      {message && checkIns.length ? (
        <div className="section-card bg-rose-50 text-sm text-rose-700">{message}</div>
      ) : null}
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] bg-sky-50/80 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-strong">{label}</p>
      <p className="mt-2 text-sm leading-6 text-secondary">{value}</p>
    </div>
  );
}

function formatDateRange(arrival: string, departure: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  });

  return `${formatter.format(new Date(arrival))} - ${formatter.format(new Date(departure))}`;
}

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
