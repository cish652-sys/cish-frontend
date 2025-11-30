"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Header } from "../organisms/Header";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Logo } from "../atoms/Logo";
import { SectionHeader } from "../organisms/SectionHeader";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import { DataTable, Column, TableRow } from "../molecules/DataTable";
import { Pagination } from "../molecules/Pagination";
import { ChevronDown, Search } from "lucide-react";
import Typography from "../atoms/Typography";

const columns: Column[] = [
  { key: "sno", label: "S. No", width: "10%", align: "center" },
  { key: "title", label: "Year", align: "left", width: "40%" },
  { key: "fileSize", label: "File Size", width: "25%", align: "center" },
];

// ✅ Dynamic generation of reports from 2024 down to 2008-09
const generateReportsData = (): TableRow[] => {
  const reports: TableRow[] = [];

  // Single year reports (2025 to 2020)
  for (let year = 2025; year >= 2020; year--) {
    reports.push({
      title: `Annual Report ${year}`,
      fileSize: "228.97 KB",
      viewUrl: `/reports/annual-report-${year}.pdf`,
    });
  }

  // Year range reports (2019-20 to 2008-09)
  for (let year = 2019; year >= 2008; year--) {
    const nextYear = year + 1;
    const yearRange = `${year}-${nextYear.toString().slice(-2)}`;
    reports.push({
      title: `Annual Report ${yearRange}`,
      fileSize: "228.97 KB",
      viewUrl: `/reports/annual-report-${yearRange}.pdf`,
    });
  }

  return reports;
};

// ✅ Generate all reports dynamically with S.No
const allReportsData: TableRow[] = generateReportsData().map((item, index) => ({
  ...item,
  sno: (index + 1).toString().padStart(2, "0"),
}));

// ✅ Coming Soon Modal Component
const ComingSoonModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-8 m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="text-center">
          <div className="mb-4">
            <svg
              className="mx-auto h-16 w-16 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <Typography variant="sectionHeading" className="mb-2">
            Coming Soon
          </Typography>
          <Typography variant="bodyLarge" className="text-gray-600">
            This report will be available soon. Please check back later.
          </Typography>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// --- GalleryFilterBar Component ---
const GalleryFilterBar: React.FC<{
  activeTab: "images" | "videos";
  setActiveTab: (tab: "images" | "videos") => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}> = ({ searchTerm, setSearchTerm, sortBy, setSortBy }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="relative w-full md:w-auto md:flex-grow max-w-sm">
      <input
        type="text"
        placeholder="Search Reports..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#5b9a5d]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>

    <div className="relative w-full md:w-auto">
      <select
        className="appearance-none bg-white border border-gray-300  pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#5b9a5d] w-full"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="date-desc">Sort By Date (Newest)</option>
        <option value="date-asc">Sort By Date (Oldest)</option>
        <option value="title-asc">Sort By Title (A-Z)</option>
        <option value="title-desc">Sort By Title (Z-A)</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

// --- AnnualReportPage Component ---
const AnnualReportPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");
  const [showComingSoon, setShowComingSoon] = useState(false); // ✅ Modal state

  const ITEMS_PER_PAGE = 10;

  const processedData = useMemo(() => {
    const filteredData = allReportsData.filter((item) =>
      (item.title as string).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
      const titleA = a.title as string;
      const titleB = b.title as string;

      const yearMatchA = titleA.match(/(\d{4})(?:-\d{2})?/);
      const yearMatchB = titleB.match(/(\d{4})(?:-\d{2})?/);
      const yearA = parseInt(yearMatchA?.[1] || "0");
      const yearB = parseInt(yearMatchB?.[1] || "0");

      switch (sortBy) {
        case "date-asc":
          return yearA - yearB;
        case "title-asc":
          return titleA.localeCompare(titleB);
        case "title-desc":
          return titleB.localeCompare(titleA);
        case "date-desc":
        default:
          return yearB - yearA;
      }
    });

    return sortedData;
  }, [searchTerm, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  const totalPages = Math.ceil(processedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = processedData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  // ✅ Show "Coming Soon" modal OR open specific link
  const handleView = (row: TableRow) => {
    // Check if it's the first row (S.No "01")
    if (row.sno === "01") {
      // Open the specific hyperlink in a new tab
      window.open("https://cish.in/Annual.php", "_blank", "noopener,noreferrer");
    } else {
      // For all other rows, show the "Coming Soon" modal
      setShowComingSoon(true);
    }
  };

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "ANNUAL REPORTS" }]}
        iconProps={true}
        title="ANNUAL REPORTS"
        description={[""]}
      />
      <div className="bg-[#FBFBF8] ">
        <div className="flex  container items-center pt-2 gap-3 mb-6">
          <Typography variant="sectionHeading">ANNUAL REPORTS</Typography>
        </div>

        <GalleryFilterBar
          activeTab="images"
          setActiveTab={() => {}}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <section className="bg-[#FBFBF8] py-12">
          <DataTable columns={columns} data={paginatedData} onView={handleView} rowGap={2} />

          {totalPages > 0 ? (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          ) : (
            <p className="text-center text-gray-500 mt-8">
              No reports found matching your criteria.
            </p>
          )}
        </section>
      </div>

      {/* ✅ Coming Soon Modal */}
      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />

      <Footer />
    </main>
  );
};

export default AnnualReportPage;
