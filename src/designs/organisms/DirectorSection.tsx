"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import DirectorHeader from "../molecules/DirectorHeader";
import DirectorContent from "../molecules/DirectorsContent";
import ActionCards from "../molecules/ActionCardsDirectorsDesk";
import ImageAtom from "../atoms/ImageDirectorDesk";

export interface DirectorSectionProps {
  imageSrc: string;
  className?: string;
}

// The interface should match the full object structure from the API
interface DirectorInfo {
  id: number;
  fileUrl: string;
  isDirector: boolean | null;
  description: string | null;
}

// UPDATED: Fetches ALL files without query parameters
const getDirectorData = async (): Promise<DirectorInfo[]> => {
  const response = await fetch('https://api.nationalfarmerportal.org/nfp-portal/files/getAll');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const DirectorSection: React.FC<DirectorSectionProps> = ({ 
  imageSrc: fallbackImageSrc, 
  className = "" 
}) => {
  const { data, isLoading, isError } = useQuery<DirectorInfo[]>({
    queryKey: ['allFilesData'], // Using a new query key for the full dataset
    queryFn: getDirectorData,
  });

  // UPDATED LOGIC:
  // 1. Filter the full response to get only the items marked as a director.
  const allDirectors = data?.filter(item => item.isDirector === true);

  // 2. From that filtered list, find the one with the highest 'id'.
  const directorInfo = allDirectors?.length
    ? allDirectors.reduce((latest, current) => (current.id > latest.id ? current : latest))
    : undefined;

  const content = directorInfo?.description ?? 
    `Central Institute for Subtropical Horticulture Institute with a unique distinction of
    working on the mango the king of fruit on one hand and guava the poor man’s apple on the
    other...`; 

  const imageSrc = directorInfo?.fileUrl ?? fallbackImageSrc;

  const linkHref = "https://cish.in/dir_message.php";

  return (
    <section id="directorsSection" className={`mb-12 ${className}`}>
      <div className="container flex flex-col lg:flex-row gap-6 lg:flex-nowrap">
        <div className="flex-1">
          <DirectorHeader className="text-[#1B5E20]" heading="FROM DIRECTOR'S DESK" />
          
          {isLoading ? (
            <div>Loading directors message...</div>
          ) : isError ? (
            <div>Error: Could not load directors message.</div>
          ) : (
            <DirectorContent
              content={content}
              linkHref={linkHref}
              linkText="SEE MORE"
            />
          )}

          <div className="mt-10">
            <ActionCards />
          </div>
        </div>

        <div className="flex mb-[-8px] justify-center items-end lg:justify-end">
          <ImageAtom src={imageSrc} alt="Director" className="max-w-full p-2" />
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;