"use client";

import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { Header } from "../organisms/Header";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Logo } from "../atoms/Logo";
import { SectionHeader } from "../organisms/SectionHeader";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import { DataList, TableRow } from "../molecules/DataGrid";
import { Pagination } from "../molecules/Pagination";
import { ChevronDown, Search } from "lucide-react";
import Typography from "../atoms/Typography";

const allUsefulLinksData: TableRow[] = [
  { title: "eHRMS 2.0", publishedDate: "01-10-2025", viewUrl: "https://e-hrms.gov.in/login" },
  {
    title: "DARE/ICAR E-Office",
    publishedDate: "30-09-2025",
    viewUrl: "https://eoffice.icar.gov.in/SSOComponent/auth.php",
  },
  {
    title: "DARE/ICAR Sparrow",
    publishedDate: "30-09-2025",
    viewUrl: "https://sparrow.icar.gov.in/",
  },
  { title: "NIC Mail", publishedDate: "30-09-2025", viewUrl: "https://mail.gov.in" },
  { title: "ICAR", publishedDate: "28-09-2025", viewUrl: "https://icar.org.in/en" },
  { title: "e-Samiksha", publishedDate: "27-09-2025", viewUrl: "https://samiksha.gov.in/" },
  { title: "CPGRAMS", publishedDate: "26-09-2025", viewUrl: "https://pgportal.gov.in/" },
];

const parseDate = (dateString: string) => {
  if (!dateString) return new Date(0);
  const separator = dateString.includes(".") ? "." : "-";
  const [day, month, year] = dateString.split(separator).map(Number);
  return new Date(year, month - 1, day);
};

const formatDate = (dateString: string | null) => {
  if (!dateString) return "01-01-1970";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

interface ApiLinkItem {
  id: number;
  contentKey: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  date: string | null;
  postDate: string | null;
  lastDate: string | null;
  link: string | null;
  createdAt: string | null;
  ispublished: boolean;
  isactive: boolean;
  backtocreator: boolean;
}

// 1. FIX: Restored the full type definition for the props
const GalleryFilterBar: React.FC<{
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}> = ({ searchTerm, setSearchTerm, sortBy, setSortBy }) => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="relative w-full md:w-auto md:flex-grow max-w-sm">
      <input
        type="text"
        placeholder="Search..."
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

const UsefulLinksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  const [apiData, setApiData] = useState<TableRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { data } = await axios.get<ApiLinkItem[]>(
          "https://api.cish.org.in/api/content/usefulLinks"
        );

        if (data && data.length > 0) {
          const transformedData = data.map((item: ApiLinkItem) => ({
            title: item.title,
            publishedDate: formatDate(item.postDate),
            viewUrl: item.link, // Use item.link for the URL
          }));
          setApiData(transformedData);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Failed to fetch useful links:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetData();
  }, []);

  const dataToProcess = !isLoading && !isError && apiData.length > 0 ? apiData : allUsefulLinksData;

  const processedData = useMemo(() => {
    const filteredData = dataToProcess.filter((item) =>
      (item.title as string).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
      const titleA = a.title as string;
      const titleB = b.title as string;
      const dateA = parseDate(a.publishedDate as string);
      const dateB = parseDate(b.publishedDate as string);

      switch (sortBy) {
        case "date-asc":
          return dateA.getTime() - dateB.getTime();
        case "title-asc":
          return titleA.localeCompare(titleB);
        case "title-desc":
          return titleB.localeCompare(titleA);
        case "date-desc":
        default:
          return dateB.getTime() - dateA.getTime();
      }
    });

    return sortedData;
  }, [searchTerm, sortBy, dataToProcess]);

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

  const handleView = (row: TableRow) => {
    if (row.viewUrl && typeof row.viewUrl === "string") {
      let url = row.viewUrl as string;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }
      window.open(url, "_blank", "noopener,noreferrer");
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
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "USEFUL LINKS" }]}
        iconProps={true}
        title="USEFUL LINKS"
        description={[""]}
      />

      <div className="bg-[#FBFBF8] ">
        <div className="flex  container items-center pt-2 gap-3 mb-6">
          <Typography variant="sectionHeading">USEFUL LINKS</Typography>
        </div>

        <GalleryFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <section className="bg-[#FBFBF8] py-12">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading links...</p>
          ) : (
            <>
              <DataList data={paginatedData} onView={handleView} />

              {totalPages > 0 ? (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  className="mt-8"
                />
              ) : (
                <p className="text-center text-gray-500 mt-8">
                  No links found matching your criteria.
                </p>
              )}
            </>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default UsefulLinksPage;
