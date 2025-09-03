"use client";
import React from "react";
import { KeyOfferingsSection } from "../organisms/KeyOfferingSection";
import { ImportantLinksSection } from "../organisms/ImportantLinksSection";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full py-10">
      <div className="container flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[70%] min-h-[300px]">
          <KeyOfferingsSection />
        </div>
         
        <div className="w-full lg:w-[30%] min-h-[300px]">
          <ImportantLinksSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;