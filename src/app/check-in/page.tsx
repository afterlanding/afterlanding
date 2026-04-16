import { AppShell } from "@/components/app-shell";
import { Field, PrimaryButton, SecondaryButton } from "@/components/ui";

export default function CheckInPage() {
  return (
    <AppShell
      badge="Location Visibility"
      title="Check In to Location"
      subtitle="Let other crew members know where you are."
      actions={
        <>
          <PrimaryButton>Complete Check-In</PrimaryButton>
          <SecondaryButton>Clear</SecondaryButton>
        </>
      }
    >
      <section className="section-card">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="City" placeholder="Search city or IATA code..." />
          <Field label="Specific Location" placeholder="JFK Airport, Downtown Hotel" optional />
          <Field label="Arrival Date" type="date" />
          <Field label="Departure Date" type="date" />
          <Field label="Airline" placeholder="Lufthansa, Emirates" />
          <Field label="Looking For" placeholder="Dinner, Sightseeing, Sports" />
        </div>
        <div className="mt-4">
          <Field
            label="Additional Notes"
            placeholder="Share a little context about your layover or what you'd like to do."
            type="textarea"
          />
        </div>
        <div className="mt-6 rounded-[1.4rem] bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Check-in saved! You are now visible in New York.
        </div>
      </section>
    </AppShell>
  );
}
