import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
// --- Import Typography for consistent titles ---
import Typography from "@/designs/atoms/Typography";
import React from "react"; // Added React import

// ==========================
// DATA
// ==========================
const consultancyData = [
  { sr: 1, year: "2001-02", no: 4 },
  { sr: 2, year: "2002-03", no: 5 },
  { sr: 3, year: "2003-04", no: 6 },
  { sr: 4, year: "2004-05", no: 5 },
  { sr: 5, year: "2005-06", no: 6 },
  { sr: 6, year: "2007-08", no: 3 },
  { sr: 7, year: "2008-09", no: 5 },
  { sr: 8, year: "2009-10", no: 1 },
  { sr: 9, year: "2010-11", no: 1 },
  { sr: 10, year: "2011-12", no: 2 },
  { sr: 11, year: "2012-13", no: 2 },
  { sr: 12, year: "2013-14", no: "-" },
];

// ==========================
// HELPER COMPONENT
// ==========================
const NoDataRow = ({ colSpan }: { colSpan: number }) => (
  <table className="w-full border-collapse bg-white shadow-sm overflow-hidden">
    <tbody>
      <tr>
        <td colSpan={colSpan} className="px-6 py-8 text-center text-gray-500">
          No data available
        </td>
      </tr>
    </tbody>
  </table>
);

// ==========================
// PAGE COMPONENT
// ==========================
export default function Consultancy() {
  return (
    // Changed main bg to match other pages
    <main className="w-full bg-white"> 
      <Header />
      <ResponsiveNavbar />
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Consultancy", href: "/Consultancy" },
        ]}
        iconProps={true}
        title="CONSULTANCY"
        description={[""]}
      />
      {/* --- Intro Section (Unchanged) --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-6">
          <p className="text-gray-700 leading-relaxed">
            Scientists of the institute rendered scientific/technical service on crop improvement,
            production, protection and post-harvest management technologies of mango, guava, papaya,
            beal and aonla to the orchardists from different parts of the country. Information on
            scientific cultivation of jamun and other underutilized fruit crop was also provided to
            farmers. The scientists and technical officers of the institute visited different
            locations and provided technical know-how to the growers on scientific method of
            cultivation, rejuvenation of old and unproductive orchards, high density planting,
            nutrients, insect pest and diseases and postharvest management aspects, etc.
          </p>
        </div>
      </section>

      {/* ===================================================== */}
      {/* Table Section (MODIFIED)                              */}
      {/* ===================================================== */}
      {/* Changed bg to match other table sections */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-3xl mx-auto flex flex-col gap-4">
          <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
            CONSULTANCY OFFERED
          </Typography>
          <div className="overflow-x-auto">
            {/* Header */}
            <table className="w-full border-collapse mb-3">
              <thead>
                <tr className="bg-[#599A5E]">
                  <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>
                    S. No.
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "50%" }}>
                    Year
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>
                    Number of Consultancies
                  </th>
                </tr>
              </thead>
            </table>
            {/* Body */}
            <div className="w-full">
              {consultancyData.length === 0 ? <NoDataRow colSpan={3} /> : (
                consultancyData.map((item) => (
                  <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                    <tbody>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-center text-gray-700" style={{ width: "25%" }}>
                          {item.sr}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700" style={{ width: "50%" }}>
                          {item.year}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700" style={{ width: "25%" }}>
                          {item.no}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}