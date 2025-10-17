import React from "react";
import { SectionHeader } from "../organisms/SectionHeader";
import { Logo } from "../atoms/Logo";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import TrendingTechnologies from "../organisms/TrendingTechnologies";
import { divItems } from "@/lib/utils";

const DivisionPage = () => {
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
      className="bg-white"  showVerieties={false} technologies={divItems} />
      <Footer />
    </main>
  );
};

export default DivisionPage;
