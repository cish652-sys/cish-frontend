"use client";
import React from "react";
import {
  cropImprovementData,
  guavaVarietiesData,
  jamunVarietiesData,
  baelVarietiesData,
} from "@/lib/utils";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import Typography from "@/designs/atoms/Typography";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { VarietiesCarousel } from "@/designs/organisms/VaritiesCarousel";
import { VarietyGrid } from "@/designs/organisms/VarietyGrid";

const CropImprovementPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>

      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Division", href: "/Division" },
          { label: "Division of Crop Improvement and Biotechnology" },
        ]}
        iconProps={true}
        title="Division of Crop Improvement and Biotechnology"
        description={[""]}
      />

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="flex flex-col gap-8 container normal-case">
          {cropImprovementData.map((item, index) => (
            <div
              key={index}
              className="w-full p-6 bg-white border border-gray-200 shadow-lg flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-full md:w-1/4 h-48 bg-gray-200 flex-shrink-0"></div>
              <div className="flex-1">
                <Typography variant="contentTitle" className="font-bold">
                  {item.title}
                </Typography>
                <Typography variant="paragraphSmall" className="mt-4 text-gray-700 normal-case">
                  {item.description[0]}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container">
          <Typography variant="headingLarge" size="h4" className="text-center mb-8 font-bold">
            Achievements <br /> Varieties Developed
          </Typography>
          <VarietiesCarousel />
        </div>
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white normal-case">
        <div className="container">
          <h3 className="text-start text-green-800 mb-8 font-bold">
            Guava (<i>Psidium guajava</i> L.)
          </h3>
          <VarietyGrid items={guavaVarietiesData} cols={4} />
        </div>
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0] normal-case">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-start text-green-800 mb-8 font-bold">
                Jamun (<i>Syzygium cumini</i> Skeels)
              </h3>
              <VarietyGrid items={jamunVarietiesData} cols={2} />
            </div>

            <div>
              <h3 className="text-start text-green-800 mb-8 font-bold">
                Bael (<i>Aegle marmelos</i> Corr.)
              </h3>
              <VarietyGrid items={baelVarietiesData} cols={2} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CropImprovementPage;
