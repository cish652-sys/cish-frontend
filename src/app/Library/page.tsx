"use client";

import React, { useState } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
// I'm adding Typography here to match the title styling from your other pages
import Typography from "@/designs/atoms/Typography";

// ==========================
// DATA ARRAYS (Unchanged)
// ==========================

const carouselItems = [1, 2, 3, 4];

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
  // ... all other journals
  "Nematology",
];

const referenceBooks = [
  { sr: "Ref-1", title: "Encyclopaedia", copies: 10 },
  { sr: "Ref-2", title: "Dictionary", copies: 26 },
  { sr: "Ref-3", title: "Thesis (M.Sc.)", copies: 51 },
  { sr: "Ref-4", title: "CD of Books", copies: 10 },
  { sr: "Soft-1", title: "Library Automation Software (Libsys) 4.0", copies: 1 },
];

// ==========================
// HELPER COMPONENT (Copied from previous example)
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
// LIBRARY PAGE COMPONENT
// ==========================

const Library = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Header />
      <ResponsiveNavbar />

      {/* Banner */}
      {/* <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive /> */}

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

      {/* --- Intro Text Section (Unchanged) --- */}
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

      {/* --- Carousel Section (Unchanged) --- */}
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

      {/* ===================================================== */}
      {/* 1. Library Resources Table (MODIFIED)                 */}
      {/* ===================================================== */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          {/* Using Typography for consistent title */}
          <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
            LIBRARY RESOURCES
          </Typography>
          <div className="overflow-x-auto">
            {/* Header */}
            <table className="w-full border-collapse mb-3">
              <thead>
                <tr className="bg-[#599A5E]">
                  <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "15%" }}>
                    S. No.
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "60%" }}>
                    Title
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>
                    Number of Copies
                  </th>
                </tr>
              </thead>
            </table>
            {/* Body */}
            <div className="w-full">
              {libraryResources.length === 0 ? <NoDataRow colSpan={3} /> : (
                libraryResources.map((item) => (
                  <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                    <tbody>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-center text-gray-700" style={{ width: "15%" }}>{item.sr}</td>
                        <td className="px-6 py-4 text-left text-gray-700" style={{ width: "60%" }}>{item.title}</td>
                        <td className="px-6 py-4 text-center text-gray-700" style={{ width: "25%" }}>{item.copies}</td>
                      </tr>
                    </tbody>
                  </table>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 2. Reference Books Table (MODIFIED)                   */}
      {/* ===================================================== */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <Typography variant="sectionHeading" className="text-green-800 font-bold mb-4">
            REFERENCE BOOKS
          </Typography>
          <div className="overflow-x-auto">
            {/* Header */}
            <table className="w-full border-collapse mb-3">
              <thead>
                <tr className="bg-[#599A5E]">
                  <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "15%" }}>
                    S. No.
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "60%" }}>
                    Title
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider" style={{ width: "25%" }}>
                    Number of Copies
                  </th>
                </tr>
              </thead>
            </table>
            {/* Body */}
            <div className="w-full">
              {referenceBooks.length === 0 ? <NoDataRow colSpan={3} /> : (
                referenceBooks.map((item) => (
                  <table key={item.sr} className="w-full border-collapse bg-white shadow-sm mb-2 overflow-hidden">
                    <tbody>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-center text-gray-700" style={{ width: "15%" }}>{item.sr}</td>
                        <td className="px-6 py-4 text-left text-gray-700" style={{ width: "60%" }}>{item.title}</td>
                        <td className="px-6 py-4 text-center text-gray-700" style={{ width: "25%" }}>{item.copies}</td>
                      </tr>
                    </tbody>
                  </table>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Journals List Section (Unchanged) --- */}
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