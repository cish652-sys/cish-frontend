"use client";
import React from "react";
import { LinksList } from "../molecules/LinksList";

const dummyLinks = [
  { title: "Walk In Interview Notice For The Post Of Young Professional II", postDate: "19-08-2025", lastDate: "28-08-2025" },
  { title: "Walk In Interview Notice For The Post Of Young Professional II", postDate: "19-08-2025", lastDate: "28-08-2025" },
  { title: "Walk In Interview Notice For The Post Of Young Professional II", postDate: "19-08-2025", lastDate: "28-08-2025" },
  { title: "Walk In Interview Notice For The Post Of Young Professional II", postDate: "19-08-2025", lastDate: "28-08-2025" },
];

export const ImportantLinksSection: React.FC = () => (
  <div className="flex flex-col w-full">
    <h2 className="text-lg font-bold text-green-800 mb-2 flex items-center">
      IMPORTANT LINKS
    </h2>
    <LinksList links={dummyLinks} />
  </div>
);
