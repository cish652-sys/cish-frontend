// -----------------------------------------------------------------
// CHANGE 1: Fix typo and import DataTable
// -----------------------------------------------------------------
"use client"; // Fixed "use-client"
import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import Typography from "@/designs/atoms/Typography";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
// --- Assuming the path to your component ---
import { DataTable, Column } from "@/designs/molecules/DataTable";

// -----------------------------------------------------------------
// CHANGE 2: Corrected the serial numbers (sl:) in the data
// -----------------------------------------------------------------
const committeeData = [
  { sl: "1.", name: "Dr. T. Damodaran", designation: "Director", membership: "Chairman" },
  {
    sl: "2.",
    name: "Dr. Maneesh Mishra",
    designation: "I/C Head, Division Of Crop Improvement",
    membership: "Member",
  },
  {
    sl: "3.",
    name: "Dr. P. L. Saroj",
    designation: "I/C Head, Division Of Crop Production",
    membership: "Member",
  },
  {
    sl: "4.",
    name: "Dr. P.K.Shukla",
    designation: "I/C Head, Division Of Crop Protection",
    membership: "Member",
  },
  { sl: "5.", name: "Dr. H.S.Singh", designation: "Principal Scientist", membership: "Member" },
  { sl: "6.", name: "Dr. Anju Bajpai", designation: "Principal Scientist", membership: "Member" }, // Was 7.
  {
    sl: "7.",
    name: "Dr. Muthukumar M.",
    designation: "Senior Scientist",
    membership: "Member Secretary",
  }, // Was 6.
];

// -----------------------------------------------------------------
// CHANGE 3: Define the columns for the DataTable
// -----------------------------------------------------------------
const committeeColumns: Column[] = [
  {
    key: "sl",
    label: "S. No.",
    width: "10%",
    align: "center",
  },
  {
    key: "name",
    label: "Name Of The Officer",
    width: "35%",
    align: "left",
  },
  {
    key: "designation",
    label: "Designation",
    width: "35%",
    align: "left",
  },
  {
    key: "membership",
    label: "Membership",
    width: "20%",
    align: "left",
  },
];

const ItmuIprCellPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      {/* --- Breadcrumb and Title --- */}
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "CISH ITMU / IPR CELL", href: "/Itmu" },
        ]}
        iconProps={true}
        title="CISH ITMU / IPR CELL"
        description={[""]}
      />
      {/* --- This section is unchanged --- */}
      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container max-w-4xl mx-auto flex flex-col gap-6">
          <Typography variant="sectionHeading" className="text-green-800 font-bold">
            ITMU / IPR CELL ACTIVITIES
          </Typography>

          <div className="border border-gray-300 shadow-lg bg-white p-6 md:p-8">
            <ol className="list-decimal list-outside pl-5 flex flex-col gap-2">
              <li className="text-gray-700 text-[15px] leading-normal">
                PROTECTION OF INTELLECTUAL PROPERTIES
              </li>
              <li className="text-gray-700 text-[15px] leading-normal">
                COMMERCIALIZATION OF TECHNOLOGIES
              </li>
              <li className="text-gray-700 text-[15px] leading-normal">
                PROFESSIONAL SERVICE FUNCTION (CONTRACT RESEARCH / CONSULTANCY SERVICE / CONTRACT
                SERVICE)
              </li>
              <li className="text-gray-700 text-[15px] leading-normal">COPYRIGHT REGISTRATION</li>
              <li className="text-gray-700 text-[1A5px] leading-normal">
                CREATING AWARENESS ON INTELLECTUAL PROPERTY RIGHTS.
              </li>
            </ol>
          </div>
        </div>
      </section>
      {/* // -----------------------------------------------------------------
      // CHANGE 4: Replaced the old HTML table section
      // -----------------------------------------------------------------
      // The DataTable component includes its own title prop and padding,
      // so we can replace the entire old <section> block.
      */}
      <section className="w-full bg-white">
        <DataTable
          title="INSTITUTE TECHNOLOGY MANAGEMENT UNIT (ITMU) COMMITTEE :"
          columns={committeeColumns}
          data={committeeData}
          showActions={false} // No actions needed for this table
          rowGap={4} // Using the prop for consistent spacing
        />
      </section>
      {/* // -----------------------------------------------------------------
      // End of modified section
      // -----------------------------------------------------------------
      */}
      {/* --- This section is unchanged --- */}
      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <a
            href="/Commercialization"
            className="p-4 h-24 flex items-center hover:bg-green-700 hover:text-white justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            COMMERCIALIZATION OF TECHNOLOGIES
          </a>
          <a
            href="/Itmu/IprProtection" // Add your link here
            className="p-4 h-24 flex items-center hover:bg-green-700 hover:text-white justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            IPR PROTECTION
          </a>
          <a
            href="/ServiceFunctions" // Add your link here
            className="p-4 h-24 flex items-center hover:bg-green-700 hover:text-white justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            PROFESSIONAL SERVICE FUNCTION
          </a>
          <a
            href="/TrainingAttended" // Add your link here
            className="p-4 h-24 flex items-center hover:bg-green-700 hover:text-white justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            EVENTS
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ItmuIprCellPage;
