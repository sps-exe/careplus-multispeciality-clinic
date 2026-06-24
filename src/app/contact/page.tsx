import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/blocks";
import { clinicData } from "@/lib/clinic-data";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1300px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
          <SectionHeading eyebrow="Contact" title="Easy ways for patients to reach CarePlus." />
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>{clinicData.address}</p>
            <p>
              Phone:{" "}
              <Link className="font-medium text-blue-700" href={`tel:${clinicData.phoneRaw}`}>
                {clinicData.phone}
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link className="font-medium text-blue-700" href={`mailto:${clinicData.email}`}>
                {clinicData.email}
              </Link>
            </p>
            <p>Open: Monday–Saturday, 9:00 AM – 8:00 PM</p>
          </div>
          <div className="mt-6 overflow-hidden rounded-[24px] bg-slate-100">
            <div className="relative aspect-[16/10]">
              <Image
                src={clinicData.aboutAccentImage}
                alt="Clinic exterior style preview"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="rounded-[36px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
          <SectionHeading eyebrow="Google Maps" title="Swaroop Nagar, Kanpur, Uttar Pradesh" />
          <div className="mt-6 overflow-hidden rounded-[24px] bg-slate-100">
            <iframe
              title="CarePlus Multispeciality Clinic location"
              src="https://www.google.com/maps?q=Swaroop%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
