export function SectionHeading({
  eyebrow,
  title,
  dark
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div>
      <div className={`text-sm font-semibold uppercase tracking-[0.22em] ${dark ? "text-cyan-200" : "text-blue-700"}`}>
        {eyebrow}
      </div>
      <h2 className={`mt-3 max-w-2xl font-[family-name:var(--font-poppins)] text-3xl font-semibold leading-tight sm:text-4xl ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[24px] bg-[linear-gradient(135deg,#eff6ff,#ecfeff)] p-5 shadow-sm">
      <div className="text-3xl font-semibold text-slate-900">{value}</div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </div>
  );
}

export function AppointmentCard({ dark }: { dark?: boolean }) {
  return (
    <div
      className={`rounded-[28px] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
        dark ? "bg-white/10 backdrop-blur" : "bg-[linear-gradient(135deg,#eff6ff,#f0fdf4)]"
      }`}
    >
      <div className={`text-sm font-medium ${dark ? "text-white/90" : "text-slate-600"}`}>Appointment Request</div>
      <form className="mt-5 grid gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField label="Full Name" placeholder="Enter your full name" dark={dark} />
          <FormField label="Phone Number" placeholder="Enter phone number" dark={dark} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField label="Email" placeholder="Enter email address" dark={dark} />
          <FormField label="Preferred Date" placeholder="Select a date" dark={dark} />
        </div>
        <FormField label="Preferred Time" placeholder="Select a time" dark={dark} />
        <FieldTextArea label="Message" placeholder="Tell us briefly what you need" dark={dark} />
        <button
          type="button"
          className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition hover:scale-[1.01]"
        >
          Request Appointment
        </button>
        <p className={`text-xs leading-6 ${dark ? "text-white/75" : "text-slate-500"}`}>
          For the trial build, this form is static and can later be connected to email or Google Sheets without a database.
        </p>
      </form>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  dark
}: {
  label: string;
  placeholder: string;
  dark?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-white/75" : "text-slate-500"}`}>
        {label}
      </span>
      <input
        placeholder={placeholder}
        className={`rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
          dark
            ? "border-white/15 bg-white/10 text-white placeholder:text-white/60 focus:ring-white/25"
            : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-blue-200"
        }`}
      />
    </label>
  );
}

function FieldTextArea({
  label,
  placeholder,
  dark
}: {
  label: string;
  placeholder: string;
  dark?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-white/75" : "text-slate-500"}`}>
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        rows={4}
        className={`rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
          dark
            ? "border-white/15 bg-white/10 text-white placeholder:text-white/60 focus:ring-white/25"
            : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-blue-200"
        }`}
      />
    </label>
  );
}

export function TestimonialCard({
  quote,
  name
}: {
  quote: string;
  name: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
      <div className="text-3xl leading-none text-blue-600">“</div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{quote}</p>
      <div className="mt-5 text-sm font-semibold text-slate-900">{name}</div>
    </div>
  );
}
