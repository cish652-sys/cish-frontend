"use client";

import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
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
  { key: "title", label: "Title", align: "left", width: "50%" },
  { key: "publishedDate", label: "Published Date", width: "25%", align: "center" },
  { key: "fileSize", label: "Type/Size", width: "25%", align: "center" },
];

const allAnnouncementsData: TableRow[] = [
  { title: "Foundation Day", publishedDate: "04-09-2025", fileSize: "1.99 MB", viewUrl: "/announcements/foundation-day.pdf" },
  { title: "New Tender Posted", publishedDate: "02-09-2025", fileSize: "0.50 MB", viewUrl: "/announcements/tender-01.pdf" },
  // ... (rest of your dummy data)
  { title: "Training Workshop", publishedDate: "18-08-2025", fileSize: "0.80 MB", viewUrl: "/announcements/workshop.pdf" },
  { title: "Procurement Notice", publishedDate: "15-08-2025", fileSize: "0.60 MB", viewUrl: "/announcements/procurement.pdf" },
];

const parseDate = (dateString: string) => {
  if (!dateString) return new Date(0);
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); 
};

const formatApiDate = (dateString: string | null) => {
  if (!dateString) return "01-01-1970"; 
  const [year, month, day] = dateString.split('-');
  return `${day}-${month}-${year}`;
};

interface ApiAnnouncementItem {
  id: number;
  contentKey: string;
  title: string;
  description: string | null; 
  imageUrl: string | null;
  date: string | null; 
  postDate: string | null;
  lastDate: string | null;
  createdAt: string | null;
  ispublished: boolean;
  isactive: boolean;
  backtocreator: boolean;
}

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
        placeholder="Search Announcements..."
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


const AnnouncementPage = () => {
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
        const { data } = await axios.get<ApiAnnouncementItem[]>('https://api.cish.org.in/api/content/keyOfferingsAnnouncement');
        
        if (data && data.length > 0) {
          const transformedData = data.map((item: ApiAnnouncementItem) => ({
            title: item.title,
            publishedDate: formatApiDate(item.date), // Use the 'date' field
            viewUrl: item.imageUrl, // Use 'description' for the URL
            fileSize: "N/A", // API does not provide file size
          }));
          setApiData(transformedData);
        } else {
          // API gave an empty response, trigger fallback
          setIsError(true);
        }
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
        setIsError(true); // Trigger fallback on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetData();
  }, []); // Empty array means this runs only once on mount

  // 6. Fallback logic
  const dataToProcess = (!isLoading && !isError && apiData.length > 0)
    ? apiData
    : allAnnouncementsData;

  // 7. useMemo logic (now depends on `dataToProcess`)
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
  }, [searchTerm, sortBy, dataToProcess]); // Dependency array updated

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  const totalPages = Math.ceil(processedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = processedData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: 'smooth' }); 
  };

  const handleView = (row: TableRow) => {
    if (row.viewUrl) {
      let url = row.viewUrl as string;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
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
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "ANNOUNCEMENTS" },
        ]}
        iconProps={true}
        title="ANNOUNCEMENTS"
        description={[""]}
      />
      
      <div className="bg-[#FBFBF8] ">
        <div className="flex  container items-center pt-2 gap-3 mb-6">
            <Typography variant="sectionHeading">ANNOUNCEMENTS</Typography>
        </div>

        <GalleryFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <section className="bg-[#FBFBF8] py-12">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading announcements...</p>
          ) : (
            <>
              <DataTable
                columns={columns}
                data={paginatedData}
                onView={handleView}
                rowGap={2}
              />

              {totalPages > 0 ? (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  className="mt-8"
                />
              ) : (
                <p className="text-center text-gray-500 mt-8">
                  No announcements found matching your criteria.
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

export default AnnouncementPage;