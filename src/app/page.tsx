import Link from "next/link";
import { featureCards, nearbyCrews, sampleActivities } from "@/lib/site-data";

const quickStats = [
  { label: "Active Crew Cities", value: "180+" },
  { label: "Airlines Represented", value: "65+" },
  { label: "Avg. New Meetups / Week", value: "420" },
];

export default function Home() {
  return (
    <div className="pb-20">
      <header className="app-shell pt-6">
        <div className="glass-panel overflow-hidden rounded-[2rem] px-6 py-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold tracking-[0.22em] text-white uppercase">
                AfterLanding
              </span>
              <span className="rounded-full bg-linear-to-r from-sky-400 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
                SkyMeet
              </span>
            </div>
            <nav className="flex flex-wrap items-center gap-2">
              <Link className="rounded-full px-4 py-2 text-sm font-semibold text-secondary" href="/auth">
                Login
              </Link>
              <Link
                className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20"
                href="/check-in"
              >
                Start Check-In
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="app-shell page-grid pt-6">
        <section className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="hero-grid">
            <div className="space-y-7">
              <span className="eyebrow">For Flight Crews</span>
              <div className="space-y-5">
                <h1 className="max-w-4xl font-heading text-[clamp(3.2rem,9vw,6.4rem)] leading-[0.94] tracking-[-0.06em] text-secondary">
                  AfterLanding
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  Connect with airline crews worldwide. Check in at destinations,
                  organize activities, and build your aviation network.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/check-in"
                  className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20"
                >
                  Start Check-In
                </Link>
                <Link
                  href="/activities"
                  className="rounded-full border border-sky-200 bg-white px-6 py-3.5 text-sm font-semibold text-secondary transition hover:border-sky-300 hover:text-primary-strong"
                >
                  Explore Activities
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-white/70 bg-white/82 p-4">
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] bg-secondary p-6 text-white shadow-2xl shadow-sky-900/25">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Crew Radar
                </p>
                <div className="mt-5 space-y-4">
                  {nearbyCrews.map((crew) => (
                    <div
                      key={crew.name}
                      className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold">{crew.name}</p>
                          <p className="text-sm text-sky-100">{crew.airlineRole}</p>
                        </div>
                        <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold">
                          {crew.state}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-sky-100">{crew.location}</p>
                      <p className="mt-2 text-sm text-sky-50/90">{crew.quote}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-linear-to-br from-sky-100 to-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
                  Upcoming Activities
                </p>
                <div className="mt-4 space-y-4">
                  {sampleActivities.map((activity) => (
                    <div key={activity.title} className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-secondary">{activity.title}</p>
                          <p className="mt-1 text-sm text-muted">{activity.location}</p>
                        </div>
                        <span className="pill">{activity.category}</span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {activity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {featureCards.map((feature) => (
            <article key={feature.title} className="section-card">
              <span className="pill">{feature.title}</span>
              <h2 className="mt-5 font-heading text-2xl tracking-[-0.04em] text-secondary">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="section-card">
            <p className="eyebrow">Why Crews Use It</p>
            <h2 className="mt-5 font-heading text-4xl tracking-[-0.05em] text-secondary">
              From layovers to lasting connections.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              AfterLanding is designed for airline professionals who want to make
              the most of each destination. Discover nearby crews, create last-minute
              plans, and stay connected beyond a single flight rotation.
            </p>
          </article>

          <article className="section-card bg-secondary text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">
              Next Steps
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-sky-50/92">
              <p>1. Start your first location check-in.</p>
              <p>2. Build your profile with airline, role, and interests.</p>
              <p>3. Join or host an activity at your next destination.</p>
            </div>
            <Link
              href="/auth"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-secondary"
            >
              Login or Register
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}
