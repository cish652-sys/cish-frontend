"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// ==========================
// DATA ARRAYS
// ==========================

const carouselItems = [1, 2, 3, 4];

// Categories with books
const libraryCategories = [
  {
    name: "Horticulture",
    books: ["Fruit Science", "Vegetable Production", "Ornamental Horticulture"],
  },
  {
    name: "Agriculture Technology",
    books: ["Agri-Business Models", "Smart Farming Techniques", "Precision Agriculture"],
  },
  {
    name: "Biotechnology",
    books: ["Plant Tissue Culture", "Bio-enhancers", "Genetic Engineering"],
  },
];

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

  { sr: "Ref-1", title: "Encyclopaedia", copies: 10 },
  { sr: "Ref-2", title: "Dictionary", copies: 26 },
  { sr: "Ref-3", title: "Thesis (M.Sc.)", copies: 51 },
  { sr: "Ref-4", title: "CD of Books", copies: 10 },

  // Software
  { sr: "Soft-1", title: "Library Automation Software (Libsys) 4.0", copies: 1 },
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

// Optional downloadable books (if needed)
const downloadableBooks = [
  { name: "Fruit Science Handbook", link: "/downloads/fruit_science.pdf" },
  { name: "Smart Farming Techniques", link: "/downloads/smart_farming.pdf" },
];

// ==========================
// LIBRARY PAGE COMPONENT
// ==========================

const Library = () => {
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
            The CISH library is an integral part of the Institute, is well furnished and equipped
            with computers and internet facility. It has rich collection of publication on
            subtropical fruit crops and on other Institute`s mandate crops. A large number of
            National and International journal full fill the need of Scientist, Research Associates,
            Senior Research Fellows, Junior Research Fellows and students. The library has 3112
            scientific and technical books and 7,458 back volumes of periodicals. It subscribes 111
            National and International journals. Out of which 49 are foreign journals and 62 Indian.
            Besides this, there are 42 Masters and Ph. D. thesis on the subject related to
            Institute`s mandate. The library is also providing reprography services and internet
            surfing, exploring literature search through CD ROMs like Agris-CD ROM and Hort. CD ROM
            we are quarterly updating Hort. CD ROM .
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
              <thead className="bg-lime-200">
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

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">LIST OF JOURNALS SUBSCRIBED</h2>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-gray-700 leading-relaxed">
            {journalsList.map((journal, index) => (
              <li key={index}>{journal}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
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
            <a href="mailto:cish.library@gmail.com" className="text-blue-600 hover:underline">
              cish.library@gmail.com
            </a>
          </h2>
          <h2 className="text-gray-700">
            Website:{" "}
            <a
              href="https://cish.org.in/Library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://cish.org.in/library
            </a>
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Library;
