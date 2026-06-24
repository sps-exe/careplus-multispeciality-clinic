import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "CarePlus Multispeciality Clinic | Best Clinic in Kanpur",
  description:
    "CarePlus Multispeciality Clinic offers trusted healthcare services, specialist consultations, and affordable treatment in Kanpur.",
  metadataBase: new URL("https://careplusclinic.in"),
  openGraph: {
    title: "CarePlus Multispeciality Clinic",
    description:
      "Trusted healthcare services, specialist consultations, and affordable treatment in Kanpur."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
