import Link from "next/link";
import { clinicData } from "@/lib/clinic-data";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1440px] px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mt-8 rounded-[32px] bg-[linear-gradient(135deg,#0f172a,#1e3a8a)] px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)] lg:px-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="font-[family-name:var(--font-poppins)] text-2xl font-semibold">CarePlus Multispeciality Clinic</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-200">
              Trusted healthcare services, specialist consultations, and affordable treatment in Kanpur.
            </p>
          </div>
          <div className="text-sm text-slate-200">
            <div className="font-semibold text-white">Contact</div>
            <p className="mt-3">{clinicData.address}</p>
            <p className="mt-2">{clinicData.phone}</p>
            <p className="mt-2">{clinicData.email}</p>
          </div>
          <div className="text-sm text-slate-200">
            <div className="font-semibold text-white">Quick Links</div>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/appointments">Appointments</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
