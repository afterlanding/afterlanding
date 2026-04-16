import { AppShell } from "@/components/app-shell";
import { nearbyCrews } from "@/lib/site-data";

export default function CrewsPage() {
  return (
    <AppShell
      badge="People Nearby"
      title="Crew Members Nearby"
      subtitle="Connect with airline professionals checked in at your destination."
    >
      <section className="section-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="pill">All locations</span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
              New York
            </span>
          </div>
          <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white">
            {nearbyCrews.length} Persons
          </span>
        </div>
        <p className="mt-4 text-sm text-muted">Loading check-ins...</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {nearbyCrews.map((crew) => (
          <article key={crew.name} className="section-card">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-linear-to-br from-sky-400 to-cyan-500 text-lg font-bold text-white">
                {crew.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
                      {crew.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted">{crew.airlineRole}</p>
                  </div>
                  <span className={crew.state === "Connect" ? "pill" : "rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700"}>
                    {crew.state}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Info label="Location" value={crew.location} />
                  <Info label="Check-in Time" value={crew.checkInTime} />
                  <Info label="Status" value={crew.quote} />
                  <Info label="Interests" value={crew.interests.join(", ")} />
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white">
                    Connect
                  </button>
                  <button className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-secondary">
                    Message
                  </button>
                  <button className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-secondary">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="section-card">
          <h3 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
            Send Message Request
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Send a request to chat with this person.
          </p>
          <textarea
            className="mt-4 min-h-28 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none"
            placeholder="Optional message..."
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full border border-sky-200 px-5 py-3 text-sm font-semibold text-secondary">
              Cancel
            </button>
            <button className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white">
              Send Request
            </button>
          </div>
        </article>

        <article className="section-card">
          <h3 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
            Send Connection Request
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Send a connection request to this crew member.
          </p>
          <textarea
            className="mt-4 min-h-28 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none"
            placeholder="Optional message..."
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full border border-sky-200 px-5 py-3 text-sm font-semibold text-secondary">
              Cancel
            </button>
            <button className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white">
              Send Request
            </button>
          </div>
        </article>
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
