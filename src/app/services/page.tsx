import Image from "next/image";
import { SectionHeading } from "@/components/blocks";
import { clinicData } from "@/lib/clinic-data";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-[1300px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
        <SectionHeading eyebrow="Services" title="Comprehensive medical care for common and specialist needs." />
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          We keep the service list clear and practical so patients can quickly understand what the clinic handles and
          how each service helps them.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {clinicData.services.map((service) => (
            <div key={service.title} className="group rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,.28))]" />
              </div>
              <div className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                CarePlus service
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
