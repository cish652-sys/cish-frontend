"use client";
import React from "react";
import { LinksList } from "../molecules/LinksList";
import Icon from "../atoms/ImpactCard/Icon";

const dummyLinks = [
  {
    title: "ehRMS 2.0",
    url:"https://e-hrms.gov.in/login",
    postDate: "",
    lastDate: "",
  },
  {
    title: "DARE/ICAR e-Office",
    url:"https://eoffice.icar.gov.in/SSOComponent/auth.php",
    postDate: "",
    lastDate: "",
  },
  {
    title: "DARE/ICAR Sparrow",
    url:"https://sparrow.icar.gov.in/",
    postDate: "",
    lastDate: "",
  },
  {
    title: "NIC mail",
    url:"email.gov.in / mail.gov.in",
    postDate: "",
    lastDate: "",
  },
  {
    title: "ICAR",
    url:"https://icar.org.in/en",
    postDate: "",
    lastDate: "",
  },
  {
    title: "NHB",
    url:"ttps://www.nhb.gov.in",
    postDate: "",
    lastDate: "",
  },
];

export const ImportantLinksSection: React.FC = () => (
  <div className="flex flex-col w-full h-[299px] ">
    <div className="flex items-center gap-2">
      <Icon src="/icons/plant-care (1) 1.svg" alt="Trending" />
      <h2  className="text-lg font-bold text-green-800 mb-2 flex items-center">USEFUL LINKS</h2>
    </div>

    <LinksList links={dummyLinks} />
  </div>
);
