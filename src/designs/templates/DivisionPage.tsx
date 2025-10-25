import React from "react";
import { SectionHeader } from "../organisms/SectionHeader";
import { Logo } from "../atoms/Logo";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import TrendingTechnologies from "../organisms/TrendingTechnologies";
import { divItems } from "@/lib/utils";
import { TechnologyCardItem } from "@/types"; // Import the type

const DivisionPage = () => {
  // Map over divItems to add the 'id' property
  const technologiesWithIds: TechnologyCardItem[] = divItems.map((item, index) => ({
    ...item,
    id: index + 1, // Use index as a unique ID
  }));

  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "DIVISION" }]}
        iconProps={true}
        title="DIVISION"
        description={[""]}
      />
      <TrendingTechnologies
        className="bg-white"
        showVerieties={false}
        technologies={technologiesWithIds} // Pass the modified array
      />
      <Footer />
    </main>
  );
};

export default DivisionPage;
