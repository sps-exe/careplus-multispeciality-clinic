import Image from "next/image";
import { SectionHeading } from "@/components/blocks";
import { clinicData } from "@/lib/clinic-data";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1300px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
        <SectionHeading eyebrow="About us" title="Affordable quality healthcare for families in Kanpur." />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              CarePlus Multispeciality Clinic was established in 2015 with the mission of making trusted healthcare
              more accessible to families in Kanpur.
            </p>
            <p>
              Our team focuses on patient-first consultations, same-day appointments, modern facilities, and clear
              guidance so patients feel supported from the first visit.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {clinicData.whyChooseUs.map((item) => (
                <div key={item} className="rounded-[22px] bg-slate-50 px-4 py-3 font-medium text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#eff6ff,#f0fdf4)] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Our promise</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We keep the experience warm, fast, and easy to understand — from first enquiry to follow-up care.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <CardImage src={clinicData.aboutPrimaryImage} title="Consultation room" tall />
            <CardImage src={clinicData.aboutSecondaryImage} title="Reception area" />
            <CardImage src={clinicData.aboutAccentImage} title="Medical equipment" />
            <CardImage src={clinicData.founderImage} title="Doctor portrait" />
          </div>
        </div>
      </div>
    </main>
  );
}

function CardImage({ src, title, tall }: { src: string; title: string; tall?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[24px] bg-slate-100 shadow-sm">
      <div className={`relative overflow-hidden ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,.16))]" />
      </div>
      <div className="px-4 py-3 text-sm font-medium text-slate-700">{title}</div>
    </div>
  );
}
