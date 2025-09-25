"use client";
import React, { useState } from "react";
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
    link: "https://cish.org.in/jobs/Notice25072025.pdf", // Add your job link here
  },
  {
    id: 3,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "22-07-2025",
    lastDate: "30-07-2025",
    result: "Result",
    isNew: false,
    link: "", // Add your job link here
  },
  {
    id: 4,
    title: "Walk In Interview Notice For The Post Of Young Professional II",
    form: "Application Form",
    postDate: "15-07-2025",
    lastDate: "22-07-2025",
    result: "Result",
    isNew: false,
    link: "", // Add your job link here
  },
  {
    id: 5,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "10-07-2025",
    lastDate: "17-07-2025",
    result: "Result",
    isNew: false,
    link: "", // Add your job link here
  },
];

const announcementsData: Tender[] = [
  {
    id: 1,
    title: "Foundation Day",
    lastDate: "04-09-2025",
    isNew: true,
    link: "", // Add your announcement link here
  },
];

const dummyTenders: Tender[] = [
  {
    id: 1,
    title: "Tender Notice For Portable Handheld Ethylene Analyser",
    lastDate: "09-09-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/Ethylene_Analyser.pdf", // Add your tender link here
  },
  {
    id: 2,
    title: "GeM Bid For Purchase Of Lab Scale Honey Processing Plant",
    lastDate: "02-09-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/GeM_Bid6547327.pdf", // Add your tender link here
  },
  {
    id: 3,
    title: "GeM Bid For Purchase Of Stationery Items",
    lastDate: "06-08-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/Gem_stationery.pdf", // Add your tender link here
  },
  {
    id: 4,
    title: "GeM Bid For Purchase Of 01 No Central Air Conditioning System Corrigendum Letter",
    lastDate: "07-07-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/GEM16062025.pdf", // Add your tender link here
  },
  {
    id: 5,
    title: "GeM Bid For Purchase Of Real Time PCR Machine",
    lastDate: "27-08-2025",
    isNew: true,
    link: "https://cish.org.in/tenders/RTPCR_Bid.pdf", // Add your tender link here
  },
];

// View More Button Component
const ViewMoreButton: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const handleViewMore = () => {
    switch (activeTab) {
      case "Tenders":
        window.open("https://cish.in/tender.php", "_blank");
        break;
      case "Jobs":
        // Placeholder - you'll add the URL later
        console.log("Jobs URL to be added");
        // window.open("YOUR_JOBS_URL_HERE", "_blank");
        break;
      case "Announcements":
        // Placeholder - you'll add the URL later
        console.log("Announcements URL to be added");
        // window.open("YOUR_ANNOUNCEMENTS_URL_HERE", "_blank");
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

  return (
    <div className="flex flex-col w-full h-[300px]">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <Icon src="/icons/nfc-magnifying-glass 1.svg" alt="Trending" />
          <h2 className="text-lg font-bold text-green-800 mb-2 flex items-center">KEY OFFERINGS</h2>
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
        {activeTab === "Announcements" && (
          <TenderTable tenders={announcementsData} tableType="announcement" />
        )}
        {activeTab === "Jobs" && <TenderTable tenders={jobsData} tableType="job" />}
        {activeTab === "Tenders" && <TenderTable tenders={dummyTenders} tableType="tender" />}
      </div>
    </div>
  );
};
