"use client";

import React, { useState } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// ==========================
// DATA ARRAYS
// ==========================

const carouselItems = [1, 2, 3, 4];



// Resources (for table)
const libraryResources = [
  { sr: 1, title: "Computer Science", copies: 22 },
  { sr: 2, title: "Statistics", copies: 46 },
  { sr: 3, title: "Plant Physiology", copies: 191 },
  { sr: 4, title: "Genetics", copies: 110 },
  { sr: 5, title: "Plant Breeding", copies: 116 },
  { sr: 6, title: "Biotechnology", copies: 126 },
  { sr: 7, title: "Soil Science", copies: 150 },
  { sr: 8, title: "Fungal Disease", copies: 96 },
  { sr: 9, title: "Plant Pathology", copies: 98 },
  { sr: 10, title: "Entomology", copies: 112 },
  { sr: 11, title: "Fruits", copies: 166 },
  { sr: 12, title: "Horticulture", copies: 248 },
  { sr: 13, title: "Vegetable", copies: 118 },
  { sr: 14, title: "Microbiology", copies: 112 },
  { sr: 15, title: "Hindi Books", copies: 805 },
  { sr: 16, title: "Administrative Books", copies: 102 },
  { sr: 17, title: "Donated Books", copies: 46 },
];

const journalsList = [
  "Annual Review of Biochemistry, California (U.S.A)",
  "Annual Review of Entomology, California (U.S.A.)",
  "Annual Review of Phytopathology, California (U.S.A)",
  "Annual Review of Plant Physiology, California (U.S.A.)",
  "Applied Biodynamics (Woolwine)",
  "Biodynamics (San Francisco)",
  "California Agriculture (Complimentary), New York (U.S.A)",
  "Chronica Horticulturae (Complimentary), Illinois (U.S.A.)",
  "European Journal of Soil Science, Oxford (U.K.)",
  "Food Science & Technology Abstracts, Reading (U.K.)",
  "Fruit Variety Journal, P.A. (U.S.A.)",
  "Horticultural Abstracts, Wallingford (U.K.)",
  "Horticultural Reviews, New York (U.S.A.)",
  "Hort Science, Virginia (U.S.A.)",
  "Hort Technology, Virginia (U.S.A.)",
  "Journal of American Society for Horticultural Science, Virginia (U.S.A.)",
  "Journal of Economic Entomology, Maryland (U.S.A.)",
  "Journal of Horticultural Science & Biotechnology, Ashford (U.K.)",
  "Journal of Food Science, Illinois (U.S.A.)",
  "Nematological Abstracts, Wallingford (U.K.)",
  "Phytopathology, Minnesota (U.S.A.)",
  "Plant Cell Tissue & Organ Culture, Dordrecht (Netherlands)",
  "Plant Diseases, Minnesota (U.S.A.)",
  "Plant Growth Regulator Abstracts, Wallingford (U.K.)",
  "Plant Physiology, Maryland (U.S.A.)",
  "Postharvest Biology & Technology, Amsterdam (Netherlands)",
  "Proceedings of the Florida State Horticultural Society, Florida (U.S.A.)",
  "Review of Agricultural Entomology, Wallingford (U.K.)",
  "Review of Plant Pathology, Wallingford (U.K.)",
  "Scientia Horticulturae, Amsterdam (Netherlands)",
  "Soils & Fertilisers, Wallingford (U.K.)",
  "Transactions of A.S.A.E., ML (U.S.A.)",
  "Tree Physiology, Victoria (Canada)",
  "Tropical Agriculture (West Indies)",
  "Vitis (Germany)",
  "Agricultural News, New Delhi",
  "Agricultural Situation in India",
  "Annals of Plant Protection Sciences, New Delhi",
  "Asian Agri-History, Secunderabad",
  "Beverage & Food World, Mumbai",
  "Current Science, Bangalore",
  "Entomon, Bangalore",
  "Fertilizer News, New Delhi",
  "Haryana Journal of Horticultural Sciences, Hissar",
  "Indian Agriculturist, Calcutta",
  "Indian Food Industry, Mysore",
  "Indian Food Packer, New Delhi",
  "Indian Horticulture, New Delhi",
  "Indian Journal of Agricultural Economics, Mumbai",
  "Indian Journal of Agricultural Engineering, New Delhi",
  "Indian Journal of Agricultural Sciences, New Delhi",
  "Indian Journal of Biotechnology, New Delhi",
  "Indian Journal of Entomology, New Delhi",
  "Indian Journal of Experimental Biology, New Delhi",
  "Indian Journal of Extension Education, New Delhi",
  "Indian Journal of Genetics & Plant Breeding, New Delhi",
  "Indian Journal of Horticulture, New Delhi",
  "Indian Journal of Microbiology, Hissar",
  "Indian Journal of Mycology & Plant Pathology, Udaipur",
  "Indian Journal of Nematology, New Delhi",
  "Indian Journal of Plant Pathology, Lucknow",
  "Indian Journal of Plant Physiology, New Delhi",
  "Indian Journal of Virology, Hissar",
  "Indian Journal of Weed Science, Varanasi",
  "Indian Phytopathology, New Delhi",
  "Indian Science Abstracts, New Delhi",
  "Industrial Economist, Chennai",
  "International Journal of Tropical Plant Disease, New Delhi",
  "Journal of Applied Horticulture",
  "Journal of Biological Control, Bangalore",
  "Journal of Entomological Research, New Delhi",
  "Journal of Biosciences, Bangalore",
  "Journal of Food Science & Technology, Mysore",
  "Journal of Indian Society of Agricultural Statistics, New Delhi",
  "Journal of Indian Society of Soil Science, New Delhi",
  "Journal of Indian Society of Water Management, New Delhi",
  "Journal of Microbiological Technology, Kanpur",
  "Journal of Scientific & Industrial Research, New Delhi",
  "Khethi, New Delhi",
  "Krishi Chayanika, New Delhi",
  "Mycorrhiza News, Hyderabad",
  "Mysore Journal of Agricultural Science, Mysore",
  "Narendra Deva Journal of Agricultural Research, Faizabad",
  "Natural Product Radiance, New Delhi",
  "Nucleus, Pune",
  "Orissa Journal of Horticultural Sciences, Orissa",
  "Phal Phool, New Delhi",
  "Pesticides, Bombay",
  "Pest Management in Horticultural Ecosystems",
  "Progressive Horticulture",
  "Processed Food Industry, New Delhi",
  "Punjab Horticultural Journal, Chandigarh",
  "Vatika (From The Seed & Plant People), Bangalore",
  "Vegetable Science, New Delhi",
  "Prati Bhumi",
  "Krishi Today",
  "Krishi Vistar Samiksha",
  "Intensive Extension Review",
  "Agriculture Extension Review",
  "Pestology",
  "Karnataka Journal of Horticulture",
  "Nematology",
];

const referenceBooks = [
  { sr: "Ref-1", title: "Encyclopaedia", copies: 10 },
  { sr: "Ref-2", title: "Dictionary", copies: 26 },
  { sr: "Ref-3", title: "Thesis (M.Sc.)", copies: 51 },
  { sr: "Ref-4", title: "CD of Books", copies: 10 },

  // Software
  { sr: "Soft-1", title: "Library Automation Software (Libsys) 4.0", copies: 1 },
];



// ==========================
// LIBRARY PAGE COMPONENT
// ==========================

const Library = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Header />
      <ResponsiveNavbar />

      {/* Banner */}

      {/* Section Header */}

      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Library", href: "/Library" },
        ]}
        iconProps={true}
        title="Library"
        description={[""]}
      />
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-8">
          <h2 className="text-gray-700">
            The CISH Library is an integral part of the Institute. It is well-furnished and equipped
            with computers and internet facilities. The library has a rich collection of
            publications on subtropical fruit crops and other crops related to the Institute’s
            mandate. A large number of national and international journals fulfill the research
            needs of Scientists, Research Associates, Senior Research Fellows, Junior Research
            Fellows, and students. The library houses 3,112 scientific and technical books and 7,458
            back volumes of periodicals. It subscribes to 111 national and international journals,
            of which 49 are foreign journals and 62 are Indian. In addition, there are 42 M.Sc. and
            Ph.D. theses related to the subjects under the Institute’s mandate. The library also
            provides reprography services, internet browsing facilities, and access to literature
            searches through CD-ROM databases such as AGRIS-CD ROM and HORT-CD ROM. The HORT-CD ROM
            is updated quarterly.
          </h2>
        </div>
      </section>

      <section className="bg-[#FBFBF8] py-12">
        <div className="container mx-auto px-4">
          <div className="w-full mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-300 h-64 rounded"></div>
              <div className="bg-gray-300 h-64 rounded"></div>
              <div className="bg-gray-300 h-64 rounded"></div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === 0 ? "bg-[#3A6B35]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Library Resources Table */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">LIBRARY RESOURCES</h2>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse">
              <thead className="bg-[#599A5E]">
                <tr>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Sr. No.
                  </th>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Title
                  </th>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Number of Copies
                  </th>
                </tr>
              </thead>
              <tbody>
                {libraryResources.map((item, index) => (
                  <tr key={item.sr} className={index % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    <td className="p-3 border-t border-gray-300 text-gray-700">{item.sr}</td>
                    <td className="p-3 border-t border-gray-300 text-gray-700">{item.title}</td>
                    <td className="p-3 border-t border-gray-300 text-gray-700">{item.copies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold"> Reference books</h2>
          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse">
              <thead className="bg-[#599A5E]">
                <tr>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Sr. No.
                  </th>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Title
                  </th>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Number of Copies
                  </th>
                </tr>
              </thead>
              <tbody>
                {referenceBooks.map((item, index) => (
                  <tr key={item.sr} className={index % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    <td className="p-3 border-t border-gray-300 text-gray-700">{item.sr}</td>
                    <td className="p-3 border-t border-gray-300 text-gray-700">{item.title}</td>
                    <td className="p-3 border-t border-gray-300 text-gray-700">{item.copies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">LIST OF JOURNALS SUBSCRIBED IN CISH</h2>

          {/* Open Modal Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md w-max"
          >
            View Journals List
          </button>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white max-h-[80vh] w-[90%] md:w-[60%] lg:w-[45%] rounded-lg p-6 overflow-y-auto shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-green-800">Journals Subscribed</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-600 hover:text-black text-xl font-bold"
                  >
                    ✕
                  </button>
                </div>

                <ul className="list-disc pl-6 flex flex-col gap-2 text-gray-700 leading-relaxed">
                  {journalsList.map((journal, index) => (
                    <li key={index}>{journal}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Library;
