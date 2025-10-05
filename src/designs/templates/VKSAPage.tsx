import React from "react";
import { Header } from "../organisms/Header";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Logo } from "../atoms/Logo";
import { SectionHeader } from "../organisms/SectionHeader";
import ViksitKrishiCard from "../molecules/VKSACard";
import { viksitKrishiData } from "@/app/VKSA/data";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import Typography from "../atoms/Typography";

const VKSAPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "VIKSIT KRISHI SANKALP ABHIYAN" }]}
        iconProps={true}
        title="VIKSIT KRISHI SANKALP ABHIYAN"
        description={[""]}
      />
      <div className="   mx-auto bg-[#f9f8f2] p-6 md:p-10 ">
        <div className="flex flex-col gap-6  container">
          <div className="flex items-center pb-[80px] gap-2">
            <Typography variant="sectionHeading">VIKSIT KRISHI SANKALP ABHIYAN</Typography>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          {viksitKrishiData.map((card, index) => (
            <ViksitKrishiCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default VKSAPage;
