import Link from "next/link";
import { clinicData } from "@/lib/clinic-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointments", label: "Appointments" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white">
                CP
              </div>
              <div>
                <div className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-slate-900">
                  CarePlus
                </div>
                <div className="text-xs text-slate-500">Multispeciality Clinic</div>
              </div>
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinicData.phoneRaw}`}
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:inline-flex"
            >
              Call Now
            </a>
            <Link
              href="/appointments"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition hover:scale-[1.01]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
