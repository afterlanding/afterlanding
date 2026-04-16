import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { sampleActivities, sampleCheckIns, statsCards } from "@/lib/site-data";

export default function ProfilePage() {
  return (
    <AppShell
      badge="Profile View"
      title="Lena Hoffmann"
      subtitle="Lufthansa • Flight Attendant • Member since April 2026"
      actions={
        <>
          <Link
            href="/profile/edit"
            className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white"
          >
            Edit Profile
          </Link>
          <button className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-secondary">
            Send Message
          </button>
        </>
      }
    >
      <section className="grid gap-4 md:grid-cols-3">
        {statsCards.map((stat) => (
          <article key={stat.label} className="section-card">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
              {stat.label}
            </p>
            <p className="mt-3 font-heading text-4xl tracking-[-0.05em] text-secondary">
              {stat.value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="section-card">
          <div className="flex gap-2">
            {["About", "Check-Ins", "Activities"].map((tab, index) => (
              <span key={tab} className={index === 0 ? "pill" : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500"}>
                {tab}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-3">
            <Info label="Languages" value="Deutsch, English, Français" />
            <Info label="Interests" value="Photography, Fine Dining, Travel" />
          </div>
          <div className="mt-4 rounded-[1.4rem] bg-sky-50 px-4 py-3 text-sm text-muted">
            Add languages and interests to your profile
          </div>
          <div className="mt-3 rounded-[1.4rem] bg-slate-50 px-4 py-3 text-sm text-muted">
            No details added yet
          </div>
        </article>

        <article className="grid gap-4">
          <div className="section-card">
            <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
              Check-Ins
            </h2>
            <div className="mt-4 grid gap-3">
              {sampleCheckIns.map((checkIn) => (
                <Info
                  key={checkIn.city}
                  label={`${checkIn.city} + ${checkIn.location}`}
                  value={checkIn.dates}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">No check-ins yet</p>
          </div>

          <div className="section-card">
            <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
              Activities
            </h2>
            <div className="mt-4 grid gap-3">
              {sampleActivities.map((activity) => (
                <div key={activity.title} className="rounded-[1.25rem] bg-sky-50/80 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-semibold text-secondary">{activity.title}</p>
                    <span className="pill">{activity.category}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Organizer • {activity.location} • {activity.date}
                  </p>
                  <button className="mt-4 rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-secondary">
                    Open Chat
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">No activities yet</p>
          </div>
        </article>
      </section>

      <section className="section-card bg-slate-50 text-center">
        <h2 className="font-heading text-3xl tracking-[-0.05em] text-secondary">
          Profile not found
        </h2>
        <p className="mt-3 text-sm text-muted">Back to Home</p>
      </section>
    </AppShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] bg-sky-50/80 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-strong">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-secondary">{value}</p>
    </div>
  );
}
