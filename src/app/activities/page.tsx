import { AppShell } from "@/components/app-shell";
import { Field, PrimaryButton, SecondaryButton } from "@/components/ui";
import { activityCategories, sampleActivities } from "@/lib/site-data";

export default function ActivitiesPage() {
  return (
    <AppShell
      badge="Global Meetups"
      title="Upcoming Activities"
      subtitle="Join fellow crew members for activities around the world."
      actions={
        <>
          <PrimaryButton>Join Activity</PrimaryButton>
          <SecondaryButton>Create Activity</SecondaryButton>
        </>
      }
    >
      <section className="section-card">
        <div className="grid gap-4 lg:grid-cols-4">
          <Field label="Search" placeholder="Search by title/location" />
          <div>
            <p className="text-sm font-semibold text-secondary">Category</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {activityCategories.slice(0, 5).map((category) => (
                <span key={category} className={category === "All" ? "pill" : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500"}>
                  {category}
                </span>
              ))}
            </div>
          </div>
          <Field label="Location / IATA" placeholder="JFK, SIN, DXB" />
          <div className="rounded-[1.5rem] bg-sky-50 p-4 text-sm text-secondary">
            <p className="font-semibold">My Activities / Show All</p>
            <p className="mt-2 text-muted">Toggle between your plans and the full global list.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {sampleActivities.map((activity) => (
          <article key={activity.title} className="section-card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="pill">{activity.category}</span>
                <h2 className="mt-4 font-heading text-2xl tracking-[-0.04em] text-secondary">
                  {activity.title}
                </h2>
              </div>
              <button className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-secondary">
                {activity.action}
              </button>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{activity.description}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Info label="Location" value={activity.location} />
              <Info label="Date" value={activity.date} />
              <Info label="Time" value={activity.time} />
              <Info label="Participants" value={activity.participants} />
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="section-card">
          <span className="eyebrow">Create Activity</span>
          <h2 className="mt-5 font-heading text-3xl tracking-[-0.05em] text-secondary">
            Create New Activity
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Organize an activity for fellow crew members.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="Activity Title" placeholder="Sunset Photography Tour" />
            <Field label="Category" placeholder="Sightseeing, Dining, Sports" />
            <Field label="Location" placeholder="Meeting point or venue" />
            <Field label="Max Participants" placeholder="2-50" type="number" />
            <Field label="Date" type="date" />
            <Field label="Time" type="time" />
          </div>
          <div className="mt-4">
            <Field
              label="Description"
              placeholder="Describe your activity, what to expect, meeting point, etc."
              type="textarea"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton>Create Activity</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </div>
        </article>

        <article className="section-card bg-rose-50 text-rose-700">
          <h3 className="font-heading text-2xl tracking-[-0.04em]">Delete Activity?</h3>
          <p className="mt-3 text-sm leading-7">
            This action cannot be undone. The activity and all participant registrations
            will be permanently deleted.
          </p>
          <p className="mt-6 text-sm font-semibold">No activities found</p>
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
      <p className="mt-2 text-sm text-secondary">{value}</p>
    </div>
  );
}
