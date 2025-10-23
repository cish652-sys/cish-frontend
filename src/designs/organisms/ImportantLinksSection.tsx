"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { LinksList } from "../molecules/LinksList";
import Icon from "../atoms/ImpactCard/Icon";
import { useRouter } from "next/navigation";

const dummyLinks = [
  {
    title: "eHRMS 2.0",
    url: "https://e-hrms.gov.in/login",
    postDate: "",
    lastDate: "",
  },
  {
    title: "DARE/ICAR e-Office",
    url: "https://eoffice.icar.gov.in/SSOComponent/auth.php",
    postDate: "",
    lastDate: "",
  },
  {
    title: "DARE/ICAR Sparrow",
    url: "https://sparrow.icar.gov.in/",
    postDate: "",
    lastDate: "",
  },
  {
    title: "NIC mail",
    url: "email.gov.in / mail.gov.in",
    postDate: "",
    lastDate: "",
  },
  {
    title: "ICAR",
    url: "https://icar.org.in/en",
    postDate: "",
    lastDate: "",
  },
  {
    title: "NHB",
    url: "https://www.nhb.gov.in",
    postDate: "",
    lastDate: "",
  },
];

type ApiLink = {
  id: number;
  title: string;
  contentKey: string;
};

const fetchUsefulLinks = async (): Promise<ApiLink[]> => {
  const response = await fetch("https://api.cish.org.in/api/content/usefulLinks");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const ImportantLinksSection: React.FC = () => {
  const router = useRouter();
  const {
    data: apiLinks,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["usefulLinks"],
    queryFn: fetchUsefulLinks,
  });

  const normalizedLinks = (apiLinks || []).map((link) => ({
    title: link.title,
    url: link.contentKey,
    postDate: "",
    lastDate: "",
  }));

  const linksToDisplay = isError || normalizedLinks.length === 0 ? dummyLinks : normalizedLinks;
const handleClick = () => {
  router.push('/UsefulLinks')
}
  return (
    <div className="flex flex-col cursor-pointer w-full h-[299px] ">
      <div onClick={handleClick} className="flex items-center gap-2">
        <Icon src="/icons/plant-care (1) 1.svg" alt="Trending" />
        <h2 className="text-[22px] font-bold text-green-800 mb-2 flex items-center">
          USEFUL LINKS
        </h2>
      </div>

      {isPending ? (
        <p className="p-4 text-center">Loading links...</p>
      ) : (
        <LinksList links={linksToDisplay} />
      )}
    </div>
  );
};
