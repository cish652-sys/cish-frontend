"use client";
import React, { useEffect, useState } from "react";
import Typography from "../atoms/Typography";
import { SectionHeader } from "../organisms/SectionHeader";
import { Logo } from "../atoms/Logo";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import { StaffFlipCard } from "../molecules/StaffFlipCard";
import { StaffsItems } from "../organisms/StaffsGrid";
import { DataTable, Column, TableRow } from "../molecules/DataTable";
import Image from "next/image"; // 2. Import Image for the gallery

const regionalStaffData: StaffsItems[] = [
  {
    id: "1",
    name: "DR. DIPAK NAYAK",
    title: "",
    description: [""],
    image: "/icons/dummyStaff.svg",
    designation: "N/A",
    icarEmail: "N/A",
    specialization: "N/A",
    joiningDate: "N/A",
    mscInstitute: "N/A",
    phdInstitute: "N/A",
  },
  {
    id: "2",
    name: "DR VIMALKUMAR C",
    title: "",
    description: [""],
    image: "/icons/dummyStaff.svg",
    designation: "PRINCIPAL SCIENTIST",
    icarEmail: "vimalkumar.c@icar.gov.in",
    altEmail: "vimalkumar.c@gmail.com",
    specialization: "PLANT PATHOLOGY",
    joiningDate: "17/11/1999",
    mscInstitute: "UNIVERSITY OF AGRICULTURAL SCIENCES, BENGALURU",
    phdInstitute: "INDIAN AGRICULTURAL RESEARCH INSTITUTE, NEW DELHI",
  },
  {
    id: "3",
    name: "MR. NABIN KUMAR DAS",
    title: "",
    description: [""],
    image: "/icons/dummyStaff.svg",
    designation: "N/A",
    icarEmail: "N/A",
    specialization: "N/A",
    joiningDate: "N/A",
    mscInstitute: "N/A",
    phdInstitute: "N/A",
  },
];
const kvkStaffData: StaffsItems[] = [
  {
    id: "4",
    name: "DR DUSHYANT KUMAR RAGHAV",
    title: "",
    description: [""],
    image: "/icons/dummyStaff.svg",
    designation: "SENIOR SCIENTIST CUM",
    icarEmail: "dushyant.raghav@icar.gov.in",
    altEmail: "dushyant.raghav@gmail.com",
    specialization: "AGRICULTURE ENTOMOLOGY",
    joiningDate: "21/11/1998",
    mscInstitute: "CSJM UNIVERSITY, KANPUR",
    phdInstitute: "CCS UNIVERSITY, MEERUT",
  },
  {
    id: "5",
    name: "DR. SHAILESH KUMAR",
    title: "",
    description: [""],
    image: "/icons/dummyStaff.svg",
    designation: "N/A",
    icarEmail: "N/A",
    specialization: "N/A",
    joiningDate: "N/A",
    mscInstitute: "N/A",
    phdInstitute: "N/A",
  },
  {
    id: "6",
    name: "SH. VARNAYUDH VRATDHARI DIPTIKAR",
    title: "",
    description: [""],
    image: "/icons/dummyStaff.svg",
    designation: "N/A",
    icarEmail: "N/A",
    specialization: "N/A",
    joiningDate: "N/A",
    mscInstitute: "N/A",
    phdInstitute: "N/A",
  },
];

// --- (Project Data is unchanged) ---
const projectColumns: Column[] = [
  { key: "srNo", label: "S. No.", width: "10%", align: "center" },
  { key: "title", label: "Title Of Project", width: "50%", align: "left" },
  { key: "funding", label: "Funding Agency And Duration", width: "40%", align: "left" },
];
const regionalProjectData: TableRow[] = [
  {
    srNo: "1.",
    title: "Integrated Beekeeping Development Centre (Centre Of Excellence On Beekeeping)",
    funding: "National Bee Board, GOI (2018 Onward)",
  },
  {
    srNo: "2.",
    title:
      "Advance Centre For Establishment Of Value Chain And Food Processing Of Agri-Horticultural Crops To Empower Rural Youth, Self Help Groups And Prospecting Entrepreneurs",
    funding: "RKVY (July 2018 Onward)",
  },
  {
    srNo: "3.",
    title:
      "Responsible Use Of Plant Protection Products In Mango For Farmers Safety And Enhancing Yield Of The Crops In West Bengal And Bihar.",
    funding: "Crop Life India Ltd. (July 2018 Onward)",
  },
  { srNo: "4.", title: "AICRP On Honey Bees And Pollinators", funding: "ICAR (2018 Onward)" },
  {
    srNo: "5.",
    title: "DUS Testing Centre On Mango (Additional Centre)",
    funding: "PPV & FRA (2017 Onward)",
  },
  { srNo: "6.", title: "AICRP On Fruits", funding: "ICAR (2018 Onward)" },
  {
    srNo: "7.",
    title:
      "Technological Interventions For Quality Mango Production For Doubling Income For Mango Growers In Malda",
    funding: "NABARD",
  },
  { srNo: "8.", title: "Hi-Tech Nursery Project", funding: "Government Of India" },
  { srNo: "9.", title: "Tribal Sub-Plan", funding: "Government Of India" },
  { srNo: "10.", title: "SCSP", funding: "Government Of India" },
];
const kvkProjectData: TableRow[] = [
  {
    srNo: "1.",
    title: "Creation Of Seed Hubs For Increasing Indigenous Production Of Pulses In India",
    funding: "2016 Onwards",
  },
  {
    srNo: "2.",
    title: "Diploma In Agricultural Extension Service For Input Dealers (DAESI)",
    funding: "2017 Onwards",
  },
];

// 3. Data for Activities Gallery
const activitiesImages = [
  "/icons/kvk1.png", // Replace with your image paths
  "/icons/kvk2.png",
  "/icons/kvk3.png",
  "/icons/kvk4.png",
];

const banners = [
  { src: "/icons/rrs.png", alt: "RRS Banner" },
  { src: "/icons/kvk.png", alt: "KVK Banner" },
];
const carouselDots = [0, 1, 2, 3, 4]; // 5 dots as per your image

// --- Page Component ---

const RssKvkMaldaPage = () => {
  // 4. Add state for carousel
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBanner, setActiveBanner] = useState(0);

  const handleViewMore = (staff: StaffsItems) => {
    console.log("View more:", staff.name);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next banner
      setActiveBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        {banners.map((banner, index) => (
          <div
            key={banner.src}
            className={`transition-opacity duration-1000 ease-in-out ${
              activeBanner === index ? "opacity-100" : "opacity-0 absolute top-0 left-0 w-full"
            }`}
          >
            <Logo src={banner.src} alt={banner.alt} responsive />
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeBanner === index ? "bg-white border-2 border-green-700" : "bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "RRS MALDA" }]}
        iconProps={true}
        title="ICAR-CISH Regional Research Station"
        description={[""]}
      />

      <div className="bg-[#FBFBF8] py-12">
        <div className="container mx-auto px-4">
          {/* --- RSS/KVK Malda Section (Mandate) --- */}
          <div className="max-w-5xl mx-auto mb-16">
            <Typography variant="sectionHeading" className="text-left mb-6">
              RRS
            </Typography>
            <ol className="list-decimal bg-white border border-gray-300 shadow-lg p-6 list-inside space-y-3 text-gray-700">
              <li>
                EXPLORATION AND UTILIZATION OF NATIVE DIVERSITY OF MANGO, LITCHI AND OTHER
                UNDERUTILIZED FRUITS.
              </li>
              <li>EXPLORATION AND UTILIZATION OF NATIVE DIVERSITY OF UNDERUTILIZED VEGETABLES.</li>
              <li>IMPROVEMENT OF FRUITS AND VEGETABLES FOR NOVEL TRAITS.</li>
              <li>
                STANDARDIZATION AND REFINEMENT OF THE PACKAGE OF PRACTICES FOR COMMERCIALLY GROWN
                FRUITS AND VEGETABLES.
              </li>
              <li>
                STANDARDIZATION AND PROMOTION OF POST HARVEST MANAGEMENT AND VALUE ADDITION OF
                FRUITS & VEGETABLES.
              </li>
            </ol>
          </div>

          {/* --- ONGOING AND COMPLETED PROJECTS Section --- */}
          <div className="max-w-5xl mx-auto mb-16">
            <Typography variant="sectionHeading" className="text-left mb-8">
              ONGOING AND COMPLETED PROJECTS
            </Typography>
            <h4 className="font-semibold text-green-900 mb-4 mt-6">
              ICAR-CISH REGIONAL RESEARCH STATION, MALDA W.B.
            </h4>
            <DataTable columns={projectColumns} data={regionalProjectData} rowGap={2} />
            <h4 className="font-semibold text-green-900 mb-4 mt-10">
              ICAR-CISH REGIONAL RESEARCH STATION, MALDA W.B.
            </h4>
            <DataTable columns={projectColumns} data={kvkProjectData} rowGap={2} />
          </div>

          {/* --- RESEARCH ACHIEVEMENTS Section --- */}
          <div className="max-w-5xl mx-auto mb-16">
            <Typography variant="sectionHeading" className="text-left mb-6">
              RESEARCH ACHIEVEMENTS AND INITIATIVES
            </Typography>
            <ol className="list-decimal bg-white border border-gray-300 shadow-lg p-6 list-inside space-y-3 text-gray-700">
              <li>
                Documented And Characterized 150 Traditional Mango Varieties And Being Conserved
              </li>
              <li>Identified Papaya Like Flavored And Pineapple Like Fleshed Mango Genotypes</li>
              <li>Documented And Characterized 20 Germplasm Of Bael And Jackfruit</li>
              <li>
                Physico-Chemical Characterization Of Uni-Floral Honey Samples Have Been Done And
                Compared With Locally Available Honey
              </li>
              <li>Quality Of Honey Has Been Analyzed During Different Days Of Maturity</li>
              <li>
                Different Traditional Leafy Vegetables Have Been Documented And Characterized Based
                Nutraceuticals Profiling
              </li>
              <li>
                Established A Hi-Tech Nursery With Production Capacity Of 2.0 Lakh Planting
                Materials With Budget Outlay Of 1.0 Crore
              </li>
              <li>
                Established An Advance Centre On Food Processing And Value Chain Management With
                Budget Outlay Of Rs. 4.21 Crores
              </li>
              <li>
                Established An Advance Laboratory With HPLC, AAS And Molecular Diagnosis Facility
              </li>
              <li>
                Established A Centre Of Excellence On Beekeeping With Budget Outlay Of 89.25 Lakh
              </li>
              <li>
                Established A Seed Hub On Pulses With Annual Production Of Quality Seed More Than
                500 Quintals
              </li>
              <li>Established A Network Of 200 Progressive Growers</li>
              <li>Established Integrated Farming System Model On 5 Acres Area</li>
              <li>Established A Network Of Farm...</li>
            </ol>
          </div>

          {/* --- Staff Section --- */}
          <div className="max-w-5xl mx-auto mb-16">
            <Typography variant="sectionHeading" className="text-left mb-8">
              STAFF
            </Typography>
            <div className="mb-12">
              <h4 className="font-semibold text-green-900 mb-6">
                ICAR-CISH REGIONAL RESEARCH STATION, MALDA W.B.
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {regionalStaffData.map((staff) => (
                  <StaffFlipCard key={staff.id} staff={staff} onViewMore={handleViewMore} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-6">
                ICAR-CISH REGIONAL RESEARCH STATION, MALDA W.B.
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {kvkStaffData.map((staff) => (
                  <StaffFlipCard key={staff.id} staff={staff} onViewMore={handleViewMore} />
                ))}
              </div>
            </div>
          </div>

          {/* --- 5. NEW: ACTIVITIES Section --- */}
          <div className="max-w-5xl mx-auto mb-16">
            <Typography variant="sectionHeading" className="text-left mb-6">
              ACTIVITIES
            </Typography>
            <div className="bg-white border border-gray-300 shadow-lg p-6 space-y-3 text-gray-700">
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  A MoUs i.e. Student Ready Programme Has Been Signed Between Uttar Banga Krishi
                  Viswavidyalaya (UBKV), Cooch Behar, West Bengal And ICAR-CISH Regional Research
                  Station, Malda, West Bengal To Develop The Capacity Building Among Students.
                </li>
                <li>
                  To Provide The Agriculture Knowledge Skill A One Year Course Of Diploma In
                  Agricultural Extension Services For Input Dealers (DAESI) Is Also Started At ICAR-
                  CISH RRS, Malda From October 25th 2017.
                </li>
                <li>
                  <strong>ICAR-CISH RRS Nursery:</strong> ICAR-CISH RRS, Malda Has Initiated To
                  Establish A Hi-Tech Nursery On 4 Ha Area For Quality Planting Material Production
                  With Annual Initial Target Of 1,00,000 Quality Saplings To Ensure The Supply Of
                  Good Quality And Disease Free Planting Material To Farmers, Gardeners, Nurserymen,
                  General Public And Other Government And Private Sectors.
                </li>
                <li>
                  <strong>Adopted Villages:</strong> ICAR-CISH Regional Research Station Has Adopted
                  25 Tribal Villages With 1050 Tribal Households For Establishment Of Nutri-Smart
                  Tribal Village At Habibpur Block Of Malda Under Tribal Sub-Plan Programme.
                </li>
                <li>
                  <strong>Activities Gallery</strong>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                    {activitiesImages.map((src, index) => (
                      <div
                        key={index}
                        className="relative w-full h-32 rounded overflow-hidden shadow-md"
                      >
                        <Image
                          src={src}
                          alt={`Activity Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center gap-2 mt-4">
                    {carouselDots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          activeSlide === index ? "bg-green-600" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <Typography variant="sectionHeading" className="text-left mb-6">
              LINKAGE AND COLLABORATIONS
            </Typography>
            <div className="bg-white border border-gray-300 shadow-lg p-6 space-y-3 text-gray-700">
              <p className="text-center font-semibold text-gray-800 mb-6">
                The CISH-RRS Malda Has In Linkage With Different National And International
                Organizations Such As Ministry Of Agriculture.
              </p>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  National Bee Board, Ministry Of Agriculture & Farmers Welfare, Govt. Of India.
                </li>
                <li>
                  Protection Of Plant Variety And Farmers Right Authority, Ministry Of Agriculture &
                  Farmers Welfare, Govt. Of India.
                </li>
                <li>Department Of Agriculture, Government Of West Bengal.</li>
                <li>
                  Directorate Of Horticulture, Dept. Of FPI & Horticulture, Govt. Of West Bengal.
                </li>
                <li>Ramakrishna Mission Ashrama, Sargachi, Murshidabad.</li>
                <li>
                  National Bank For Agriculture And Rural Development (NABARD), Regional Office,
                  Kolkata.
                </li>
                <li>Agricultural Technology Management Agency, Malda.</li>
                <li>
                  Department Of Agriculture Cooperation And Ministry Of Agriculture And Farmers,
                  Welfare, Govt. Of India.
                </li>
                <li>Crop Life India Ltd, New Delhi.</li>
                <li>National Seed Corporation, Malda Office.</li>
                <li>South Asian Biotechnology Center, New Delhi.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default RssKvkMaldaPage;
