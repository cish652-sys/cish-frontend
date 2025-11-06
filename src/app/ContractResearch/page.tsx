"use client";

import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { SectionHeader } from "@/designs/organisms/SectionHeader";

export default function ContractResearch() {
  const descriptionPoints = [
    "Development and/or evaluation of the technology/process/product including economic and techno-feasibility evaluation of new crop and animal germplasm, farming practices and conservation, utilization and management of natural resources.",
    "Refinement and up-gradation of new package of practices, pilot plant development, marketing/ policy research etc.",
    "Social science research for report preparation, improvement in technology transfer or agriculture extension.",
    "Preparatory research work with the objective of development and formulation of detailed project proposals wherein perceptible and significant use of ICAR/Institute facilities in terms of computation and/or other infrastructure are required.",
    "Futuristic basic, strategic and applied research.",
    "Environmental impact of processes, products, technologies and their sustainability.",
  ];

  const ongoingList = [
    "Developing the pest/crop specific automated (switch on/off) solar light based electrified killing device safer for natural enemies.",
  ];

  const completedList = [
    "Large scale production and Know-how of the strawberry, high value crops including vegetables and flowers production technology.",
    "Evaluation of spraying of Servo Agrospray oil against pests of mango crop.",
    "Analysis of Nematode and DNA analysis of Guava Plants.",
    "Analysis of Nematode of Guava Plants.",
    "Analysis of Nematode of Guava Plants.",
    "Efficacy Cyazypyr fruit fly bait against B. dorsalis, B. zonata, B. correcta fruit flies in Mango.",
    "Responsible use of crop protection products in mango for farmers safety and enhancing yield of the crops in West Bengal & Bihar.",
    "Evaluation of bio-efficacy and phytotoxicity of Flupyram 250 g/l + Trifloxystrobin 250 g/l (Luna sensation 500 SC) against anthracnose, powdery mildow and leaf spot and Tebuconazole 430 SC (BUONOS) against anthracnose, powdery mildew and post-harvest diseases in mango.",
    "Preparation of work plan and its implementation for GI patenting of Langra, Chausa and Rataul mango of U.P.",
  ];

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <SectionHeader
        breadcrumbItems={[{ label: "Home / CONTRACT RESEARCH", href: "/ContractResearch" }]}
        iconProps={true}
        title="CONTRACT RESEARCH"
        description={[]}
      />

      <section className="w-full py-12 bg-[#fff]">
        <div className="max-w-7xl border p-4 border-gray-600 mx-auto px-6 md:px-16">
          <h2 className="text-[#31572C] text-xl md:text-2xl font-semibold mb-6 uppercase">
            PROFESSIONAL SERVICE FUNCTION - CONTRACT RESEARCH
          </h2>

          {/* Description Section */}
          <div className="space-y-4 mb-10">
            {descriptionPoints.map((text, index) => (
              <p key={index} className="text-gray-700 text-md leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* Ongoing */}
          <h2 className="text-[#31572C] text-xl md:text-2xl font-semibold mb-6 uppercase">
            ONGOING CONTRACT RESEARCH
          </h2>
          <div className="space-y-2 mb-10">
            {ongoingList.map((item, index) => (
              <p key={index} className="text-gray-700 text-md leading-relaxed">
                {item}
              </p>
            ))}
          </div>

          {/* Completed */}
          <h2 className="text-[#31572C] text-xl md:text-2xl font-semibold mb-6 uppercase">
            COMPLETED CONTRACT RESEARCH
          </h2>
          <div className="space-y-2">
            {completedList.map((item, index) => (
              <p key={index} className="text-gray-700 text-md leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
