"use client";
import React, { useState, useEffect } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import Typography from "@/designs/atoms/Typography";
import { FieldGeneData } from "@/app/FieldGeneBank/data";

const FieldGeneBankPage = () => {
  // Use only static data — no API call
  const [vksaItems, setVksaItems] = useState(FieldGeneData);

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Field Gene bank" }]}
        iconProps={true}
        title="Field Gene bank"
        description={[""]}
      />

      <div className="mx-auto bg-[#f9f8f2] p-6 md:p-10">
        <div className="flex flex-col gap-6 container">
          <div className="flex items-center pb-[80px] gap-2">
            <Typography variant="sectionHeading">Field Gene bank</Typography>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          {vksaItems.map((card) => (
            <ViksitKrishiCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              images={card.images}
              basePath="FieldGeneBank"
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FieldGeneBankPage;