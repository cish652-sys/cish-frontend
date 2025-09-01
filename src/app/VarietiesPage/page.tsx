import { Logo } from "@/designs/atoms/Logo";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import React from "react";
import banner from "../../designs/public/images/Varieties Banner.jpg";
import { technologiesVarietiesItems, varietiesItem } from "@/lib/utils";

function Varietiespage() {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src={banner} alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Varieties" }]}
        iconName="microscope"
        title="Varieties For COMMERCIALIZATION"
        description={[
          "Bring farmers high-yield, resilient, and quality crop options.",
          "These varieties are designed to fight pests, withstand climate challenges, and ensure better harvests.",
          "They empower farmers with more profit, stability, and a brighter future in farming.",
        ]}
      />
      <div className="py-0 bg-[#FBFAF0]">
        <TrendingTechnologies technologies={varietiesItem} showVerieties={false} />
        <OtherTechnologies technologiesItems={technologiesVarietiesItems} showHeading={false} />
      </div>
      <Footer />
    </div>
  );
}

export default Varietiespage;
