import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import React from "react";
import banner from "../../designs/public/images/Varieties Banner.jpg";
import { technologiesVarietiesItems, varietiesItem } from "@/lib/utils";
import Image from "next/image";

function Varietiespage() {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Image
          src={banner}
          alt="Website Banner"
          height={452}
          width={2000}
          className="w-full object-cover"
        />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Varieties" }]}
        iconProps={false}
        title="Varieties For COMMERCIALIZATION"
        description={[
          // "Bring Farmers High-Yield, Resilient, And Quality Crop Options.",
          // "These Varieties Are Designed To Fight Pests, Withstand Climate Challenges, And Ensure Better Harvests.",
          // "They Empower Farmers With More Profit, Stability, And A Brighter Future In Farming.",
          "",
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
