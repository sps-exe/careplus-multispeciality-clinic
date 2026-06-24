import Image from "next/image";
import { AppointmentCard, SectionHeading } from "@/components/blocks";
import { clinicData } from "@/lib/clinic-data";

export default function AppointmentsPage() {
  return (
    <main className="mx-auto max-w-[1300px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
          <SectionHeading eyebrow="Appointments" title="Request a visit without adding database complexity." />
          <p className="mt-4 text-sm leading-7 text-slate-600">
            This trial version uses a simple, static appointment experience with direct contact actions.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[24px] bg-slate-100">
              <div className="relative aspect-[4/3]">
                <Image
                  src={clinicData.aboutPrimaryImage}
                  alt="Appointment consultation"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-[24px] bg-[linear-gradient(135deg,#eff6ff,#f0fdf4)] p-5 text-sm leading-7 text-slate-600">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Fast response</div>
              <p className="mt-3">
                We can connect this form to email, WhatsApp, Formspree, or Google Sheets later if you want a
                no-database workflow.
              </p>
            </div>
          </div>
        </div>
        <AppointmentCard />
      </div>
    </main>
  );
}
