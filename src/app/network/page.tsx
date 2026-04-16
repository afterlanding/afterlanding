import { AppShell } from "@/components/app-shell";
import { connectionTabs } from "@/lib/site-data";

export default function NetworkPage() {
  return (
    <AppShell
      badge="Connections"
      title="Network Connections"
      subtitle="Manage your professional network connections."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {connectionTabs.map((tab) => (
          <article key={tab.label} className="section-card">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
                {tab.label}
              </h2>
              <span className={tab.label === "Connected" ? "pill" : "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500"}>
                {tab.label === "Connected" ? "Connected" : "Requests"}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{tab.empty}</p>
            <button className="mt-6 rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-secondary">
              {tab.action}
            </button>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
