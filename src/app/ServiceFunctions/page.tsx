"use client";

import Link from "next/link";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function ServiceFunctions() {
  return (
    <>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "CISH ITMU / IPR CELL", href: "/Itmu" },

          {
            label: "Professional Service Functions",
            href: "/ServiceFunctions",
          },
        ]}
        iconProps={true}
        title="Professional Service Functions"
        description={[]}
      />

      <section className="py-12 px-6 md:px-16 bg-[#FBFAF0]">
        <div className="bg-white border rounded-md shadow-sm p-6 md:p-10">
          <ul className="space-y-4 text-[#31572C] leading-relaxed text-base">
            <li>
              <a
                href="https://icar.org.in/files/ICAR-Guidelines-PSF-2014.pdf"
                className="text-[#31572C] hover:text-[#599A5E]"
              >
                ICAR Rules And Guidelines For Professional Service Functions (Training, Consultancy,
                Contract Research and Contract Service)
              </a>
            </li>

            <li>
              <Link href="/ContractResearch" className="text-[#31572C] hover:text-[#599A5E]">
                Contract Research
              </Link>
            </li>

            <li>
              <Link href="/ConsultancyServices" className="text-[#31572C] hover:text-[#599A5E]">
                Consultancy Services
              </Link>
            </li>

            <li>
              <Link href="/ContractServices" className="text-[#31572C] hover:text-[#599A5E]">
                Contract Services
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
