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
    url: "https://mail.gov.in", // Corrected dummy link
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

// 1. UPDATED ApiLink type to include the 'link' field from the API response
type ApiLink = {
  id: number;
  title: string;
  contentKey: string;
  link: string | null;
  postDate: string | null;
  lastDate: string | null;
};

// 2. ADDED the same URL helper function
const getSafeUrl = (url: string | null): string | null => {
  if (typeof url !== "string" || !url) {
    return null;
  }
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
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

  // 3. FIXED the normalization logic
  const normalizedLinks = (apiLinks || [])
    .map((link) => ({
      title: link.title,
      url: getSafeUrl(link.link), // <-- Use link.link and the helper
      postDate: link.postDate || "",
      lastDate: link.lastDate || "",
    }))
    // Filter out any links that were null or empty
    .filter(
      (link): link is { title: string; url: string; postDate: string; lastDate: string } => !!link.url
    );

  const linksToDisplay =
    isError || !apiLinks || normalizedLinks.length === 0 ? dummyLinks : normalizedLinks;

  const handleClick = () => {
    router.push("/UsefulLinks");
  };

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
        // LinksList will now receive the correct URLs
        <LinksList links={linksToDisplay} />
      )}
    </div>
  );
};