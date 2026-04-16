import { AppShell } from "@/components/app-shell";
import { sampleCheckIns } from "@/lib/site-data";

export default function MyCheckInsPage() {
  return (
    <AppShell
      badge="Your Locations"
      title="Your Check-ins"
      subtitle="Manage your location check-ins."
    >
      <section className="grid gap-4">
        {sampleCheckIns.length ? (
          sampleCheckIns.map((item) => (
            <article key={`${item.city}-${item.createdAt}`} className="section-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
                    {item.city}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{item.location}</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-secondary">
                    Edit
                  </button>
                  <button className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600">
                    Delete
                  </button>
                </div>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <Info label="Dates" value={item.dates} />
                <Info label="Airline" value={item.airline} />
                <Info label="Looking For" value={item.lookingFor} />
                <Info label="Notes" value={item.notes} />
                <Info label="Created" value={item.createdAt} />
              </div>
            </article>
          ))
        ) : (
          <div className="section-card text-sm text-muted">
            You haven&apos;t checked in anywhere yet.
          </div>
        )}

        <div className="section-card bg-rose-50 text-sm text-rose-700">
          Delete Check-in? - This action cannot be undone. Your check-in will be
          permanently deleted.
        </div>
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
