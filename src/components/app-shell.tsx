import Link from "next/link";
import { navItems } from "@/lib/site-data";
import { SessionNav } from "./session-nav";

type AppShellProps = {
  title: string;
  subtitle: string;
  badge?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
};

export function AppShell({
  title,
  subtitle,
  badge,
  actions,
  children,
}: AppShellProps) {
  return (
    <div className="pb-16">
      <header className="sticky top-0 z-20 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="app-shell flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-11 items-center rounded-full bg-secondary px-4 text-sm font-semibold tracking-[0.22em] text-white uppercase"
            >
              AfterLanding
            </Link>
            <div className="hidden rounded-full bg-linear-to-r from-sky-400 to-cyan-500 px-4 py-2 text-sm font-semibold text-white sm:block">
              SkyMeet
            </div>
          </div>

          <nav className="hidden flex-wrap items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-white hover:text-primary-strong"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <SessionNav />
        </div>
      </header>

      <main className="app-shell page-grid pt-8">
        <section className="section-card">
          {badge ? <span className="eyebrow">{badge}</span> : null}
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl space-y-3">
              <h1 className="section-title">{title}</h1>
              <p className="max-w-2xl text-base leading-7 text-muted">
                {subtitle}
              </p>
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </section>

        {children}
      </main>
    </div>
  );
}
