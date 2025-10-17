"use client";
import React from "react";
import { SectionHeader } from "../organisms/SectionHeader";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { Header } from "../organisms/Header";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Logo } from "../atoms/Logo";
import Rearch from "../organisms/cardFields/Rearch";
import { StaffCarousel } from "../organisms/StaffCarousel";

const AboutUsPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "ABOUT US" }]}
        iconProps={true}
        title="ABOUT US"
        description={[""]}
      />
      <div className="w-full pb-12 bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-3 mb-6">
            <Icon src="/icons/institute.svg" alt="about institute icon" />
            <Typography variant="sectionHeading">ABOUT INSTITUTE</Typography>
          </div>
          <section id="about-institute " className="border p-6 bg-white shadow-sm mb-16">
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                The Central Institute For Subtropical Horticulture (CISH) Was Started As Central
                Mango Research Station On September 4, 1972 Under The Aegis Of The Indian Institute
                Of Horticultural Research, Bangalore
              </li>
              <li>
                The Research Station Was Upgraded To A Full-fledged Institute And Named As Central
                Institute Of Horticulture For Northern Plains On June 1, 1984
              </li>
              <li>
                Renamed As Central Institute For Subtropical Horticulture (CISH) On June 14, 1995,
                Is Serving The Nation On Different Aspects Of Research On Mandated Subtropical
                Fruits
              </li>
              <li>
                Has Two Experimental Farms, One At Rehmankhera (132.5 Ha) Approximately 25 Km Away
                From The City And The Other (13.2 Ha) At Rai Bareli (R.B.) Road, In The City Of
                Lucknow
              </li>
              <li>
                Has Scientific Nursery Facilities, Well Established Orchards, Fully Equipped
                Laboratories; Trainees Hostel-Cum-Guest House Located At R.B. Road Campus
              </li>
              <li>
                Has In Place MOU To Facilitate Capacity Building With Allahabad Agricultural
                Institute (Deemed University), Allahabad, APS University, Rewa, Babasaheb Bhimrao
                Ambedkar University, Lucknow, Bundelkhand University, Jhansi, And Lucknow
                University, Lucknow; Trains Students For Acquiring M.Sc And Ph.D Degrees
              </li>
              <li>
                Recognized By IGNOU, New Delhi As One Of The Study Centres For Offering One Year
                Diploma Course On Value Added Products From Fruits And Vegetables
              </li>
              <li>
                National Horticulture Mission Has Identified The Institute As Nodal Centre For
                Imparting Training On Rejuvenation Of Old And Senile Mango Orchards And Meadow
                Orcharding In Guava
              </li>
              <li>
                A Fully Equipped Pesticide Residue Analysis And Bio-Control Laboratories Are Other
                Features
              </li>
              <li>
                Modern Facility To Address Issues Of Post-Harvest Management Is Available. Transfer
                Of Technology Initiatives And Kisan Call Centre (Toll Free No: 18001801551)
              </li>
            </ul>
          </section>

          {/* Mandate and Objectives Section - Two Column Layout */}
          <section id="mandate-objectives" className="flex  flex-col md:flex-row gap-12">
            {/* Left Column: Mandate */}
            <div className="w-full  md:w-1/2">
              <div className="flex  items-center gap-3 mb-4">
                <Icon src="/icons/mandate.svg" alt="mandate icon" />
                <Typography variant="sectionHeading">MANDATE</Typography>
              </div>
              <div className="border p-6 bg-white shadow-sm h-full">
                <p className="font-semibold text-gray-800 mb-4">
                  THE INSTITUTE IS PRESENTLY FUNCTIONING WITH THE FOLLOWING MANDATES:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>
                    Basic, Strategic And Applied Research To Enhance Sustainable Productivity,
                    Quality And Utilization Of Subtropical Horticultural Crops.
                  </li>
                  <li>
                    Repository Of Subtropical Horticultural Crop Genetic Resources And Scientific
                    Information.
                  </li>
                  <li>
                    Transfer Of Technology, Capacity Building And Impact Assessment Of Technologies.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Objectives */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Icon src="/icons/objective.svg" alt="objectives icon" />
                <Typography variant="sectionHeading">OBJECTIVES</Typography>
              </div>
              <div className="border p-6 bg-white shadow-sm h-full">
                <p className="font-semibold text-gray-800 mb-4">
                  THE INSTITUTE PURSUES ITS MANDATE THROUGH THE FOLLOWING OBJECTIVES:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>
                    Management Of Genetic Resources Of Mandated Fruit Crops And Their Conventional
                    And Molecular Characterization.
                  </li>
                  <li>Crop Improvement Through Breeding And Genetic Engineering.</li>
                  <li>
                    Enhancing Productivity Through Improving Quality And Quantity Of Planting
                    Material Using Modern Propagation Techniques And Root Stocks, Precision Farming
                    Practices Including Mechanization And Management Of Biotic And Abiotic Stresses.
                  </li>
                  <li>
                    Reduction In Post Harvest Losses Through Improved Post Harvest Management
                    Practices, Value Addition And Diversification Of Products.
                  </li>
                  <li>
                    Human Resource Development, Transfer Of Technology And Evaluation Of Its
                    Socio-Economic Impact.
                  </li>
                  <li>Data Storage And Retrieval On All Aspects Of Mandated Crops.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Rearch />
      <div className="py-12">
        <div className="flex container items-center gap-3 mb-4">
          <Icon src="/icons/staffs.svg" alt="objectives icon" />
          <Typography variant="sectionHeading">STAFF</Typography>
        </div>
        <StaffCarousel />
      </div>
      <Footer />
    </main>
  );
};

export default AboutUsPage;
