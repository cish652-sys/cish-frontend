"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TabButton } from "../atoms/TabButton";
import { Tender } from "../atoms/TableRow";
import { TenderTable } from "../molecules/TenderTable";
import Icon from "../atoms/ImpactCard/Icon";

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
  {
    id: 2,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "25-07-2025",
    lastDate: "01-08-2025",
    result: "Result",
    isNew: true,
    link: "https://cish.org.in/jobs/Notice25072025.pdf",
  },
  {
    id: 3,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "22-07-2025",
    lastDate: "30-07-2025",
    result: "Result",
    isNew: false,
    link: "",
  },
  {
    id: 4,
    title: "Walk In Interview Notice For The Post Of Young Professional II",
    form: "Application Form",
    postDate: "15-07-2025",
    lastDate: "22-07-2025",
    result: "Result",
    isNew: false,
    link: "",
  },
  {
    id: 5,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "10-07-2025",
    lastDate: "17-07-2025",
    result: "Result",
    isNew: false,
    link: "",
  },
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
  {
    id: 2,
    title: "GeM Bid For Purchase Of Lab Scale Honey Processing Plant",
    lastDate: "02-09-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/GeM_Bid6547327.pdf",
  },
  {
    id: 3,
    title: "GeM Bid For Purchase Of Stationery Items",
    lastDate: "06-08-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/Gem_stationery.pdf",
  },
  {
    id: 4,
    title: "GeM Bid For Purchase Of 01 No Central Air Conditioning System Corrigendum Letter",
    lastDate: "07-07-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/GEM16062025.pdf",
  },
  {
    id: 5,
    title: "GeM Bid For Purchase Of Real Time PCR Machine",
    lastDate: "27-08-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/RTPCR_Bid.pdf",
  },
];

type ApiAnnouncement = { id: number; title: string; date: string };
type ApiJob = { id: number; title: string; postDate: string | null; lastDate: string | null };
type ApiTender = { id: number; title: string; date: string };

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

const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;
  const [year, month, day] = parts;
  return `${day}-${month}-${year}`;
};

const ViewMoreButton: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const handleViewMore = () => {
    switch (activeTab) {
      case "Tenders":
        window.open("https://cish.in/tenders.php", "_blank");
        break;
      case "Jobs":
        // Placeholder - you'll add the URL later
        window.open("https://cish.in/jobs.php", "_blank");

        break;
      case "Announcements":
        console.log("Announcements URL to be added");
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

export const KeyOfferingsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tenders");

  const {
    data: apiAnnouncements,
    isPending: isAnnouncementsPending,
    isError: isAnnouncementsError,
  } = useQuery({ queryKey: ["announcements"], queryFn: fetchAnnouncements });
  const normalizedAnnouncements: Tender[] = (apiAnnouncements || []).map((item) => ({
    id: item.id,
    title: item.title,
    lastDate: formatDate(item.date),
    isNew: false,
    link: "",
  }));
  const announcementsToDisplay =
    isAnnouncementsError || normalizedAnnouncements.length === 0
      ? announcementsData
      : normalizedAnnouncements;
  const {
    data: apiJobs,
    isPending: isJobsPending,
    isError: isJobsError,
  } = useQuery({ queryKey: ["jobs"], queryFn: fetchJobs });
  const normalizedJobs: Tender[] = (apiJobs || []).map((item) => ({
    id: item.id,
    title: item.title,
    postDate: formatDate(item.postDate),
    lastDate: formatDate(item.lastDate),
    isNew: false,
    link: "",
  }));
  const jobsToDisplay = isJobsError || normalizedJobs.length === 0 ? jobsData : normalizedJobs;
  const {
    data: apiTenders,
    isPending: isTendersPending,
    isError: isTendersError,
  } = useQuery({ queryKey: ["tenders"], queryFn: fetchTenders });
  const normalizedTenders: Tender[] = (apiTenders || []).map((item) => ({
    id: item.id,
    title: item.title,
    lastDate: formatDate(item.date),
    isNew: false,
    link: "",
  }));
  const tendersToDisplay =
    isTendersError || normalizedTenders.length === 0 ? dummyTenders : normalizedTenders;

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
          <TabButton
            key={tab}
            label={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
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
