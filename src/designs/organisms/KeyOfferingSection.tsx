"use client";
import React, { useState } from "react";
import { TabButton } from "../atoms/TabButton";
import { Tender } from "../atoms/TableRow";
import { TenderTable } from "../molecules/TenderTable";

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
  { id: 3, title: "GeM Bid For Purchase Of Stationery Items", lastDate: "06-08-2025", isNew: true },
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
      <h2 className="text-lg font-bold text-green-800 mb-2 flex items-center">KEY OFFERINGS</h2>

      {/* Tabs */}
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

      {/* Scrollable content */}
      <div className="mt-2 flex-1 overflow-y-auto">
        {activeTab === "Tenders" && <TenderTable tenders={dummyTenders} />}
        {activeTab !== "Tenders" && (
          <div className="p-4 text-sm text-gray-500">No data available</div>
        )}
      </div>
    </div>
  );
};
