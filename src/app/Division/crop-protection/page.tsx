"use-client";
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
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "DIVISION", href: "/division" },
          { label: "DIVISION OF CROP PROTECTION" },
        ]}
        iconProps={true}
        title="DIVISION OF CROP PROTECTION"
        description={[""]}
      />
      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12 ">
        <div className="container border border-[#162F6A]/40 bg-white shadow-md max-w-4xl mx-auto flex flex-col gap-8 ">
          <ul className="list-disc list-outside pl-5 flex flex-col gap-4 mt-6">
            <li>
              <Typography variant="paragraphSmall">
                Bio-Ecological Studies Of Important Insect Pests Of Mango Have Been Carried Out And
                Forecasting Models For Fruit Fly And Hopper Of Mango Have Been Developed.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Methyl Eugenol Wooden Block Traps Were Found Highly Efficient In Trapping Male Mango
                Fruit Flies To Reduce The Population Of This Important Pest.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                A Forecasting Model For The Prediction Of Powdery Mildew Was Developed. A
                Temperature Regime Of 7.80- 14.40 C (Min.) And 28.10- 36.40 C (Max.) Prevailed
                During February And March Was Found Congenial For The Appearance Of Powdery Mildew.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Five Antagonists, Isolated From Mango Phylloplane (Bacillus Coagulans), Fruit
                Surface (LSF-8) And Organic Liquid Pesticides (BDB-I, II & III) When Applied Against
                Mango Bacterial Canker Under Field Conditions (5.50-10.55 & 21.11- 26.34) Was Almost
                Found Comparable With Antibiotic (9.98-18.70 & 20.0-21.33) In Checking The Disease
                Incidence And Intensity, Respectively. These Antagonists Were Identified As Species
                Of Bacillus, Pseudomonas And Acenetobacter.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Four Distinct Bacterial Isolates Have Been Found To Exhibit Nemato-Antagonistic
                Potential. Out Of Four, Two (Flavobacterium Sp. & Sphingomonas Terrae) Appears To Be
                New Nematode Antagonists.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Chemical Control Measures Of Important Insect Pests And Diseases Of Mango Have Been
                Standardized And Spray Schedules Have Been Developed For Their Commercial Adoption.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Integrated Pest Management (IPM) Module For Mango Insect Pests And Diseases Have
                Been Developed And Standardized. The Technology Is Being Demonstrated In Six
                Districts Of Uttar Pradesh.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Efficient Pollinators For Mango, Guava And Aonla Have Been Identified.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                A Simple Technique For Control Of Postharvest Diseases Is Developed Which Involves
                Covering Fruits On Trees With Paper Bags One Month Prior Harvest, Which Eliminates
                All Postharvest Diseases In Eco-Friendly Manner.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Inoculation Technique (Stem Hole Inoculation) For Reproduction Of Wilt In Guava Has
                Been Standardized. Gliocladium Roseum Has Been Found Most Potent Causal Pathogen For
                Guava Wilt, As It Produces Symptoms In Grown Up Plants In Field Within 2 Months Of
                Inoculation.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Papaya Ring Spot Virus (PRSV) Has Been Identified As The Most Important Viral
                Disease Of Papaya, Which Causes Considerable Loss To The Crop. Aphid Vectors For The
                Transmission Of This Virus Have Been Identified.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraphSmall">
                Major Nematode Pests Of Papaya Have Been Identified And Synergistic Interaction Of
                Root-Knot Nematode With PRSV Has Been Its Established.
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
