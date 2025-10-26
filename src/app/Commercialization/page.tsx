"use client";
import Link from "next/link";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function Commercialization() {
  return (
    <>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Commercialization of Technologies", href: "/Commercialization" },
        ]}
        iconProps={true}
        title="Commercialization of Technologies"
        description={[]}
      />

      <section className="py-12 px-6 md:px-16 bg-[#FBFAF0]">
        <div className="bg-white border rounded-md shadow-sm p-6 md:p-10">
          <ul className="space-y-4 text-[#31572C] leading-relaxed text-base">
            <li>
              <a
                href="https://cish.in/itmu/ICAR_GuidelinesforIPMandTechnologyTransfer_2018.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#31572C] hover:text-[#599A5E]"
              >
                ICAR Guidelines For IPM And Technology Transfer/ Commercialization
              </a>
            </li>

            <li>
              <Link href="/technologies" className="text-[#31572C] hover:text-[#599A5E] ">
                Technologies For Commercialization
              </Link>
            </li>

            <li>
              <Link href="/varieties" className="text-[#31572C] hover:text-[#599A5E] ">
                Varieties FOR COMMERCIALIZATION
              </Link>
            </li>

            <li>
              <a
                href="https://minio.cish.org.in/cish-bucket/itmu_application%20(6).docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#31572C] hover:text-[#599A5E]"
              >
                APPLICATION FORM
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
