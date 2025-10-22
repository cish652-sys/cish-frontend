"use-client";
import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import Typography from "@/designs/atoms/Typography";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// --- Data Transcribed from Image ---

const patentsFiledData = [
  { sr: "1.", fileNo: "202111005138", technology: "CISH-Glue Trap", patentFileDate: "06.02.2021", status: "Awaiting Examination" },
  { sr: "2.", fileNo: "202013038806", technology: "CISH-Trap 3", patentFileDate: "03.09.2021", status: "Application In Hearing" },
  { sr: "3.", fileNo: "202111003761", technology: "In-Vitro Bio Immunization Of TC Banana", patentFileDate: "28-01-2021", status: "Application Not Yet Published" }
];

const patentGrantedData = [
  { sr: "1.", regNo: "202011035052", technology: "CISH Trap-Q(Solar Based Insect Trap With Double Attraction Mechanism To Attract And Kill Flying Insects)", dateOfGrant: "10-11-2021", certificate: true }
];

const copyrightsFiledData = [
  { sr: "1.", diaryNo: "28093/2021-CO/L", mobileApp: "Ripe Mango Products(In Hindi)", dateOfFilling: "22-11-2021", status: "Re-Scrutiny" },
  { sr: "2.", diaryNo: "28091/2021-CO/L", mobileApp: "Raw Mango Products(In Hindi)", dateOfFilling: "22-11-2021", status: "Scrutiny" },
  { sr: "3.", diaryNo: "28094/2021-CO/L", mobileApp: "Ripe Mango Products(In English)", dateOfFilling: "22-11-2021", status: "Scrutiny" },
  { sr: "4.", diaryNo: "28087/2021-CO/L", mobileApp: "Raw Mango Products(In English)", dateOfFilling: "22-11-2021", status: "Re-Scrutiny" },
  { sr: "5.", diaryNo: "28779/2021-CO/L", mobileApp: "Aonla Processed Products(In Hindi)", dateOfFilling: "30-11-2021", status: "Re-Scrutiny" },
  { sr: "6.", diaryNo: "28785/2021-CO/L", mobileApp: "Aonla (Indian Gooseberry Products)(In English)", dateOfFilling: "30-11-2021", status: "Scrutiny" },
  { sr: "7.", diaryNo: "28790/2021-CO/L", mobileApp: "Guava Processed Products(In English)", dateOfFilling: "30-11-2021", status: "Scrutiny" },
  { sr: "8.", diaryNo: "28801/2021-CO/L", mobileApp: "Guava Kitchen Recipes", dateOfFilling: "30-11-2021", status: "Scrutiny" }
];

const copyrightGrantedData = [
  { sr: "1.", diaryNo: "16019/2021-CO/L", mobileApp: "Processed Products Of Bael", dateOfGrant: "02-09-21", certificate: true }
];

const geographicalIndicationData = [
  { sr: "1.", regNo: "206", geographicalIndication: "RATAUL MANGO", dateOfGrant: "14-08-2021", certificate: true }
];

// Helper component for the "Certificate" link
const CertificateLink = () => (
  <a href="#" className="text-blue-600 underline">
    Certificate
  </a>
);

const IprProtectionPage = () => {
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
          { label: "CISH ITMU / IPR CELL", href: "/division/itmu-ipr-cell" }, // Link back to parent
          { label: "IPR PROTECTION" },
        ]}
        iconProps={true}
        title="PATENTS, COPYRIGHTS AND GI (GEOGRAPHICAL INDICATION) FROM ICAR-CISH"
        description={[""]}
      />

      {/* --- Section for all tables --- */}
      <section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container max-w-5xl mx-auto flex flex-col gap-10">

          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              PATENTS FILED
            </Typography>
            <div className="overflow-x-auto shadow-lg border border-gray-300">
              <table className="w-full border-collapse">
                <thead className="bg-[#599A5E] text-white">
                  <tr>
                    <th className="p-3 text-left">Sr. No.</th>
                    <th className="p-3 text-left">Patent File No.</th>
                    <th className="p-3 text-left">Technology</th>
                    <th className="p-3 text-left">Patent File Date</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patentsFiledData.map((item) => (
                    <tr key={item.sr} className="even:bg-gray-100 bg-white">
                      <td className="p-3 border-t border-gray-300">{item.sr}</td>
                      <td className="p-3 border-t border-gray-300">{item.fileNo}</td>
                      <td className="p-3 border-t border-gray-300">{item.technology}</td>
                      <td className="p-3 border-t border-gray-300">{item.patentFileDate}</td>
                      <td className="p-3 border-t border-gray-300">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              PATENT GRANTED
            </Typography>
            <div className="overflow-x-auto shadow-lg border border-gray-300">
              <table className="w-full border-collapse">
                <thead className="bg-[#599A5E] text-white">
                  <tr>
                    <th className="p-3 text-left">Sr. No.</th>
                    <th className="p-3 text-left">Registration No.</th>
                    <th className="p-3 text-left">Technology</th>
                    <th className="p-3 text-left">Date Of Grant</th>
                  </tr>
                </thead>
                <tbody>
                  {patentGrantedData.map((item) => (
                    <tr key={item.sr} className="even:bg-gray-100 bg-white">
                      <td className="p-3 border-t border-gray-300">{item.sr}</td>
                      <td className="p-3 border-t border-gray-300">{item.regNo}</td>
                      <td className="p-3 border-t border-gray-300">{item.technology}</td>
                      <td className="p-3 border-t border-gray-300">
                        {item.dateOfGrant} {item.certificate && <CertificateLink />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              COPYRIGHTS FILED
            </Typography>
            <div className="overflow-x-auto shadow-lg border border-gray-300">
              <table className="w-full border-collapse">
                <thead className="bg-[#599A5E] text-white">
                  <tr>
                    <th className="p-3 text-left">Sr. No.</th>
                    <th className="p-3 text-left">Diary No.</th>
                    <th className="p-3 text-left">Mobile App</th>
                    <th className="p-3 text-left">Date Of Filling</th>
                    <th className="p-3 text-left">Application Status</th>
                  </tr>
                </thead>
                <tbody>
                  {copyrightsFiledData.map((item) => (
                    <tr key={item.sr} className="even:bg-gray-100 bg-white">
                      <td className="p-3 border-t border-gray-300">{item.sr}</td>
                      <td className="p-3 border-t border-gray-300">{item.diaryNo}</td>
                      <td className="p-3 border-t border-gray-300">{item.mobileApp}</td>
                      <td className="p-3 border-t border-gray-300">{item.dateOfFilling}</td>
                      <td className="p-3 border-t border-gray-300">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              COPYRIGHT GRANTED
            </Typography>
            <div className="overflow-x-auto shadow-lg border border-gray-300">
              <table className="w-full border-collapse">
                <thead className="bg-[#599A5E] text-white">
                  <tr>
                    <th className="p-3 text-left">Sr. No.</th>
                    <th className="p-3 text-left">Diary No.</th>
                    <th className="p-3 text-left">Mobile App</th>
                    <th className="p-3 text-left">Date Of Grant</th>
                  </tr>
                </thead>
                <tbody>
                  {copyrightGrantedData.map((item) => (
                    <tr key={item.sr} className="even:bg-gray-100 bg-white">
                      <td className="p-3 border-t border-gray-300">{item.sr}</td>
                      <td className="p-3 border-t border-gray-300">{item.diaryNo}</td>
                      <td className="p-3 border-t border-gray-300">{item.mobileApp}</td>
                      <td className="p-3 border-t border-gray-300">
                        {item.dateOfGrant} {item.certificate && <CertificateLink />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
              GEOGRAPHICAL INDICATION
            </Typography>
            <div className="overflow-x-auto shadow-lg border border-gray-300">
              <table className="w-full border-collapse">
                <thead className="bg-[#599A5E] text-white">
                  <tr>
                    <th className="p-3 text-left">Sr. No.</th>
                    <th className="p-3 text-left">Registration No.</th>
                    <th className="p-3 text-left">Geographical Indication</th>
                    <th className="p-3 text-left">Date Of Grant</th>
                  </tr>
                </thead>
                <tbody>
                  {geographicalIndicationData.map((item) => (
                    <tr key={item.sr} className="even:bg-gray-100 bg-white">
                      <td className="p-3 border-t border-gray-300">{item.sr}</td>
                      <td className="p-3 border-t border-gray-300">{item.regNo}</td>
                      <td className="p-3 border-t border-gray-300">{item.geographicalIndication}</td>
                      <td className="p-3 border-t border-gray-300">
                        {item.dateOfGrant} {item.certificate && <CertificateLink />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
<section className="w-full bg-[#FBFAF0] px-4 md:px-8 lg:px-16 py-12">
        <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <a
            href="#" // Add your link here
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
            href="#" // Add your link here
            className="p-4 h-24 flex items-center justify-center text-center bg-white border border-gray-300 shadow-sm hover:shadow-md transition text-green-800 font-semibold"
          >
            PROFESSIONAL SERVICE FUNCTION
          </a>
          <a
            href="#" // Add your link here
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

export default IprProtectionPage;