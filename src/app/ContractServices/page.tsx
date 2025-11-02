"use client";

import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function ContractServices() {
  const descriptionPoints = [
    "Testing and analysis of samples of soil, water, fertilizer, food, feed, produce, farm tools, implements, etc.",
    "Testing of agrochemicals and microbial formulations.",
    "Quarantine services, referral diagnosis for diseases/pests, pregnancy in animals.",
    "Identification of biological specimen, natural and cultural techniques.",
    "Making customized feed/prophylactic/therapeutic formulations.",
    "Fabricating analytical and field equipment.",
    "Certification/quality testing for seed (including e.g. fish seed); planting materials(including e.g. cell and tissue cultures), semen, other products, etc.",
    "Renting of tools, instruments and equipments.",
    "Testing/validation of protocols for genetically modified organisms (GMOs).",
    "Forensic analysis e.g. DNA analysis of animals/plants/microbes.",
    "Field demonstration of technologies and products, if for a business/commercial proposition.",
    "Multiplication and supply of germplasm, seed, other products viz., planting material, starter cultures, frozen semen, fish seed spawn, artificial insemination services etc.",
  ];

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <SectionHeader
                    breadcrumbItems={[
                      { label: "Home", href: "/" },
                      { label: "CISH ITMU / IPR CELL", href: "/Itmu" },
            
                      {
                        label: "CONTRACT SERVICES",
                        href: "/ContractServices",
                      },
                    ]}
                    iconProps={true}
                    title="CONTRACT SERVICES"
                    description={[]}
                  />

      <section className="w-full py-12 bg-[#fff]">
        <div className="max-w-7xl border border-gray-400 shadow-lg p-4 mx-auto px-6 md:px-16">
          <h2 className="text-[#31572C] text-xl md:text-2xl font-semibold mb-6 uppercase">
            PROFESSIONAL SERVICE FUNCTION - CONTRACT SERVICES
          </h2>

          <div className="space-y-4 mb-10">
            {descriptionPoints.map((text, index) => (
              <p key={index} className="text-gray-700 text-md leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
