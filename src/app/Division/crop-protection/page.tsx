"use client";
import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import Typography from "@/designs/atoms/Typography";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

const CropProtectionPage = () => {
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
          { label: "Division of Crop Protection" },
        ]}
        iconProps={true}
        title="Division of Crop Protection"
        description={[""]}
      />

      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container border border-[#162F6A]/40 bg-white shadow-md max-w-4xl mx-auto flex flex-col gap-8">
          <ul className="list-disc list-outside pl-5 flex flex-col gap-2 my-6 normal-case">
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Bio-ecological studies of important insect pests of mango have been carried out and
                forecasting models for fruit fly and hopper of mango have been developed.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Methyl eugenol wooden block traps were found highly efficient in trapping male mango
                fruit flies to reduce the population of this important pest.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                A forecasting model for the prediction of powdery mildew was developed. A
                temperature regime of 7.8–14.4°C (min.) and 28.1–36.4°C (max.) prevailing during
                February and March was found congenial for the appearance of powdery mildew.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Five antagonists isolated from mango phylloplane (Bacillus coagulans), fruit surface
                (LSF-8), and organic liquid pesticides (BDB-I, II & III), when applied against mango
                bacterial canker under field conditions (5.50–10.55 & 21.11–26.34), were found
                almost comparable with antibiotics (9.98–18.70 & 20.0–21.33) in checking the disease
                incidence and intensity. These antagonists were identified as species of Bacillus,
                Pseudomonas, and Acinetobacter.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Four distinct bacterial isolates have been found to exhibit nemato-antagonistic
                potential. Of these, two (Flavobacterium sp. and Sphingomonas terrae) appear to be
                new nematode antagonists.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Chemical control measures of important insect pests and diseases of mango have been
                standardized, and spray schedules have been developed for their commercial adoption.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Integrated pest management (IPM) modules for mango insect pests and diseases have
                been developed and standardized. The technology is being demonstrated in six
                districts of Uttar Pradesh.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Efficient pollinators for mango, guava, and aonla have been identified.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                A simple technique for control of postharvest diseases has been developed, which
                involves covering fruits on trees with paper bags one month prior to harvest. This
                eliminates all postharvest diseases in an eco-friendly manner.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Inoculation technique (stem hole inoculation) for reproduction of wilt in guava has
                been standardized. <i>Gliocladium roseum</i> has been found to be the most potent
                causal pathogen for guava wilt, as it produces symptoms in grown-up plants in the
                field within two months of inoculation.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Papaya ring spot virus (PRSV) has been identified as the most important viral
                disease of papaya, causing considerable loss to the crop. Aphid vectors for the
                transmission of this virus have been identified.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall" className="normal-case">
                Major nematode pests of papaya have been identified, and the synergistic interaction
                of root-knot nematode with PRSV has been established.
              </Typography>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CropProtectionPage;
