"use client";
import React from "react";
import { LinksList } from "../molecules/LinksList";
import Icon from "../atoms/ImpactCard/Icon";

const dummyLinks = [
  {
    title: "ehRMS 2.0",
    postDate: "",
    lastDate: "",
  },
  {
    title: "DARE/ICAR e-Office",
    postDate: "",
    lastDate: "",
  },
  {
    title: "DARE/ICAR Sparrow",
    postDate: "",
    lastDate: "",
  },
  {
    title: "NIC mail",
    postDate: "",
    lastDate: "",
  },
  {
    title: "ICAR",
    postDate: "",
    lastDate: "",
  },
  {
    title: "NHB",
    postDate: "",
    lastDate: "",
  },
];

export const ImportantLinksSection: React.FC = () => (
  <div className="flex flex-col w-full h-[299px] ">
    <div className="flex items-center gap-2">
      <Icon src="/icons/plant-care (1) 1.svg" alt="Trending" />
      <h2 className="text-lg font-bold text-green-800 mb-2 flex items-center">USEFUL LINKS</h2>
    </div>

    <LinksList links={dummyLinks} />
  </div>
);
