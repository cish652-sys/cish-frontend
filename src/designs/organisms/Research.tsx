"use client";
import { useState } from "react";
import OngoingHouseProject from "../molecules/OngoingHouseProject";
import OngoingExtenallyProject from "../molecules/OngoingExtenallyProject";
import { SectionHeader } from "./SectionHeader";
export default function Research() {
  const [activeTab, setActiveTab] = useState("house");

  const tabs = [
    { id: "house", label: "Ongoing House Project" },
    { id: "externally", label: "Ongoing Externally Project" },
  ];

  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "External Funded Research and Institute Funded" },
        ]}
        iconProps={true}
        title="External Funded Research and Institute Funded"
        description={[""]}
      />
      <div className="min-h-screen">
        {/* Tabs */}
        <div className="flex justify-center mb-4 mt-4">
          <div className="inline-flex bg-white shadow-md overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-semibold transition-colors duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-[#1B5E20] text-white"
                      : "text-gray-700 hover:bg-green-50"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        {activeTab === "house" && <OngoingHouseProject />}
        {activeTab === "externally" && <OngoingExtenallyProject />}
      </div>
    </section>
  );
}
