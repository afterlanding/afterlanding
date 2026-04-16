import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-20">
      <header className="app-shell pt-6">
        <div className="glass-panel overflow-hidden rounded-[2rem] px-6 py-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold tracking-[0.22em] text-white uppercase">
              AfterLanding
            </span>
            <nav className="flex flex-wrap items-center gap-2">
              <Link className="rounded-full px-4 py-2 text-sm font-semibold text-secondary" href="/auth">
                Login / Register
              </Link>
              <Link
                className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20"
                href="/auth"
              >
                Open Auth
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="app-shell page-grid pt-6">
        <section className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <span className="eyebrow">For Flight Crews</span>
          <div className="mt-6 max-w-3xl space-y-5">
            <h1 className="font-heading text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.06em] text-secondary">
              AfterLanding
            </h1>
            <p className="text-lg leading-8 text-muted sm:text-xl">
              We are rebuilding the product from a simpler foundation so the first
              live flow is just authentication: create an account, log in, see the
              real session state, and log out reliably.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/auth"
              className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20"
            >
              Go to Login
            </Link>
            <Link
              href="/auth"
              className="rounded-full border border-sky-200 bg-white px-6 py-3.5 text-sm font-semibold text-secondary transition hover:border-sky-300 hover:text-primary-strong"
            >
              Create Account
            </Link>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="section-card">
            <h2 className="font-heading text-3xl tracking-[-0.05em] text-secondary">
              Current focus
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Before we rebuild check-ins, activities, and networking, we want the
              login experience to feel stable and obvious. That gives us a much
              safer base for everything else.
            </p>
          </article>
          <article className="section-card bg-secondary text-white">
            <h2 className="font-heading text-3xl tracking-[-0.05em]">
              What should work now
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-sky-50/92">
              <p>1. Create account</p>
              <p>2. Log in with email and password</p>
              <p>3. See the real session state in the header</p>
              <p>4. Log out cleanly</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
