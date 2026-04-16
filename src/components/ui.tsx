type FieldProps = {
  label: string;
  placeholder?: string;
  optional?: boolean;
  type?: string;
};

export function Field({
  label,
  placeholder,
  optional,
  type = "text",
}: FieldProps) {
  const fieldClassName =
    "mt-2 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-slate-400 focus:border-sky-300";

  if (type === "textarea") {
    return (
      <label className="block">
        <span className="text-sm font-semibold text-secondary">
          {label}
          {optional ? <span className="ml-2 text-muted">(Optional)</span> : null}
        </span>
        <textarea className={`${fieldClassName} min-h-28 resize-y`} placeholder={placeholder} />
      </label>
    );
  }

  return (
    <label className="block">
      <span className="text-sm font-semibold text-secondary">
        {label}
        {optional ? <span className="ml-2 text-muted">(Optional)</span> : null}
      </span>
      <input className={fieldClassName} type={type} placeholder={placeholder} />
    </label>
  );
}

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full bg-linear-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.01]">
      {children}
    </button>
  );
}

export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-secondary transition hover:border-sky-300 hover:text-primary-strong">
      {children}
    </button>
  );
}
