"use client";

import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/ui";
import { supabase } from "@/lib/supabase/client";

type Feedback = {
  tone: "success" | "error" | "info";
  message: string;
} | null;

const inputClassName =
  "mt-2 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-sky-300";

const feedbackClassNames: Record<NonNullable<Feedback>["tone"], string> = {
  success: "bg-emerald-50 text-emerald-700",
  error: "bg-rose-50 text-rose-700",
  info: "bg-sky-50 text-primary-strong",
};

const initialState = {
  city: "",
  location: "",
  arrivalDate: "",
  departureDate: "",
  airline: "",
  lookingFor: "",
  notes: "",
};

export function CheckInForm() {
  const [formState, setFormState] = useState(initialState);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  function updateField(field: keyof typeof initialState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function clearForm() {
    setFormState(initialState);
    setFeedback(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setFeedback(null);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      setFeedback({
        tone: "error",
        message: "Please log in before creating a check-in.",
      });
      setPending(false);
      return;
    }

    const { error } = await supabase.from("check_ins").insert({
      user_id: session.user.id,
      city: formState.city,
      location: formState.location || null,
      arrival_date: formState.arrivalDate,
      departure_date: formState.departureDate,
      airline: formState.airline,
      looking_for: formState.lookingFor || null,
      notes: formState.notes || null,
    });

    if (error) {
      setFeedback({
        tone: "error",
        message: error.message,
      });
      setPending(false);
      return;
    }

    setFeedback({
      tone: "success",
      message: `Check-in saved! You are now visible in ${formState.city}.`,
    });
    setFormState(initialState);
    setPending(false);
  }

  return (
    <section className="section-card">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="City" value={formState.city} onChange={(value) => updateField("city", value)} placeholder="Search city or IATA code..." required />
          <Field label="Specific Location" value={formState.location} onChange={(value) => updateField("location", value)} placeholder="JFK Airport, Downtown Hotel" />
          <Field label="Arrival Date" value={formState.arrivalDate} onChange={(value) => updateField("arrivalDate", value)} type="date" required />
          <Field label="Departure Date" value={formState.departureDate} onChange={(value) => updateField("departureDate", value)} type="date" required />
          <Field label="Airline" value={formState.airline} onChange={(value) => updateField("airline", value)} placeholder="Lufthansa, Emirates" required />
          <Field label="Looking For" value={formState.lookingFor} onChange={(value) => updateField("lookingFor", value)} placeholder="Dinner, Sightseeing, Sports" />
        </div>
        <div className="mt-4">
          <label className="block">
            <span className="text-sm font-semibold text-secondary">Additional Notes</span>
            <textarea
              className={`${inputClassName} min-h-28 resize-y`}
              placeholder="Share a little context about your layover or what you'd like to do."
              value={formState.notes}
              onChange={(event) => updateField("notes", event.target.value)}
            />
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <PrimaryButton type="submit" disabled={pending}>
            {pending ? "Please wait..." : "Complete Check-In"}
          </PrimaryButton>
          <SecondaryButton onClick={clearForm} disabled={pending}>
            Clear
          </SecondaryButton>
        </div>
      </form>

      {feedback ? (
        <div className={`mt-6 rounded-[1.4rem] px-4 py-3 text-sm ${feedbackClassNames[feedback.tone]}`}>
          {feedback.message}
        </div>
      ) : null}
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function Field({ label, value, onChange, placeholder, type = "text", required }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-secondary">{label}</span>
      <input
        className={inputClassName}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
      />
    </label>
  );
}
