"use client";
import React from "react";
import { KeyOfferingsSection } from "../organisms/KeyOfferingSection";
import { ImportantLinksSection } from "../organisms/ImportantLinksSection";

const Dashboard: React.FC = () => {
  return (
    <div className="container flex flex-row gap-4  ">
      <div className="w-[70%]">
        <KeyOfferingsSection />
      </div>

      <div className="w-[30%]">
        <ImportantLinksSection />
      </div>
    </div>
  );
};

export default Dashboard;
