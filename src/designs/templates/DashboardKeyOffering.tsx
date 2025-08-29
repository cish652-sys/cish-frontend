"use client";
import React from "react";
import { KeyOfferingsSection } from "../organisms/KeyOfferingSection";
import { ImportantLinksSection } from "../organisms/ImportantLinksSection";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center p-2 p-y-[20px]">
      <div className="w-full md:w-[808px]">
        <KeyOfferingsSection />
      </div>

      <div className="w-full md:w-[376px]">
        <ImportantLinksSection />
      </div>
    </div>
  );
};

export default Dashboard;
