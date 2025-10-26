"use client";
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
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>

      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Division", href: "/Division" },
          { label: "Division of Crop Production" },
        ]}
        iconProps={true}
        title="Division of Crop Production"
        description={[""]}
      />

      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container border border-[#162F6A]/40 bg-white shadow-md max-w-4xl mx-auto flex flex-col gap-8">
          <ul className="list-disc list-outside pl-5 flex flex-col gap-2 my-6 normal-case">
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                In guava cv. Allahabad Safeda, maximum yield (89.58 kg/tree) was recorded with 30 kg
                vermicompost + 250 g Azospirillum + PSB culture per tree + vermiwash spray. Maximum
                TSS (14.86°Brix) was recorded with 30 kg FYM per tree, and ascorbic acid (209.41
                mg/100g) with 30 kg vermicompost + 250 g Azospirillum + PSB culture per tree. The
                maximum benefit–cost ratio (5.97) was obtained with 30 kg vermicompost application.
              </Typography>
            </li>

            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Energy input and output in organic and conventional production of guava cv.
                Allahabad Safeda were worked out. The output–input and energy ratio (9.90) was
                highest with the application of 250 g rhizospheric soil of <i>Ficus benghalensis</i>{" "}
                per tree + 5% Amritpani + organic mulching, compared to 3.48 with the recommended
                dose of chemical fertilizers. Net return (₹1,26,895/ha) and benefit–cost ratio
                (4.26) were also highest in this treatment, compared to ₹47,570 and 2.82 with 30 kg
                FYM per tree + 5% Panchagavya.
              </Typography>
            </li>

            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Application of biodynamic compost (30 kg/tree), cow pat pit (100 g), BD-500 and
                BD-501 as soil and foliar sprays for two years improved fruit yield (114.44 kg/tree)
                and soil organic carbon (1.20%), available N (168.93 ppm), P (27.67 ppm), Zn (3.78
                ppm), Cu (14.78 ppm), and Mn (2.54 ppm) in mango (<i>Mangifera indica</i> L.) cv.
                Mallika.
              </Typography>
            </li>

            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                CISH bio-enhancer is an effective product of beneficial microbes. It is very useful
                for seed/seedling treatment, compost fortification, nutrient uptake, growth
                promotion, and stress management in horticultural and other crops, as observed in
                field trials. These microbes produce IAA, ammonia, and siderophores, and solubilize
                phosphorus and zinc.
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
