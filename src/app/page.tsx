import Image from "next/image";
import Link from "next/link";
import { AppointmentCard, SectionHeading, TestimonialCard } from "@/components/blocks";
import { clinicData } from "@/lib/clinic-data";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[36px] bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[500px] sm:min-h-[680px] overflow-hidden rounded-[32px]">
            <Image
              src={clinicData.heroImage}
              alt="Modern clinic reception"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,.62),rgba(15,23,42,.28)_44%,rgba(37,99,235,.12))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  4.9 Average Rating • Same-day appointments available
                </div>
                <h1 className="max-w-2xl font-[family-name:var(--font-poppins)] text-4xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                  Quality Healthcare for Your Entire Family
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">
                  Experienced doctors, affordable treatment, and convenient appointments all under one roof.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/appointments"
                    className="flex w-full sm:w-auto justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.01]"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/services"
                    className="flex w-full sm:w-auto justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute right-5 top-5 w-[320px] rounded-[28px] bg-white/92 p-4 shadow-xl backdrop-blur">
              <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Clinic Support</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["Dr", "Team", "Care"].map((item) => (
                    <div
                      key={item}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-blue-100 text-[10px] font-semibold text-blue-700 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-slate-700">Same-day consultation</div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  clinicData.aboutPrimaryImage,
                  clinicData.aboutSecondaryImage,
                  clinicData.aboutAccentImage
                ].map((image) => (
                  <div key={image} className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image src={image} alt="Clinic preview" fill sizes="96px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] border border-slate-100 bg-[linear-gradient(135deg,#f5f9ff,#f1fdf6)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] lg:p-8">
              <SectionHeading
                eyebrow="About the clinic"
                title="Dedicated healthcare with a modern, patient-first approach."
              />
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                CarePlus Multispeciality Clinic serves Kanpur with general medicine, diabetes care, preventive health
                checkups, and specialist consultations in a clean and trusted environment.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Experienced doctors", "Modern facilities", "Affordable healthcare", "Same-day appointments"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "General Medicine", value: "Trusted Care" },
                  { label: "Diabetes Care", value: "Ongoing Monitoring" },
                  { label: "Consultation", value: "Quick Booking" }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex">
                <Link
                  href="/contact"
                  className="flex w-full sm:w-auto justify-center items-center rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[30px] bg-[linear-gradient(135deg,#1f2937,#064e3b)] px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] lg:px-10">
        <div className="grid gap-6 md:grid-cols-4 md:items-center">
          {clinicData.stats.map((stat) => (
            <div key={stat.label} className="border-b border-white/10 pb-4 md:border-b-0 md:border-r md:border-white/10 md:pr-6 md:last:border-r-0">
              <div className="font-[family-name:var(--font-poppins)] text-4xl font-semibold">{stat.value}</div>
              <div className="mt-2 text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75">
          Built for families in Kanpur with a calm, trustworthy look and a straightforward appointment experience.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
          <SectionHeading eyebrow="Why choose us" title="Trusted care that stays simple and accessible." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {clinicData.whyChooseUs.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[26px] bg-[linear-gradient(135deg,#eff6ff,#f0fdf4)] p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Quick note</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Patients can walk in, request an appointment online, or contact the clinic directly during business hours.
            </p>
          </div>
        </div>
        <div className="rounded-[32px] bg-[#eff6ff] p-6 shadow-[0_20px_60px_rgba(37,99,235,0.08)] lg:p-8">
          <SectionHeading eyebrow="Clinician-led care" title="Personalized treatment plans for every family member." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FeatureImageCard title="Doctor consultation room" src={clinicData.aboutPrimaryImage} />
            <FeatureImageCard title="Healthcare team" src={clinicData.aboutSecondaryImage} />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
        <SectionHeading eyebrow="Services / What we offer" title="Comprehensive healthcare services for every stage." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {clinicData.services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,.34))]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                  CarePlus
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] bg-[linear-gradient(135deg,#eaf7ee,#eff7ff)] p-6 lg:p-8">
          <SectionHeading eyebrow="Founder's note" title="10+ years of experience, built on trust and consistency." />
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Founded in 2015, CarePlus Multispeciality Clinic focuses on affordable, quality healthcare for families in Kanpur.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["MBBS", "MD Internal Medicine", "Indian Medical Association Member"].map((item) => (
              <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
          <SectionHeading eyebrow="Doctors" title="Experienced, approachable, and patient-focused." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <DoctorCard name="Dr. Arjun Mehta" role="Founder & Internal Medicine" image={clinicData.founderImage} />
            <DoctorCard name="Care Team" role="Specialist consultation support" image={clinicData.aboutSecondaryImage} />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[32px] bg-[linear-gradient(135deg,#0f172a,#334155)] p-6 text-white lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Book an appointment" title="Simple appointments with direct clinic contact." dark />
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
              For a no-database trial version, we keep the booking flow simple: clear contact details, a form UI, and quick next-step actions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/appointments" className="flex w-full sm:w-auto justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-slate-900">
                Book Appointment
              </Link>
              <Link href={`tel:${clinicData.phoneRaw}`} className="flex w-full sm:w-auto justify-center rounded-full border border-white/20 px-5 py-3 text-center text-sm font-medium text-white">
                Call Now
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[28px] bg-white/10 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                <Image
                  src={clinicData.ctaImage}
                  alt="Happy patient consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,.28))]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                  Same-day response
                </div>
              </div>
            </div>
            <AppointmentCard dark />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
        <SectionHeading eyebrow="Customer stories" title="What our patients say about CarePlus." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clinicData.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-[32px] bg-[linear-gradient(160deg,#0ea5e9,#2563eb)] p-6 text-white lg:p-8">
          <SectionHeading eyebrow="Questions?" title="Everything is designed to feel clear and reassuring." dark />
          <p className="mt-4 text-sm leading-7 text-sky-50/90">
            We keep the information easy to scan, so new patients can quickly understand services, doctors, and contact options.
          </p>
        </div>
        <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-8">
          <SectionHeading eyebrow="Frequently asked questions" title="Common patient questions answered." />
          <div className="mt-6 space-y-3">
            {clinicData.faq.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer list-none text-sm font-medium text-slate-800">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureImageCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="overflow-hidden rounded-[24px] bg-white shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={title} fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover" />
      </div>
      <div className="px-4 py-3 text-sm font-medium text-slate-700">{title}</div>
    </div>
  );
}

function DoctorCard({
  name,
  role,
  image
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-white">
        <Image src={image} alt={name} fill sizes="(max-width: 1024px) 100vw, 26vw" className="object-cover" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{role}</p>
    </div>
  );
}
