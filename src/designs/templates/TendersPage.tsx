"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainHeader } from "./MainHeader";
import { SectionHeader } from "../organisms/SectionHeader";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import { Pagination } from "../molecules/Pagination";
import { Search, ChevronDown, X, FileText, Eye } from "lucide-react";

type Tender = {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  dueDate: string;
  fileSize: string;
  imageUrl?: string; // Add imageUrl field
};

type ApiTender = {
  id: number;
  title: string;
  description: string | null;
  date: string;
  postDate: string | null;
  lastDate: string | null;
  imageUrl?: string; // Add imageUrl field from API
};

const fallbackTenderData: Tender[] = [
  {
    id: 1,
    title: "TENDER NOTICE FOR PORTABLE HANDHELD ETHYLENE ANALYSER",
    description:
      "Online Bids are invited by MyGov under Ministry of Electronics & Information Technology...",
    publishDate: "01-08-2025 17:00:00",
    dueDate: "21-08-2025 17:30:00",
    fileSize: "228.97 KB",
  },
  {
    id: 2,
    title: "TENDER NOTICE FOR NIR SPECTROSCOPE HAND HELD",
    description:
      "hand held gps, Hand Held Brench Light, Hand Held Generator, Digital Multimeter...",
    publishDate: "08-09-2025 17:00:00",
    dueDate: "08-09-2025 17:30:00",
    fileSize: "228.97 KB",
  },
  {
    id: 3,
    title: "TENDER NOTICE FOR VACCUME DECANICATOR",
    description:
      "Vacuum Pump, Vacuum Interrupter, Vacuum Contactor, Vacuum Oven, industrial vacuum cleaner...",
    publishDate: "01-09-2025 16:00:00",
    dueDate: "01-09-2025 16:30:00",
    fileSize: "228.97 KB",
  },
  {
    id: 4,
    title: "TENDER NOTICE FOR MODIFIED ATMOSPHERIC PACKAGING MACHINE",
    description: "Vacuum Packaging Machine, Box Strapping Machine",
    publishDate: "01-09-2025 15:00:00",
    dueDate: "01-09-2025 15:30:00",
    fileSize: "228.97 KB",
  },
  {
    id: 5,
    title: "GEM BID FOR PURCHASE OF TRACTOR",
    description:
      "Electric Tractor, Tractors (V2), Tractor Operated Reaper, Universal tractor oil, Tractor Operated Disc Plough...",
    publishDate: "02-09-2025 11:00:00",
    dueDate: "02-09-2025 11:30:00",
    fileSize: "228.97 KB",
  },
  {
    id: 6,
    title: "GEM BID FOR PURCHASE OF TRACTOR",
    description:
      "Electric Tractor, Tractors (V2), Tractor Operated Reaper, Universal tractor oil, Tractor Operated Disc Plough...",
    publishDate: "02-09-2025 11:00:00",
    dueDate: "02-09-2025 11:30:00",
    fileSize: "228.97 KB",
  },
  {
    id: 7,
    title: "GEM BID FOR PURCHASE OF TRACTOR",
    description:
      "Electric Tractor, Tractors (V2), Tractor Operated Reaper, Universal tractor oil, Tractor Operated Disc Plough...",
    publishDate: "02-09-2025 11:00:00",
    dueDate: "02-09-2025 11:30:00",
    fileSize: "228.97 KB",
  },
  {
    id: 8,
    title: "GEM BID FOR PURCHASE OF TRACTOR",
    description:
      "Electric Tractor, Tractors (V2), Tractor Operated Reaper, Universal tractor oil, Tractor Operated Disc Plough...",
    publishDate: "02-09-2025 11:00:00",
    dueDate: "02-09-2025 11:30:00",
    fileSize: "228.97 KB",
  },
];

const TENDERS_PER_PAGE = 10;

const TenderFilterBar: React.FC = () => (
  <div className="mx-auto container max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-center gap-4 p-4 border-b border-gray-200">
      <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#5b9a5d]"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      <div className="relative">
        <select className="appearance-none bg-white border border-gray-300  pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#5b9a5d]">
          <option>Short By</option>
          <option>Date</option>
          <option>Title</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative">
        <select className="appearance-none bg-white border border-gray-300  pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#5b9a5d]">
          <option>{TENDERS_PER_PAGE} Per Page</option>
          <option>20 Per Page</option>
          <option>30 Per Page</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="flex-grow" />
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500">
          <X className="w-4 h-4" /> CLEAR FILTER
        </button>
        <button className="px-6 py-2 bg-[#5b9a5d] text-white font-semibold  hover:bg-[#4a7c4c] transition-colors">
          ARCHIVED
        </button>
      </div>
    </div>
  </div>
);

type TenderTableProps = {
  tenders: Tender[];
};

const TenderTable: React.FC<TenderTableProps> = ({ tenders }) => {
  return (
    <div className="mx-auto container max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-[#5b9a5d] text-white font-bold text-sm uppercase ">
        <div className="col-span-12 md:col-span-2">Title</div>
        <div className="col-span-12 md:col-span-3">Short Discription</div>
        <div className="col-span-12 md:col-span-2">Publish Date & Time</div>
        <div className="col-span-12 md:col-span-2">Due Date & Time</div>
        <div className="col-span-12 md:col-span-2">Type/Size</div>
        <div className="col-span-12 md:col-span-1"></div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {tenders.map((tender) => (
          <TenderRow key={tender.id} tender={tender} />
        ))}
      </div>
    </div>
  );
};

type TenderRowProps = {
  tender: Tender;
};

const TenderRow: React.FC<TenderRowProps> = ({ tender }) => {
  const handleViewClick = () => {
    if (tender.imageUrl) {
      // Open the image URL in a new tab
      window.open(tender.imageUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Optionally show an alert or message if no URL is available
      alert('No document available for this tender');
    }
  };

  return (
    <div className="grid container grid-cols-12 gap-x-4 gap-y-3 p-4 bg-white border border-gray-200  shadow-sm">
      <div className="col-span-12 md:col-span-2">
        <div className="text-xs text-gray-500 font-bold uppercase md:hidden">Title</div>
        <div className="font-bold text-gray-800">{tender.title}</div>
      </div>
      <div className="col-span-12 md:col-span-3">
        <div className="text-xs text-gray-500 font-bold uppercase md:hidden">Description</div>
        <div className="text-gray-600">{tender.description}</div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-2">
        <div className="text-xs text-gray-500 font-bold uppercase md:hidden">Publish Date</div>
        <div className="text-gray-800">{tender.publishDate}</div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-2">
        <div className="text-xs text-gray-500 font-bold uppercase md:hidden">Due Date</div>
        <div className="text-gray-800">{tender.dueDate}</div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-2 flex items-center gap-2 text-green-800">
        <FileText className="w-5 h-5 flex-shrink-0" />
        <div>
          <div className="text-xs text-gray-500 font-bold uppercase md:hidden">File/Size</div>
          <div className="font-medium">{tender.fileSize}</div>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-6 md:col-span-1 flex items-center md:justify-end">
        <button 
          onClick={handleViewClick}
          className="w-full md:w-auto px-4 py-2 bg-[#86C48A] text-blue-900 font-semibold hover:bg-green-400 transition-colors text-xs flex items-center justify-center gap-1.5 "
        >
          <Eye className="w-4 h-4" />
          VIEW
        </button>
      </div>
    </div>
  );
};

const TendersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [tenders, setTenders] = useState<Tender[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTenderData = async () => {
      try {
        const response = await axios.get("https://api.cish.org.in/api/content/tenders");
        const apiData: ApiTender[] = response.data;

        if (apiData && apiData.length > 0) {
          const mappedTenders = apiData.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description || "No description available",
            publishDate: `${item.date} 17:00:00`,
            dueDate: `${item.lastDate || item.date} 17:30:00`,
            fileSize: "N/A",
            imageUrl: item.imageUrl, // Map the imageUrl from API
          }));
          setTenders(mappedTenders);
        } else {
          console.warn("API returned no data. Using fallback tenders.");
          setTenders(fallbackTenderData);
        }
      } catch (err) {
        console.error("API call failed. Using fallback tenders.", err);
        setTenders(fallbackTenderData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTenderData();
  }, []);

  const totalPages = Math.ceil(tenders.length / TENDERS_PER_PAGE);
  const currentTenders = tenders.slice(
    (currentPage - 1) * TENDERS_PER_PAGE,
    currentPage * TENDERS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <MainHeader />
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "TENDERS" }]}
        iconProps={true}
        title="TENDERS"
        description={[""]}
      />
      <main className="py-8 container sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className=" overflow-hidden">
            <TenderFilterBar />
            {isLoading ? (
              <div className="text-center p-10 font-semibold">Loading Tenders...</div>
            ) : (
              <TenderTable tenders={currentTenders} />
            )}
          </div>
          {!isLoading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TendersPage;