import { AppShell } from "@/components/app-shell";

const requestGroups = [
  {
    title: "Received Requests",
    actions: "Accept | Decline | Report | Block User",
  },
  {
    title: "Sent Requests",
    actions: "Cancel | Open Chat | Pending, Accepted, Declined",
  },
];

export default function MessagesPage() {
  return (
    <AppShell
      badge="Crew Messaging"
      title="Messages"
      subtitle="Handle message requests, keep conversations respectful, and open direct chats once accepted."
    >
      <section className="grid gap-4 lg:grid-cols-2">
        {requestGroups.map((group) => (
          <article key={group.title} className="section-card">
            <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
              {group.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">No message requests</p>
            <button className="mt-6 rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-secondary">
              {group.actions}
            </button>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="section-card">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
                Chat
              </p>
              <h2 className="mt-3 font-heading text-3xl tracking-[-0.05em] text-secondary">
                Marco Vidal - Direktnachricht
              </h2>
            </div>
            <span className="pill">Accepted</span>
          </div>
          <div className="mt-6 rounded-[1.5rem] bg-sky-50 p-5 text-sm leading-7 text-muted">
            Noch keine Nachrichten. Beginne die Unterhaltung mit einer freundlichen Nachricht!
          </div>
          <div className="mt-4 flex gap-3">
            <input
              className="flex-1 rounded-full border border-sky-100 bg-white px-4 py-3 text-sm outline-none"
              placeholder="Nachricht schreiben..."
            />
            <button className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white">
              Send
            </button>
          </div>
          <p className="mt-3 text-sm text-rose-600">Nachricht konnte nicht gesendet werden</p>
        </article>

        <article className="grid gap-4">
          <div className="section-card">
            <h3 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
              Block User
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Are you sure you want to block this user? They will no longer be able
              to send you messages.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-secondary">
                Cancel
              </button>
              <button className="rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600">
                Block
              </button>
            </div>
          </div>

          <div className="section-card">
            <h3 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
              Report Dialog
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Spam", "Harassment", "Inappropriate content", "Other"].map((reason) => (
                <span key={reason} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                  {reason}
                </span>
              ))}
            </div>
            <textarea
              className="mt-4 min-h-28 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none"
              placeholder="Description"
            />
            <div className="mt-4 flex gap-3">
              <button className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-secondary">
                Cancel
              </button>
              <button className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">
                Submit Report
              </button>
            </div>
            <div className="mt-4 rounded-[1.4rem] bg-sky-50 px-4 py-3 text-sm text-primary-strong">
              Report submitted - Thank you for reporting. Our team will review this.
            </div>
          </div>
        </article>
      </section>
    </AppShell>
  );
}
