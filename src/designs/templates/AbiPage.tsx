"use client";

import { DataTable, Column } from "@/designs/molecules/DataTable";
// NEW: Explicitly import types
import React, { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// --- This data is unchanged ---
const incubationStages = [
  { stage: "Stage 1", task: "Invitation of technology from mentors" },
  {
    stage: "Stage 2",
    task: [
      "Invitation of interest of entrepreneurs / Display on website",
      "Application submission",
      "Interview/video conferencing along with CISH-ABI committee and mentors",
      "Credentials of Incubatees",
    ],
  },
  {
    stage: "Stage 3",
    task: "Brief details of technology from mentors based on application/video conferencing",
  },
  { stage: "Stage 4", task: "Recommendation of the committee" },
  { stage: "Stage 5", task: "Approval from competent authority" },
  {
    stage: "Stage 6",
    task: [
      "Letter/mail of admission to the selected candidates",
      "Acceptance of agreement by the incubatee for CISH-ABI",
      "Registration/Admission fee payment (Rs 1000)",
    ],
  },
  { stage: "Stage 7", task: "Technology package from mentors" },
  {
    stage: "Stage 8",
    task: "Finalization of License, royalty formalities and work share",
  },
  { stage: "Stage 9", task: "Incubation phase" },
  { stage: "Stage 10", task: "Work progress (monthly/quarterly/yearly)" },
  {
    stage: "Stage 11",
    task: "Completion of legal formalities before technology handover",
  },
  { stage: "Stage 12", task: "Exit of incubatee" },
  { stage: "Stage 13", task: "Start of business by incubatee" },
  { stage: "Stage 14", task: "Yearly audit by CISH (for sale and royalty)" },
];

// --- This data is unchanged ---
const supportedStartups = [
  {
    sr: "1.",
    name: "M/s Parashar Agrotech Bio Pvt. Ltd., Varanasi, U.P.",
    tech: "Insect Trap Tech.",
    link: "https://www.parasharagrotech.com/",
  },
  {
    sr: "2.",
    name: "M/s Life Speaks, Sangli, Maharashtra",
    tech: "Insect Trap Tech.",
    link: "https://www.lifespeaks.in/",
  },
  {
    sr: "3.",
    name: "M/s Ranaji Biotech India Private Limited, Kanpur, U.P.",
    tech: "Insect Trap Tech.",
    link: "https://www.ranajibiotech.com/",
  },
  {
    sr: "4.",
    name: "M/s Saavi Industries, Sangli, Maharashtra",
    tech: "Insect Trap Tech.",
    link: "",
  },
  {
    sr: "5.",
    name: "M/s Parixit Agro Techniques / Palvi Industries",
    tech: "Insect Trap Tech.",
    link: "https://www.lighttrap.org/",
  },
  {
    sr: "6.",
    name: "M/s Global Biotech & Agro Solutions, Lucknow, U.P.",
    tech: "Tissue Culture Tech.",
    link: "https://www.globalagro.co.in/",
  },
  {
    sr: "7.",
    name: "M/s Apna Gaon Bioenergy Farmer Producer Co. Ltd., Ayodhya, U.P.",
    tech: "RTF Mushroom Tech.",
    link: "",
  },
  {
    sr: "8.",
    name: "M/s Unnayan Vikas Samiti, Lucknow, U.P.",
    tech: "RTF Mushroom Tech.",
    link: "https://www.unnayansamiti.org/",
  },
  {
    sr: "9.",
    name: "M/s Balaji Agro Foods, Lucknow, U.P.",
    tech: "Value Addition",
    link: "",
  },
  {
    sr: "10.",
    name: "M/s Shristi Food Products, Malda, West Bengal",
    tech: "Value Addition",
    link: "https://www.maldaamritfal.com/",
  },
  {
    sr: "11.",
    name: "M/s Garden King, Kannauj, U.P.",
    tech: "Value Addition",
    link: "https://www.mystore.in/store/gardenking/",
  },
  {
    sr: "12.",
    name: "M/s Vishvaksenah Agro and Dairy Pvt Ltd., Muzaffarpur, Bihar",
    tech: "Value Addition",
    link: "https://www.vishvaksenah.com/",
  },
  {
    sr: "13.",
    name: "M/s Jaishri Nursery, Varanasi, U.P.",
    tech: "High-tech Fruit Plants Nursery",
    link: "",
  },
  {
    sr: "14.",
    name: "M/s Mango Baba, Lucknow, U.P.",
    tech: "Digital Supply Chain",
    link: "https://www.mangobaba.in/",
  },
  {
    sr: "15.",
    name: "M/s Avakar EnviroSource Private Ltd., Lucknow, U.P.",
    tech: "Organic Farming Tech.",
    link: "",
  },
];

// --- Column definition is unchanged ---
// (This assumes your imported 'Column' type is correct)
const startupColumns: Column[] = [
  {
    key: "sr",
    label: "S. No.",
    width: "10%",
    align: "center",
  },
  {
    key: "name",
    label: "Name of Startups / Enterprises / FPO",
    width: "60%",
    align: "left",
  },
  {
    key: "tech",
    label: "Technology",
    width: "30%",
    align: "left",
  },
];

// -----------------------------------------------------------------
// NEW: Define an explicit type for the data going into the table
// -----------------------------------------------------------------
interface StartupRow {
  [key: string]: string | ReactNode;
  sr: string;
  tech: string;
  name: ReactNode; // Explicitly type 'name' as a ReactNode
}

// --- Data transform is unchanged, but now uses the type ---
const startupData: StartupRow[] = supportedStartups.map((item) => ({
  sr: item.sr,
  tech: item.tech,
  name: (
    <a
      href={item.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={
        item.link
          ? "text-green-700 hover:text-green-900 hover:underline transition-colors"
          : "text-green-700"
      }
    >
      {item.name}
    </a>
  ),
}));

// -----------------------------------------------------------------
// NEW: Define types for API and State
// -----------------------------------------------------------------

// Type for the API's image object
interface ApiBannerImage {
  url: string;
  thumbnail: boolean;
}

// Type for the API's main data object (based on your JSON)
interface ApiBannerData {
  id: number;
  name: string; // This is the link URL
  date: string | null;
  title: string;
  type: string;
  startDate: string | null;
  endDate: string | null;
  images: ApiBannerImage[];
}

// Type for our component's banner state
interface BannerState {
  imageUrl: string;
  linkUrl: string;
}

// -----------------------------------------------------------------

const HortIndAbiCentrePage = () => {
  // -----------------------------------------------------------------
  // NEW: State for banner data with explicit types
  // -----------------------------------------------------------------
  const fallbackBanner: BannerState = {
    imageUrl: "/icons/ABIBanner.jpg",
    linkUrl: "https://forms.gle/kXEjby2TXkHAYT7m7",
  };

  // Use the explicit 'BannerState' type for useState
  const [bannerData, setBannerData] = useState<BannerState>(fallbackBanner);

  // -----------------------------------------------------------------
  // NEW: useEffect to fetch data
  // -----------------------------------------------------------------
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch("https://api.cish.org.in/api/news?type=abic");
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data: ApiBannerData[] = await response.json();

        if (data && data.length > 0) {
          const firstItem = data[0];
          const firstImage =
            firstItem.images && firstItem.images.length > 0 ? firstItem.images[0] : null;

          // Only update state if we have a valid image URL
          if (firstImage && firstImage.url) {
            // --- THIS IS THE CORRECTED LOGIC ---
            // Use 'title' for the link URL
            let linkUrl = firstItem.title || fallbackBanner.linkUrl;
            // ------------------------------------

            // Prepend https:// if the link doesn't have it
            if (
              linkUrl &&
              !linkUrl.startsWith("http://") &&
              !linkUrl.startsWith("https://") &&
              linkUrl !== fallbackBanner.linkUrl
            ) {
              linkUrl = `https://${linkUrl}`;
            }

            setBannerData({
              imageUrl: firstImage.url,
              linkUrl: linkUrl,
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch banner data, using fallback:", error);
      }
    };

    fetchBannerData();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      {/* // -----------------------------------------------------------------
      // MODIFIED SECTION: This section now uses state
      // -----------------------------------------------------------------
      */}
      <section className="relative w-full flex justify-center">
        <a
          href={bannerData.linkUrl} // <-- Uses BannerState.linkUrl
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <div className="w-full max-w-screen-xl mx-auto">
            <Image
              src={bannerData.imageUrl} // <-- Uses BannerState.imageUrl
              alt="Hort Ind Agri-Business Incubation Centre Banner"
              width={2000}
              height={300}
              style={{ objectFit: "contain" }}
              className="cursor-pointer"
              priority
            />
          </div>
        </a>
      </section>
      {/* // -----------------------------------------------------------------
      // End of modified section
      // -----------------------------------------------------------------
      */}
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "ABI", href: "/Abi" },
        ]}
        iconProps={true}
        title="HORT IND AGRI-BUSINESS INCUBATION (ABI) CENTRE"
        description={[""]}
      />
      {/* --- This section is unchanged --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-8">
          <h2 className="text-gray-700">
            ICAR-CISH, Lucknow is facilitating incubation to new startups/entrepreneurs &
            enterprises for innovative technologies by providing need based physical, technical,
            business and networking support, facilities and services to test and validate their
            venture before successful establishment of enterprises. At CISH-ABI, entrepreneurs will
            be able to transform their ideas into real businesses. The business incubation centre of
            CISH is a one point solution for entrepreneurs and enterprises in horticulture.
          </h2>

          <h2 className="text-green-800 font-bold mt-6">
            ICAR-CISH, AGRI-BUSINESS INCUBATION SERVICES
          </h2>

          <div className="flex flex-col gap-4">
            <h2 className="text-gray-700">
              <span className="font-semibold">Technological mentoring:</span> Scientists working in
              ICAR-CISH provide mentorship to the entrepreneurs in their respective areas of
              expertise during incubation period at the institute. Mentors help in ideation,
              prototype development, product refinement and pilot scale up gradation etc.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Capacity building and training:</span> ICAR-CISH has
              well developed laboratories and infrastructure for conducting hands on training on
              horticulture based technologies. Institute frequently conducts several workshops,
              panel discussion and lectures etc. by the eminent experts for imparting and building
              the capacity of knowledge.
            </h2>

            <h2 className="text-gray-700">
              <span className="font-semibold">Branding and promotion:</span> Startups are mentored
              and facilitated for the branding and promotion of their products through several tools
              and platforms.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Intellectual property management:</span> ICAR-CISH
              helps entrepreneurs in protection of intellectual property issues arise during the
              period of incubation. Mentors will help in filing the patent of process/product
              developed during incubation.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Funding facilitation:</span> Entrepreneurs are helped
              during preparation of Detailed Project Report (DPR) of their business plan, pitch
              preparation and project presentation to attract angel investors. Linkages will be
              developed among entrepreneurs and government funding agencies.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Business Development and Support:</span> ICAR-CISH
              provides technological support to the startups during incubation and after exit of
              incubatee for further up gradation and expansion of business.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Marketing Linkages:</span> Growing startups are helped
              in test marketing by providing backward and forward linkages.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Marketing tools and instrumentation:</span> Website,
              apps, print (banner, poster, brochure and flyer etc.) and digital media development
              facilities are available by the experienced experts under one roof.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Product prototype development:</span> ICAR-CISH expert
              scientists help in developing prototype of various products and their testing before
              development of the final product.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Product refinement:</span> Various enterprises require
              improvement and up gradation of their existing products, are also facilitated.
            </h2>
            <h2 className="text-gray-700">
              <span className="font-semibold">Packaging and designing:</span> Developed products are
              facilitated for high quality designing and packaging through highly advanced tools and
              machines.
            </h2>
          </div>
        </div>
      </section>
      {/* --- This section is unchanged --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold text-lg">IN-HOUSE INCUBATION FACILITIES:</h2>

          <ol type="a" className="list-[lower-alpha] list-outside pl-5 flex flex-col gap-2">
            <li>
              <h2 className="text-gray-700">
                Well equipped laboratory with modern tools, technology & instruments
              </h2>
            </li>
            <li>
              <h2 className="text-gray-700">Well established orchards</h2>
            </li>
            <li>
              <h2 className="text-gray-700">Computer and internet services</h2>
            </li>
            <li>
              <h2 className="text-gray-700">Office space</h2>
            </li>
            <li>
              <h2 className="text-gray-700">Laboratory and pilot scale production facility</h2>
            </li>
            <li>
              <h2 className="text-gray-700">Library cum Information Centre</h2>
            </li>
            <li>
              <h2 className="text-gray-700">Cafeteria</h2>
              <ul className="list-disc list-outside pl-6 mt-1">
                <li>
                  <h2 className="text-gray-700">Need based facilities</h2>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      {/* --- This section is unchanged --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">INCUBATION STAGES</h2>
          <div className="overflow-x-auto border border-amber-300">
            <table className="w-full border-collapse">
              <tbody>
                {incubationStages.map((item) => (
                  <tr key={item.stage} className="border-b border-amber-300 last:border-b-0">
                    <td className="p-3 w-1/4 bg-amber-100 border-r border-amber-300">
                      <h2 className="font-semibold text-amber-900">{item.stage}</h2>
                    </td>
                    <td className="p-3">
                      {Array.isArray(item.task) ? (
                        <ol className="list-decimal list-outside pl-5 flex flex-col gap-1">
                          {item.task.map((subtask, index) => (
                            <li key={index}>
                              <h2 className="text-gray-700">{subtask}</h2>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <h2 className="text-gray-700">{item.task}</h2>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* --- This section is unchanged --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold text-lg">
            TECHNOLOGIES COMMERCIALIZED THROUGH ABI
          </h2>

          <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
            {[
              { name: "Hot Water Dispersible Aonla-Herbal Tablet", subItems: [] },
              { name: "Decomposer", subItems: [] },
              { name: "Bio-immunization of Tissue Culture Plantlets", subItems: [] },
              { name: "Mango and Guava Pulp Processing", subItems: [] },
              { name: "Ready to Fruit Mushroom Bag Production", subItems: [] },
              { name: "CISH-Bio-enhancer", subItems: [] },
              { name: "High-tech fruit plants nursery", subItems: [] },
              {
                name: "Insect Trap Technology",
                subItems: [
                  "CISH-OMAT",
                  "CISH-VMAT",
                  "Rainproof fruit fly trap container",
                  "CISH Glue Trap",
                  "CISH - Pest Hammer",
                ],
              },
              { name: "Honey Production and Processing", subItems: [] },
            ].map((tech) => (
              <li key={tech.name}>
                <h2 className="text-gray-700">{tech.name}</h2>
                {tech.subItems.length > 0 && (
                  <ul className="list-[circle] list-outside pl-6 mt-1 flex flex-col gap-1">
                    {tech.subItems.map((subItem, index) => (
                      <li key={index}>
                        <h2 className="text-gray-700">{subItem}</h2>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* --- This section is unchanged (using your DataTable) --- */}
      <section className="w-full bg-white">
        <DataTable
          title="ICAR-CISH, ABI SUPPORTED STARTUPS/ENTERPRISES/FPO"
          columns={startupColumns}
          data={startupData} // <-- Passing typed StartupRow[]
          showActions={false}
          rowGap={4}
        />
      </section>
      {/* --- This section is unchanged --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-6">
          <div>
            <h2 className="text-green-800 font-bold mb-3">WHO CAN APPLY</h2>
            <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
              <li>
                <h2 className="text-gray-700">
                  Self-motivated person with novel and innovative ideas of entrepreneurship in
                  Horticulture.
                </h2>
              </li>
              <li>
                <h2 className="text-gray-700">
                  Anyone having meaningful and viable idea with sustainable development.
                </h2>
              </li>
              <li>
                <h2 className="text-gray-700">
                  A person who has large canvas of vision for his startup.
                </h2>
              </li>
              <li>
                <h2 className="text-gray-700">A courageous who dream to make it possible.</h2>
              </li>
              <li>
                <h2 className="text-gray-700">Risk takers to conquer the challenges.</h2>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-green-800 font-bold mb-3">HOW TO APPLY</h2>
            <h2 className="text-gray-700">
              Applications are accepted online round the year.{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeShjEV7l7uF328rpbRD7MqfNHLarg9XKUFxCW_gDAAbcmFhw/viewform"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Click here to fill the form online
              </a>
              <span className="text-red-500 font-bold ml-1">new</span>
            </h2>
          </div>

          <div>
            <h2 className="text-green-800 font-bold mb-3">CONTACT US</h2>
            <h2 className="text-gray-700">ICAR-Central Institute for Subtropical Horticulture,</h2>
            <h2 className="text-gray-700">Rehmankhera, P.O. Kakori, Lucknow-226101, India</h2>
            <h2 className="text-gray-700 mt-2">
              Mobile:{" "}
              <a href="tel:6306965633" className="text-blue-600 hover:underline">
                6306965633
              </a>
            </h2>

            <h2 className="text-gray-700">
              Email:{" "}
              <a href="mailto:cish.abi@gmail.com" className="text-blue-600 hover:underline">
                cish.abi@gmail.com
              </a>
            </h2>

            <h2 className="text-gray-700">
              Website:{" "}
              <a
                href="https://cish.org.in/Abi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://cish.org.in/Abi
              </a>
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HortIndAbiCentrePage;
