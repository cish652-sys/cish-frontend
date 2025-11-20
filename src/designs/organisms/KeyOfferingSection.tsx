"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TabButton } from "../atoms/TabButton";
import { Tender as BaseTender } from "../atoms/TableRow"; // Assuming this is the interface from your file
import { TenderTable } from "../molecules/TenderTable";
import Icon from "../atoms/ImpactCard/Icon";
import { useRouter } from "next/navigation";

// Extended Tender type with resultLink
interface Tender extends BaseTender {
  resultLink?: string;
}

// --- FALLBACK DATA (Unchanged) ---
const jobsData: Tender[] = [
  {
    id: 1,
    title: "Walk In Interview Notice For The Post Of Young Application Professional II",
    form: "Application Form",
    postDate: "19-08-2025",
    lastDate: "28-08-2025",
    isNew: false,
    link: "https://cish.org.in/jobs/Notification1908205.pdf",
  },
  // ... other fallback data
];

const announcementsData: Tender[] = [
  {
    id: 1,
    title: "Foundation Day",
    lastDate: "04-09-2025",
    isNew: true,
    link: "",
  },
];

const dummyTenders: Tender[] = [
  {
    id: 1,
    title: "Tender Notice For Portable Handheld Ethylene Analyser",
    lastDate: "09-09-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/Ethylene_Analyser.pdf",
  },
  // ... other fallback data
];

// --- API TYPES (Unchanged) ---
type ApiAnnouncement = {
  id: number;
  title: string;
  date: string | null;
  link: string | null;
};
type ApiJob = {
  imageUrl: string | null;
  id: number;
  title: string;
  postDate: string | null;
  lastDate: string | null;
  resultDocuments: string | null;
};
type ApiTender = {
  imageUrl: string | null;
  id: number;
  title: string;
  date: string | null;
};

// --- BASE_URL & FETCH FUNCTIONS (Unchanged) ---
const BASE_URL = "https://api.cish.org.in/api/content";

const fetchAnnouncements = async (): Promise<ApiAnnouncement[]> => {
  const res = await fetch(`${BASE_URL}/keyOfferingsAnnouncement`);
  if (!res.ok) throw new Error("Failed to fetch announcements");
  return res.json();
};
const fetchJobs = async (): Promise<ApiJob[]> => {
  const res = await fetch(`${BASE_URL}/jobs`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  return res.json();
};
const fetchTenders = async (): Promise<ApiTender[]> => {
  const res = await fetch(`${BASE_URL}/tenders`);
  if (!res.ok) throw new Error("Failed to fetch tenders");
  return res.json();
};

// --- HELPER FUNCTIONS (Unchanged) ---
const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length === 3 && parts[0].length === 4) {
    const [year, month, day] = parts;
    return `${day}-${month}-${year}`;
  }
  return dateString;
};

const formatLink = (url: string | null): string => {
  if (!url) return "";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("/") ||
    url.startsWith("#")
  ) {
    return url;
  }
  if (url.includes(".")) {
    return `https://${url}`;
  }
  return url;
};

const isJobActive = (dateString: string | null): boolean => {
  if (!dateString) return false;
  try {
    const parts = dateString.split("-").map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return false;
    let year: number, month: number, day: number;
    if (parts[0] > 1000) {
      [year, month, day] = parts;
    } else if (parts[2] > 1000) {
      [day, month, year] = parts;
    } else {
      return false;
    }
    const lastDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    lastDate.setHours(0, 0, 0, 0);
    return lastDate >= today;
  } catch (error) {
    console.error("Error parsing date:", dateString, error);
    return false;
  }
};

// --- ViewMoreButton COMPONENT (Unchanged) ---
const ViewMoreButton: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const router = useRouter();
  const handleViewMore = () => {
    switch (activeTab) {
      case "Tenders":
        router.push("/Tenders");
        break;
      case "Jobs":
        router.push("/Jobs");
        break;
      case "Announcements":
        router.push("/Announcement");
        break;
      default:
        break;
    }
  };
  const getButtonText = () => {
    switch (activeTab) {
      case "Tenders":
        return "View Tenders";
      case "Jobs":
        return "View Jobs";
      case "Announcements":
        return "View Announcements";
      default:
        return "View More";
    }
  };
  return (
    <button
      onClick={handleViewMore}
      className="group inline-flex items-center px-4 py-2 bg-green-800 text-white text-sm font-medium hover:bg-green-900 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
    >
      {getButtonText()}
      <svg
        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

// --- KeyOfferingsSection COMPONENT (Main export) ---
export const KeyOfferingsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Announcements");

  // --- DATA FETCHING & NORMALIZATION WITH SORTING ---
  const {
    data: apiAnnouncements,
    isPending: isAnnouncementsPending,
    isError: isAnnouncementsError,
  } = useQuery({ queryKey: ["announcements"], queryFn: fetchAnnouncements });

  // ✅ SORT ANNOUNCEMENTS BY DATE (NEWEST FIRST)
  const normalizedAnnouncements: Tender[] = (apiAnnouncements || [])
    .sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime())
    .map((item) => ({
      id: item.id,
      title: item.title,
      lastDate: formatDate(item.date),
      isNew: isJobActive(item.date),
      link: formatLink(item.link),
    }));

  const announcementsToDisplay =
    isAnnouncementsError || normalizedAnnouncements.length === 0
      ? announcementsData.map((item) => ({ ...item, isNew: isJobActive(item.lastDate) }))
      : normalizedAnnouncements;

  const {
    data: apiJobs,
    isPending: isJobsPending,
    isError: isJobsError,
  } = useQuery({ queryKey: ["jobs"], queryFn: fetchJobs });

  // ✅ SORT JOBS BY POST DATE (NEWEST FIRST)
  const normalizedJobs: Tender[] = (apiJobs || [])
    .sort((a, b) => new Date(b.postDate || "").getTime() - new Date(a.postDate || "").getTime())
    .map((item) => ({
      id: item.id,
      title: item.title,
      postDate: formatDate(item.postDate),
      lastDate: formatDate(item.lastDate),
      isNew: isJobActive(item.lastDate),
      link: formatLink(item.imageUrl),
      form: item.imageUrl ? "Application Form" : "",
      result: item.resultDocuments ? "See Result" : "",
      resultLink: formatLink(item.resultDocuments),
    }));

  const jobsToDisplay =
    isJobsError || normalizedJobs.length === 0
      ? jobsData.map((item) => ({ ...item, isNew: isJobActive(item.lastDate) }))
      : normalizedJobs;

  const {
    data: apiTenders,
    isPending: isTendersPending,
    isError: isTendersError,
  } = useQuery({ queryKey: ["tenders"], queryFn: fetchTenders });

  // ✅ SORT TENDERS BY DATE (NEWEST FIRST)
  const normalizedTenders: Tender[] = (apiTenders || [])
    .sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime())
    .map((item) => ({
      id: item.id,
      title: item.title,
      lastDate: formatDate(item.date),
      isNew: isJobActive(item.date),
      link: formatLink(item.imageUrl),
    }));

  const tendersToDisplay =
    isTendersError || normalizedTenders.length === 0
      ? dummyTenders.map((item) => ({ ...item, isNew: isJobActive(item.lastDate) }))
      : normalizedTenders;

  // --- RENDER (JSX) ---
  return (
    <div className="flex flex-col w-full h-[300px]">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <Icon src="/icons/nfc-magnifying-glass 1.svg" alt="Trending" />
          <h2 className="text-[22px] font-bold text-green-800 mb-2 flex items-center">
            KEY OFFERINGS
          </h2>
        </div>
        <ViewMoreButton activeTab={activeTab} />
      </div>

      <div className="flex overflow-hidden border">
        {["Announcements", "Jobs", "Tenders"].map((tab) => (
          <div key={tab} className="flex flex-1 border-r border-gray-200 last:border-r-0">
            <TabButton label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
          </div>
        ))}
      </div>

      <div className="mt-2 flex-1 overflow-y-auto">
        {activeTab === "Announcements" &&
          (isAnnouncementsPending ? (
            <p className="p-4">Loading announcements...</p>
          ) : (
            <TenderTable tenders={announcementsToDisplay} tableType="announcement" />
          ))}
        {activeTab === "Jobs" &&
          (isJobsPending ? (
            <p className="p-4">Loading jobs...</p>
          ) : (
            <TenderTable tenders={jobsToDisplay} tableType="job" />
          ))}
        {activeTab === "Tenders" &&
          (isTendersPending ? (
            <p className="p-4">Loading tenders...</p>
          ) : (
            <TenderTable tenders={tendersToDisplay} tableType="tender" />
          ))}
      </div>
    </div>
  );
};
