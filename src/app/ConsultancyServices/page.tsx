"use client";

import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function ConsultancyServices() {
  const descriptionPoints = [
    "Preparation of literature/survey/feasibility studies/state of art project/technology forecasting/ evaluation reports;",
    "Interpretation of test results and data, advising on risks and hazards or similar skilled advice;",
    "Advisory tasks in preparation, evaluation and implementation of a project;",
    "Advisory tasks in design engineering related to agriculture and allied sciences;",
    "Assistance in management of biotic and abiotic stress issues and other problems;",
    "Technical advice even in the form of one time assistance to help in trouble shooting or problem solving, mainly advisory in nature, including pilot plant/up-scaling trials for technology validation and commercialization.",
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
            label: "Professional Service Functions",
            href: "/ConsultancyServices",
          },
        ]}
        iconProps={true}
        title="Professional Service Functions"
        description={[]}
      />

      <section className="w-full  py-12 bg-[#fff]">
        <div className="max-w-7xl border border-gray-400 shadow-lg p-4 mx-auto px-6 md:px-16">
          <h2 className="text-[#31572C] text-xl md:text-2xl font-semibold mb-6 uppercase">
            PROFESSIONAL SERVICE FUNCTION - CONSULTANCY SERVICES
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
