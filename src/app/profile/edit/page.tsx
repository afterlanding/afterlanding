import { AppShell } from "@/components/app-shell";
import { Field, PrimaryButton, SecondaryButton } from "@/components/ui";
import { positions, profileInterests, profileLanguages } from "@/lib/site-data";

export default function ProfileEditPage() {
  return (
    <AppShell
      badge="Profile Settings"
      title="Edit Profile"
      subtitle="Fine-tune how fellow crew members see you and what kinds of connections you want to attract."
      actions={
        <>
          <PrimaryButton>Save</PrimaryButton>
          <SecondaryButton>Cancel</SecondaryButton>
        </>
      }
    >
      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="section-card">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-dashed border-sky-200 bg-sky-50 p-5">
              <p className="text-sm font-semibold text-secondary">Change Profile Picture</p>
              <p className="mt-2 text-sm text-muted">Avatar Upload, max 5MB</p>
            </div>
            <div className="rounded-[1.5rem] bg-secondary p-5 text-white">
              <p className="text-sm font-semibold">Incognito Mode</p>
              <p className="mt-2 text-sm text-sky-100">
                Only your initials will be shown to others.
              </p>
              <p className="mt-2 text-sm text-white/80">Your full name is visible.</p>
            </div>
            <Field label="Username / Nickname*" placeholder="Choose a unique username" />
            <Field label="Full Name" placeholder="Your full name" />
            <Field label="Airline" placeholder="Search airline" />
            <div>
              <p className="text-sm font-semibold text-secondary">Position</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {positions.slice(0, 4).map((position) => (
                  <span key={position} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                    {position}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Field label="About Me" placeholder="Tell us about yourself..." type="textarea" />
          </div>
        </article>

        <article className="grid gap-4">
          <div className="section-card">
            <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
              Languages
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {profileLanguages.map((language, index) => (
                <span key={language} className={index < 2 ? "pill" : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500"}>
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="section-card">
            <h2 className="font-heading text-2xl tracking-[-0.04em] text-secondary">
              Interests
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {profileInterests.map((interest, index) => (
                <span key={interest} className={index < 3 ? "pill" : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500"}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>
    </AppShell>
  );
}
