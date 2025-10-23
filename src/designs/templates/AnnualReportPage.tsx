"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Header } from "../organisms/Header";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Logo } from "../atoms/Logo";
import { SectionHeader } from "../organisms/SectionHeader";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import { DataTable, Column, TableRow } from "../molecules/DataTable";
import { Pagination } from "../molecules/Pagination";
import { ChevronDown,   Search } from "lucide-react"; // Imports from your code
import Typography from "../atoms/Typography";

const columns: Column[] = [
  { key: "sno", label: "S. No", width: "10%", align: "center" },
  { key: "title", label: "Year", align: "left", width: "40%" },
  { key: "fileSize", label: "File Size", width: "25%", align: "center" },
];

const baseReportsData: TableRow[] = [
  { title: "Annual Report 2024", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2024.pdf" },
  { title: "Annual Report 2023", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2023.pdf" },
  { title: "Annual Report 2022", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2022.pdf" },
  { title: "Annual Report 2021", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2021.pdf" },
  { title: "Annual Report 2020", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2020.pdf" },
  { title: "Annual Report 2019-20", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2019-20.pdf" },
  { title: "Annual Report 2018-19", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2018-19.pdf" },
  { title: "Annual Report 2017-18", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2017-18.pdf" },
  { title: "Annual Report 2016-17", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2016-17.pdf" },
  { title: "Annual Report 2015-16", fileSize: "228.97 KB", viewUrl: "/reports/annual-report-2015-16.pdf" },
];

const allReportsData: TableRow[] = [
  ...baseReportsData,
  ...baseReportsData.map(d => ({...d, title: `${d.title} (Demo Page 2)`})),
  ...baseReportsData.map(d => ({...d, title: `${d.title} (Demo Page 3)`})),
].map((item, index) => ({
  ...item,
  sno: (index + 1).toString().padStart(2, '0'),
}));

// --- GalleryFilterBar Component (As provided) ---
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

// --- AnnualReportPage Component (Updated) ---
const AnnualReportPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // 2. Add state for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date-desc"); // Default sort
  
  const ITEMS_PER_PAGE = 10;

  // 3. Process data based on filters and sorting
  const processedData = useMemo(() => {
    // Filter by search term
    const filteredData = allReportsData.filter((item) =>
      (item.title as string).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered data
    const sortedData = [...filteredData].sort((a, b) => {
      const titleA = a.title as string;
      const titleB = b.title as string;
      
      // Extract year from title (e.g., "Annual Report 2024" -> 2024)
      const yearA = parseInt(titleA.match(/\d{4}/)?.[0] || '0');
      const yearB = parseInt(titleB.match(/\d{4}/)?.[0] || '0');

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
  }, [searchTerm, sortBy]); // Re-calculate when filters change

  // 4. Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  // 5. Calculate pagination based on PROCESSED data
  const totalPages = Math.ceil(processedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = processedData.slice(startIndex, endIndex);

  // --- Handlers (Unchanged) ---
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: 'smooth' }); 
  };

  const handleView = (row: TableRow) => {
    if (row.viewUrl) {
      window.open(row.viewUrl as string, "_blank");
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
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "ANNUAL REPORTS" },
        ]}
        iconProps={true}
        title="ANNUAL REPORTS"
        description={[""]}
      />
      <div className="bg-[#FBFBF8] ">
 <div className="flex  container items-center pt-2 gap-3 mb-6">
            <Typography variant="sectionHeading">ANNUAL REPORTS</Typography>
          </div>

      {/* 6. Add the Filter Bar */}
      <GalleryFilterBar
        activeTab="images" // This prop isn't used by the bar, but we pass it
        setActiveTab={() => {}} // Dummy function
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <section className="bg-[#FBFBF8] py-12">
        <DataTable
          columns={columns}
          data={paginatedData} // 7. Pass the processed (filtered/sorted/paginated) data
          onView={handleView}
          rowGap={2}
        />

        {/* 8. Pagination and "No Results" message */}
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
     

      <Footer />
    </main>
  );
};

export default AnnualReportPage;