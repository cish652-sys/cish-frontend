"use-client";
import React from "react";
import Image from "next/image";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

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

const technologiesCommercialized = [
  { name: "Hot Water Dispersible Aonla-Herbal Tablet", subItems: [] },
  { name: "Decomposer", subItems: [] },
  { name: "Bio-immunization of Tissue Culture Plantlets", subItems: [] },
  { name: "Mango and Guava Pulp Processing", subItems: [] },
  { name: "Ready for Fruit Mushroom Bag Production", subItems: [] },
  { name: "CISH Bio-enhancer", subItems: [] },
  { name: "High-tech fruit plants nursery", subItems: [] },
  { name: "Insect Trap Technology", subItems: [] },
  {
    name: "CISH-OMAT",
    subItems: ["Rataul fruit fly trap container", "CISH Glue Trap"],
  },
  { name: "CISH- Pest Hammer", subItems: [] },
  { name: "Honey Production and Processing", subItems: [] },
];

const supportedStartups = [
  {
    sr: "1.",
    name: "M/s Parashar Agrotech Bio Pvt. Ltd., Varanasi, U.P.",
    tech: "Insect Trap Tech.",
  },
  { sr: "2.", name: "M/s Life Speaks, Sangli, Maharashtra", tech: "Insect Trap Tech." },
  {
    sr: "3.",
    name: "M/s Ranaji Biotech India Private Limited, Kanpur, U.P.",
    tech: "Insect Trap Tech.",
  },
  { sr: "4.", name: "M/s Saavi Industries, Sangli, Maharashtra", tech: "Insect Trap Tech." },
  { sr: "5.", name: "M/s Parxit Agro Techniques/Palvi Industries", tech: "Insect Trap Tech." },
  {
    sr: "6.",
    name: "M/s Global Biotech & Agro Solutions, Lucknow, U.P.",
    tech: "Tissue Culture Tech.",
  },
  {
    sr: "7.",
    name: "M/s Apna Gaon Bioenergy Farmer Producer Co. Ltd., Ayodhya, U.P.",
    tech: "RTF Mushroom Tech.",
  },
  { sr: "8.", name: "M/s Unnayan Vikas Samiti, Lucknow, U.P.", tech: "RTF Mushroom Tech." },
  { sr: "9.", name: "M/s Balaji Agro Foods, Lucknow, U.P.", tech: "Value Addition" },
  { sr: "10.", name: "M/s Shristi Food Products, Malda, West Bengal", tech: "Value Addition" },
  { sr: "11.", name: "M/s Garden King, Kannauj, U.P.", tech: "Value Addition" },
  {
    sr: "12.",
    name: "M/s Vishvaksenah Agro and Dairy Pvt Ltd., Muzaffarpur, Bihar",
    tech: "Value Addition",
  },
  {
    sr: "13.",
    name: "M/s Jaishri Nursery, Varanasi, U.P.",
    tech: "High-tech Fruit Plants Nursery",
  },
  { sr: "14.", name: "M/s Mango Baba, Lucknow, U.P.", tech: "Digital Supply Chain" },
  {
    sr: "15.",
    name: "M/s Avakar EnviroSource Private Ltd., Lucknow, U.P.",
    tech: "Organic Farming Tech.",
  },
];

const HortIndAbiCentrePage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <div className="w-full">
          <Image
            src="/images/abi_centre_banner.png"
            alt="Hort Ind Agri-Business Incubation Centre Banner"
            layout="responsive"
            width={1200}
            height={400}
            objectFit="cover"
          />
        </div>
      </section>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "ABI", href: "/Abi" },
        ]}
        iconProps={true}
        title="HORT IND AGRI-BUSINESS INCUBATION (ABI) CENTRE"
        description={[""]}
      />
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
          </div>
        </div>
      </section>
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">IN-HOUSE INCUBATION FACILITIES:</h2>
          <ol type="a" className="list-lower-alpha list-outside pl-5 flex flex-col gap-2">
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
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">INCUBATION STAGES</h2>
          <div className="overflow-x-auto border border-amber-300">
            <table className="w-full border-collapse">
              <tbody>
                {incubationStages.map((item) => (
                  <tr key={item.stage} className="border-b border-amber-300 last:border-b-0">
                    <td className="p-3 w-1/4 bg-amber-100 border-r border-amber-300">
                      <h2 className="font-semibold text-gray-800">{item.stage}</h2>
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
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">TECHNOLOGIES COMMERCIALIZED THROUGH ABI</h2>
          <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
            {technologiesCommercialized.map((tech) => (
              <li key={tech.name}>
                <h2 className="text-gray-700">{tech.name}</h2>
                {tech.subItems.length > 0 && (
                  <ul className="list-disc list-outside pl-6 mt-1 flex flex-col gap-1">
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
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">
            ICAR-CISH, ABI SUPPORTED STARTUPS/ENTERPRISES/FPO
          </h2>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse">
              <thead className="bg-lime-200">
                <tr>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Sr. No.
                  </th>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Name of Startups / Enterprises / FPO
                  </th>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Technology
                  </th>
                </tr>
              </thead>
              <tbody>
                {supportedStartups.map((item, index) => (
                  <tr key={item.sr} className={index % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    <td className="p-3 border-t border-gray-300">
                      <h2 className="text-gray-700">{item.sr}</h2>
                    </td>
                    <td className="p-3 border-t border-gray-300">
                      <h2 className="text-gray-700">{item.name}</h2>
                    </td>
                    <td className="p-3 border-t border-gray-300">
                      <h2 className="text-gray-700">{item.tech}</h2>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
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
              <a href="#" className="text-blue-600 underline hover:text-blue-800">
                Click here to fill the form online
              </a>
              <span className="text-red-500 font-bold ml-1">new</span>
            </h2>
          </div>

          <div>
            <h2 className="text-green-800 font-bold mb-3">CONTACT US</h2>
            <h2 className="text-gray-700">ICAR-Central Institute for Subtropical Horticulture,</h2>
            <h2 className="text-gray-700">Rehmankhera, P.O. Kakori, Lucknow-226101, India</h2>
            <h2 className="text-gray-700 mt-2">Mobile: 6306965633</h2>
            <h2 className="text-gray-700">Email: cish.abi@gmail.com</h2>
            <h2 className="text-gray-700">
              Website: http://cish.org.in/, https://cish.org.in/abi_n.php
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HortIndAbiCentrePage;
