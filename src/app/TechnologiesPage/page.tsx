import { Header } from "@/designs/organisms/Header";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import React from "react";
import banner from "../../designs/public/images/banner.svg";
import { Logo } from "@/designs/atoms/Logo";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { technoItems, technologiesItems } from "@/lib/utils";
import src from "@/designs/public/images/microscope.svg";
function TechnologiesPage() {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />

      <section className="relative w-full">
        <Logo src={banner} alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "TECHNOLOGIES FOR COMMERCIALIZATION" },
        ]}
        iconName={src}
        title="TECHNOLOGIES FOR COMMERCIALIZATION"
        description={[
          "Bring advanced tools and practices from research to the fields.",
          "They help farmers improve productivity, reduce costs, and ensure better quality yields.",
          "The goal is to make farming more sustainable, profitable, and accessible to all.",
        ]}
      />
      <TrendingTechnologies technologies={technoItems} />
      <OtherTechnologies technologiesItems={technologiesItems} />
      <Footer />
    </div>
  );
}

export default TechnologiesPage;
