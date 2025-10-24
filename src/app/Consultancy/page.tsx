import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
export default function Consultancy() {
  const consultancyData = [
    { sr: 1, year: "2001-02", number: 4 },
    { sr: 2, year: "2002-03", number: 5 },
    { sr: 3, year: "2003-04", number: 6 },
    { sr: 4, year: "2004-05", number: 5 },
    { sr: 5, year: "2005-06", number: 6 },
    { sr: 6, year: "2007-08", number: 3 },
    { sr: 7, year: "2008-09", number: 5 },
    { sr: 8, year: "2009-10", number: 1 },
    { sr: 9, year: "2010-11", number: 1 },
    { sr: 10, year: "2011-12", number: 2 },
    { sr: 11, year: "2012-13", number: 2 },
    { sr: 12, year: "2013-14", number: "-" },
  ];

  return (
    <main className="w-full bg-[#FBFAF0]">
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
      {/* --- Intro Section --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-6">
          <p className="text-gray-700 leading-relaxed">
            Scientists of the institute rendered scientific and technical services on crop
            improvement, production, protection, and postharvest management technologies of mango,
            guava, papaya, bael, and aonla to orchardists from different parts of the country.
            Information on the scientific cultivation of jamun and other underutilized fruit crops
            was also provided to farmers. The scientists and technical officers of the institute
            visited different locations and provided technical know-how to the growers on scientific
            methods of cultivation, rejuvenation of old and unproductive orchards, high-density
            planting, nutrient management, insect pest and disease control, and postharvest
            management aspects.
          </p>
        </div>
      </section>

      {/* --- Table Section --- */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-3xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">CONSULTANCY OFFERED</h2>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse table-fixed">
              <thead className="bg-lime-200">
                <tr>
                  <th className="p-3 text-center font-semibold text-gray-800 border-b border-gray-300 w-1/4">
                    Sr. No.
                  </th>
                  <th className="p-3 text-center font-semibold text-gray-800 border-b border-gray-300 w-1/2">
                    Year
                  </th>
                  <th className="p-3 text-center font-semibold text-gray-800 border-b border-gray-300 w-1/4">
                    Number of Consultancies
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
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
                ].map((item, index) => (
                  <tr key={item.sr} className={index % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    <td className="p-3 border-t border-gray-300 text-center text-gray-700">
                      {item.sr}
                    </td>
                    <td className="p-3 border-t border-gray-300 text-center text-gray-700">
                      {item.year}
                    </td>
                    <td className="p-3 border-t border-gray-300 text-center text-gray-700">
                      {item.no}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
