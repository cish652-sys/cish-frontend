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
  },
  {
    id: 2,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "25-07-2025",
    lastDate: "01-08-2025",
    result: "Result",
    isNew: false,
  },
  {
    id: 3,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "22-07-2025",
    lastDate: "30-07-2025",
    result: "Result",
    isNew: false,
  },
  {
    id: 4,
    title: "Walk In Interview Notice For The Post Of Young Professional II",
    form: "Application Form",
    postDate: "15-07-2025",
    lastDate: "22-07-2025",
    result: "Result",
    isNew: false,
  },
  {
    id: 5,
    title: "Walk In Interview Notice For The Post Of Young Professional I",
    form: "Application Form",
    postDate: "10-07-2025",
    lastDate: "17-07-2025",
    result: "Result",
    isNew: false,
  },
];

const announcementsData: Tender[] = [
  {
    id: 1,
    title: "Foundation Day",
    lastDate: "04-09-2025",
    isNew: true,
  },
];

const dummyTenders: Tender[] = [
  {
    id: 1,
    title: "Tender Notice For Portable Handheld Ethylene Analyser",
    lastDate: "09-09-2025",
    isNew: true,
  },
  {
    id: 2,
    title: "GeM Bid For Purchase Of Lab Scale Honey Processing Plant",
    lastDate: "02-09-2025",
    isNew: true,
  },
  {
    id: 3,
    title: "GeM Bid For Purchase Of Stationery Items",
    lastDate: "06-08-2025",
    isNew: true,
  },
  {
    id: 4,
    title: "GeM Bid For Purchase Of 01 No Central Air Conditioning System Corrigendum Letter",
    lastDate: "07-07-2025",
    isNew: true,
  },
  {
    id: 5,
    title: "GeM Bid For Purchase Of Real Time PCR Machine",
    lastDate: "27-08-2025",
    isNew: true,
  },
];

export const KeyOfferingsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tenders");

  return (
    <div className="flex flex-col w-full h-[300px]">
      <div className="flex items-center gap-2">
        <Icon src="/icons/nfc-magnifying-glass 1.svg" alt="Trending" />
        <h2 className="text-lg font-bold text-green-800 mb-2 flex items-center">KEY OFFERINGS</h2>
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
        {activeTab === "Announcements" && <TenderTable tenders={announcementsData} tableType="announcement" />}
        {activeTab === "Jobs" && <TenderTable tenders={jobsData} tableType="job" />}
        {activeTab === "Tenders" && <TenderTable tenders={dummyTenders} tableType="tender" />}
      </div>
    </div>
  );
};