// Fixed "use-client" typo
"use client";
import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import Typography from "@/designs/atoms/Typography";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// --- Data Transcribed from Image (Unchanged) ---

const patentsFiledData = [
  {
    sr: "1.",
    fileNo: "202111005138",
    technology: "CISH-Glue Trap",
    patentFileDate: "06.02.2021",
    status: "Awaiting Examination",
  },
  {
    sr: "2.",
    fileNo: "202013038806",
    technology: "CISH-Trap 3",
    patentFileDate: "03.09.2021",
    status: "Application In Hearing",
  },
  {
    sr: "3.",
    fileNo: "202111003761",
    technology: "In-Vitro Bio Immunization Of TC Banana",
    patentFileDate: "28-01-2021",
    status: "Application Not Yet Published",
  },
];

const patentGrantedData = [
  {
    sr: "1.",
    regNo: "202011035052",
    technology:
      "CISH Trap-Q(Solar Based Insect Trap With Double Attraction Mechanism To Attract And Kill Flying Insects)",
    dateOfGrant: "10-11-2021",
    certificate: true,
  },
];

const copyrightsFiledData = [
  {
    sr: "1.",
    diaryNo: "28093/2021-CO/L",
    mobileApp: "Ripe Mango Products(In Hindi)",
    dateOfFilling: "22-11-2021",
    status: "Re-Scrutiny",
  },
  {
    sr: "2.",
    diaryNo: "28091/2021-CO/L",
    mobileApp: "Raw Mango Products(In Hindi)",
    dateOfFilling: "22-11-2021",
    status: "Scrutiny",
  },
  {
    sr: "3.",
    diaryNo: "28094/2021-CO/L",
    mobileApp: "Ripe Mango Products(In English)",
    dateOfFilling: "22-11-2021",
    status: "Scrutiny",
  },
  {
    sr: "4.",
    diaryNo: "28087/2021-CO/L",
    mobileApp: "Raw Mango Products(In English)",
    dateOfFilling: "22-11-2021",
    status: "Re-Scrutiny",
  },
  {
    sr: "5.",
    diaryNo: "28779/2021-CO/L",
    mobileApp: "Aonla Processed Products(In Hindi)",
    dateOfFilling: "30-11-2021",
    status: "Re-Scrutiny",
  },
  {
    sr: "6.",
    diaryNo: "28785/2021-CO/L",
    mobileApp: "Aonla (Indian Gooseberry Products)(In English)",
    dateOfFilling: "30-11-2021",
    status: "Scrutiny",
  },
  {
    sr: "7.",
    diaryNo: "28790/2021-CO/L",
    mobileApp: "Guava Processed Products(In English)",
    dateOfFilling: "30-11-2021",
    status: "Scrutiny",
  },
  {
    sr: "8.",
    diaryNo: "28801/2021-CO/L",
    mobileApp: "Guava Kitchen Recipes",
    dateOfFilling: "30-11-2021",
    status: "Scrutiny",
  },
];

const copyrightGrantedData = [
  {
    sr: "1.",
    diaryNo: "16019/2021-CO/L",
    mobileApp: "Processed Products Of Bael",
    dateOfGrant: "02-09-21",
    certificate: true,
  },
];

const geographicalIndicationData = [
  {
    sr: "1.",
    regNo: "206",
    geographicalIndication: "RATAUL MANGO",
    dateOfGrant: "14-08-2021",
    certificate: true,
  },
];

// Helper component for the "Certificate" link (Unchanged)
// Added margin for spacing
const CertificateLink = () => (
  <a href="#" className="text-blue-600 underline ml-2">
    Certificate
  </a>
);

// Helper component for "No Data" row
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

const IprProtectionPage = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      {/* --- Breadcrumb and Title (Unchanged) --- */}
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "DIVISION", href: "/Division" },
          { label: "CISH ITMU / IPR CELL", href: "/Itmu" },
          { label: "IPR PROTECTION" },
        ]}
        iconProps={true}
        title="PATENTS, COPYRIGHTS AND GI (GEOGRAPHICAL INDICATION) FROM ICAR-CISH"
        description={[""]}
      />
      
      {/* --- Section for all tables --- */}
      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container max-w-5xl mx-auto flex flex-col gap-10">
          
          {/* --- 1. PATENTS FILED --- */}
          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              PATENTS FILED
            </Typography>
            <div className="overflow-x-auto">
              {/* Header */}
              <table className="w-full border-collapse mb-3">
                <thead>
                  <tr className="bg-[#599A5E]">
                    <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "10%" }}>S. No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "20%" }}>Patent File No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "35%" }}>Technology</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "15%" }}>Patent File Date</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "20%" }}>Status</th>
                  </tr>
                </thead>
              </table>
              {/* Body */}
              <div className="w-full">
                {patentsFiledData.length === 0 ? <NoDataRow colSpan={5} /> : (
                  patentsFiledData.map((item) => (
                    <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                      <tbody>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-gray-700" style={{ width: "10%" }}>{item.sr}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "20%" }}>{item.fileNo}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "35%" }}>{item.technology}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "15%" }}>{item.patentFileDate}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "20%" }}>{item.status}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* --- 2. PATENT GRANTED --- */}
          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              PATENT GRANTED
            </Typography>
            <div className="overflow-x-auto">
              {/* Header */}
              <table className="w-full border-collapse mb-3">
                <thead>
                  <tr className="bg-[#599A5E]">
                    <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "10%" }}>S. No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "20%" }}>Registration No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "50%" }}>Technology</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "20%" }}>Date Of Grant</th>
                  </tr>
                </thead>
              </table>
              {/* Body */}
              <div className="w-full">
                {patentGrantedData.length === 0 ? <NoDataRow colSpan={4} /> : (
                  patentGrantedData.map((item) => (
                    <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                      <tbody>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-gray-700" style={{ width: "10%" }}>{item.sr}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "20%" }}>{item.regNo}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "50%" }}>{item.technology}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "20%" }}>
                            {item.dateOfGrant} {item.certificate && <CertificateLink />}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* --- 3. COPYRIGHTS FILED --- */}
          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              COPYRIGHTS FILED
            </Typography>
            <div className="overflow-x-auto">
              {/* Header */}
              <table className="w-full border-collapse mb-3">
                <thead>
                  <tr className="bg-[#599A5E]">
                    <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "10%" }}>S. No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "20%" }}>Diary No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "35%" }}>Mobile App</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "15%" }}>Date Of Filling</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "20%" }}>Application Status</th>
                  </tr>
                </thead>
              </table>
              {/* Body */}
              <div className="w-full">
                {copyrightsFiledData.length === 0 ? <NoDataRow colSpan={5} /> : (
                  copyrightsFiledData.map((item) => (
                    <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                      <tbody>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-gray-700" style={{ width: "10%" }}>{item.sr}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "20%" }}>{item.diaryNo}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "35%" }}>{item.mobileApp}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "15%" }}>{item.dateOfFilling}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "20%" }}>{item.status}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* --- 4. COPYRIGHT GRANTED --- */}
          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              COPYRIGHT GRANTED
            </Typography>
            <div className="overflow-x-auto">
              {/* Header */}
              <table className="w-full border-collapse mb-3">
                <thead>
                  <tr className="bg-[#599A5E]">
                    <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "10%" }}>S. No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>Diary No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "40%" }}>Mobile App</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>Date Of Grant</th>
                  </tr>
                </thead>
              </table>
              {/* Body */}
              <div className="w-full">
                {copyrightGrantedData.length === 0 ? <NoDataRow colSpan={4} /> : (
                  copyrightGrantedData.map((item) => (
                    <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                      <tbody>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-gray-700" style={{ width: "10%" }}>{item.sr}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "25%" }}>{item.diaryNo}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "40%" }}>{item.mobileApp}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "25%" }}>
                            {item.dateOfGrant} {item.certificate && <CertificateLink />}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* --- 5. GEOGRAPHICAL INDICATION --- */}
          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              GEOGRAPHICAL INDICATION
            </Typography>
            <div className="overflow-x-auto">
              {/* Header */}
              <table className="w-full border-collapse mb-3">
                <thead>
                  <tr className="bg-[#599A5E]">
                    <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "10%" }}>S. No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>Registration No.</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "40%" }}>Geographical Indication</th>
                    <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>Date Of Grant</th>
                  </tr>
                </thead>
              </table>
              {/* Body */}
              <div className="w-full">
                {geographicalIndicationData.length === 0 ? <NoDataRow colSpan={4} /> : (
                  geographicalIndicationData.map((item) => (
                    <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                      <tbody>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-center text-gray-700" style={{ width: "10%" }}>{item.sr}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "25%" }}>{item.regNo}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "40%" }}>{item.geographicalIndication}</td>
                          <td className="px-6 py-4 text-left text-gray-700" style={{ width: "25%" }}>
                            {item.dateOfGrant} {item.certificate && <CertificateLink />}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
};

export default IprProtectionPage;