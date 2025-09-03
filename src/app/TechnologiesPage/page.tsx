import { Header } from "@/designs/organisms/Header";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import React from "react";
import { Logo } from "@/designs/atoms/Logo";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { technoItems, technologiesItems } from "@/lib/utils";
function TechnologiesPage() {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />

      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "TECHNOLOGIES FOR COMMERCIALIZATION" },
        ]}
        iconProps={true}
        title="TECHNOLOGIES FOR COMMERCIALIZATION"
        description={[
          "Bring Advanced Tools And Practices From Research To The Fields.",
          "They Help Farmers Improve Productivity, Reduce Costs, And Ensure Better Quality Yields.",
          "The Goal Is To Make Farming More Sustainable, Profitable, And Accessible To All.",
        ]}
      />
      <TrendingTechnologies technologies={technoItems} />
      <OtherTechnologies technologiesItems={technologiesItems} />
      <Footer />
    </div>
  );
}

export default TechnologiesPage;
