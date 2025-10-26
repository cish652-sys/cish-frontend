"use-client";
import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import Typography from "@/designs/atoms/Typography";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// Data for the committee table, transcribed from the image
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
  { sl: "7.", name: "Dr. Anju Bajpai", designation: "Principal Scientist", membership: "Member" },
  {
    sl: "6.",
    name: "Dr. Muthukumar M.",
    designation: "Senior Scientist",
    membership: "Member Secretary",
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
          { label: "DIVISION", href: "/division" },
          { label: "CISH ITMU / IPR CELL" },
        ]}
        iconProps={true}
        title="CISH ITMU / IPR CELL"
        description={[""]}
      />
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
              <li className="text-gray-700 text-[15px] leading-normal">
                CREATING AWARENESS ON INTELLECTUAL PROPERTY RIGHTS.
              </li>
            </ol>
          </div>
        </div>
      </section>
      {/* --- Committee Table --- */}
      <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-12">
        <div className="container max-w-4xl mx-auto flex flex-col gap-6">
          <Typography variant="sectionHeading" className="text-green-800 font-bold">
            INSTITUTE TECHNOLOGY MANAGEMENT UNIT (ITMU) COMMITTEE :
          </Typography>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse">
              <thead className="bg-[#599A5E] text-white">
                <tr>
                  <th className="p-3 text-left">Sr. No.</th>
                  <th className="p-3 text-left">Name Of The Officer</th>
                  <th className="p-3 text-left">Designation</th>
                  <th className="p-3 text-left">Membership</th>
                </tr>
              </thead>
              <tbody>
                {committeeData.map((member) => (
                  <tr key={member.sl} className="even:bg-gray-100">
                    <td className="p-3 border-t border-gray-300">{member.sl}</td>
                    <td className="p-3 border-t border-gray-300">{member.name}</td>
                    <td className="p-3 border-t border-gray-300">{member.designation}</td>
                    <td className="p-3 border-t border-gray-300">{member.membership}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* --- Button Grid --- */}
      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <a
            href="/Commercialization"
            className="p-4 h-24 flex items-center justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            COMMERCIALIZATION OF TECHNOLOGIES
          </a>
          <a
            href="/Itmu/IprProtection" // Add your link here
            className="p-4 h-24 flex items-center justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            IPR PROTECTION
          </a>
          <a
            href="/ServiceFunctions" // Add your link here
            className="p-4 h-24 flex items-center justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            PROFESSIONAL SERVICE FUNCTION
          </a>
          <a
            href="/TrainingAttended" // Add your link here
            className="p-4 h-24 flex items-center justify-center text-center bg-green-800 border border-green-800 shadow-sm hover:shadow-md transition text-white font-semibold"
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
