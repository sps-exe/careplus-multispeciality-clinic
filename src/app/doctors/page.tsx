import Image from "next/image";
import { SectionHeading } from "@/components/blocks";
import { clinicData } from "@/lib/clinic-data";

export default function DoctorsPage() {
  return (
    <main className="mx-auto max-w-[1300px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
        <SectionHeading eyebrow="Doctors" title="Experienced clinicians with a patient-focused approach." />
        <div className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          Meet the people behind the clinic — experienced, approachable, and focused on making every visit feel calm
          and well guided.
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <DoctorCard
            name="Dr. Arjun Mehta"
            role="Founder • MBBS, MD (Internal Medicine)"
            bio="Focused on general medicine, diabetes care, and preventive health checkups."
            image={clinicData.founderImage}
          />
          <DoctorCard
            name="Clinic Care Team"
            role="Nursing and support staff"
            bio="Friendly support for consultation flow, patient comfort, and appointment handling."
            image={clinicData.aboutSecondaryImage}
          />
        </div>
      </div>
    </main>
  );
}

function DoctorCard({
  name,
  role,
  bio,
  image
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-white">
        <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-700">{role}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{bio}</p>
    </div>
  );
}
