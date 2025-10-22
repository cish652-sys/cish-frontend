"use-client";
import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import Typography from "@/designs/atoms/Typography";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

const CropProductionPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "DIVISION", href: "/division" },
          { label: "DIVISION OF CROP PRODUCTION" },
        ]}
        iconProps={true}
        title="DIVISION OF CROP PRODUCTION"
        description={[""]}
      />
      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12 ">
        <div className="container border border-[#162F6A]/40 bg-white shadow-md max-w-4xl mx-auto flex flex-col gap-8 ">
          <ul className="list-disc list-outside pl-5 flex flex-col gap-4 mt-6">
            <li>
              <Typography variant="paragraphSmall">
                In Guava Cv. Allahabad Safeda, Maximum Yield (89.58 Kg /Tree) Was Recorded With 30
                Kg Vermicompost + 250 G Azospirillum + PSB Culture /Tree + Vermiwash Spray. Maximum
                TSS (14.860 Brix) Recorded With 30 Kg FYM /Tree And Ascorbic Acid (209.41 Mg/100g)
                With Of 30 Kg Vermicompost + 250 G Azospirillum + PSB Culture /Tree. Maximum Benefit
                Cost Ratio (5.97) Was Obtained With 30 Kg Vermicompost Application.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Energy Input And Output In Organic And Conventional Production Of Guava Cv.
                Allahabad Safeda Was Worked Out. Output Input And Energy Ratio (9.90) Was Highest
                With Application Of 250 G Rhizospheric Soil Of Ficus Benghalensis /Tree + 5%
                Amritpani + Organic Mulching Compared To 3.48 With Application Of Recommended Dose
                Of Chemical Fertilizers. Net Return (Rs. 126895/ Ha) And Benefit Cost Ratio (4.26)
                Was Computed Maximum In T3 Compared To Rs 47,570 And 2.82 With 30 Kg FYM /Tree + 5
                Per Cent Panchagavya.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Application Of Biodynamic Compost (30 Kg/Tree), Cow Pat Pit (100 G), BD- 500 And BD-
                501 As Soil And Foliar Spray For Two Years Improved The Fruit Yield 114.44kg/Tree
                And Soil Organic Carbon (1.20%), Available N (168.93 Ppm), P (27.67 Ppm), Zn (3.78
                Ppm), Cu (14.78 Ppm) And Mn (2.54 Ppm) In Mango (Mangifera Indica L.) Cv. Mallika.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                CISH Bio-Enhancer Is Effective Product Of Beneficial Microbes. It Is Very Useful For
                Seed/Seedling Treatment, Fortification Of Compost, Nutrients, Growth And Stress
                Management In Horticultural And Other Crops As Evident/Assessed In Field Trails.
                These Microbes Produce IAA, Ammonia, Siderophores And Solubilize P And Zn.
              </Typography>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CropProductionPage;
