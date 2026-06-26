"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8 relative z-50">
      <div className="rounded-[28px] border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur lg:px-6 relative z-50">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4 w-full lg:w-auto">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-base sm:text-lg font-bold text-white">
                CP
              </div>
              <div>
                <div className="font-[family-name:var(--font-poppins)] text-base sm:text-lg font-semibold text-slate-900">
                  CarePlus
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500">Multispeciality Clinic</div>
              </div>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 text-slate-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-wrap items-center gap-2 text-sm text-slate-600">
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

          <div className="hidden lg:flex items-center gap-3">
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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-[80px] z-40 lg:hidden">
          <div className="rounded-[28px] border border-white/70 bg-white/95 px-4 py-6 shadow-xl backdrop-blur mt-2">
            <nav className="flex flex-col gap-2 text-base text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 px-2 border-t border-slate-100 pt-4">
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Call {clinicData.phone}
                </a>
                <Link
                  href="/appointments"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition hover:scale-[1.01]"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
