"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DirectorHeader from "../molecules/DirectorHeader";
import ActionCards from "../molecules/ActionCardsDirectorsDesk";
import ImageAtom from "../atoms/ImageDirectorDesk";
import TextAtom from "../atoms/TextDirectorsDesk";

export interface DirectorSectionProps {
  imageSrc: string;
  className?: string;
}

interface DirectorInfo {
  id: number;
  fileUrl: string;
  isDirector: boolean | null;
  description: string | null;
}

const getDirectorData = async (): Promise<DirectorInfo[]> => {
  const response = await fetch("https://api.cish.org.in/files/getAll");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const DirectorSection: React.FC<DirectorSectionProps> = ({
  imageSrc: fallbackImageSrc,
  className = "",
}) => {
  const { data, isLoading } = useQuery<DirectorInfo[]>({
    queryKey: ["allFilesData"],
    queryFn: getDirectorData,
  });

  const fallbackContent = `Central Institute for Subtropical Horticulture Institute with a unique distinction 
  of working on the mango the king of fruit on one hand and guava the poor man's apple on the other is placed 
  on envious pedestal of having the world largest germplasm (755) in its field genebank. Being ever committed 
  to challenging and tempting task of conserving our invaluable fast eroding genetic wealth of mango, during the 
  period we through our dedicated team at the Institute could virtually ignite the passion of farmers and set 
  the example to be emulated, for conserving the unique heirloom mango varieties by empowering the farmer through 
  Society for Conservation of Biodiversity. Consequently we were able to submit 34 farmers and community varieties 
  to PPV&fRA for registration, established community nurseries and outside community nursery produced more than 
  10000 grafts of non-commercial varieties.`;

  const allDirectors = data?.filter((item) => item.isDirector === true);
  const directorInfo = allDirectors?.length
    ? allDirectors.reduce((latest, current) => (current.id > latest.id ? current : latest))
    : undefined;

  const content = directorInfo?.description ?? fallbackContent;
  const imageSrc = directorInfo?.fileUrl ?? fallbackImageSrc;

  // SEE MORE toggle state
  const [expanded, setExpanded] = useState(false);
  const shortText = content.slice(0, 300) + (content.length > 300 ? "..." : "");

  return (
    <section id="directorsSection" className={`mb-12 ${className}`}>
      <div className="container flex flex-col lg:flex-row gap-6 lg:flex-nowrap">
        <div className="flex-1">
          <DirectorHeader className="text-[#1B5E20]" heading="FROM DIRECTOR'S DESK" />

          {isLoading ? (
            <div>Loading directors message...</div>
          ) : (
            <TextAtom className={`flex flex-col gap-2 ${className}`}>
              {expanded ? content : shortText}

              {content.length > 300 && (
                <span
                  onClick={() => setExpanded(!expanded)}
                  className="cursor-pointer inline-block w-fit"
                >
                  <TextAtom className="text-green-700 font-semibold inline-flex items-center gap-1 text-sm md:text-base mt-0">
                    {expanded ? "SEE LESS" : "SEE MORE"}
                    <span>{expanded ? "←" : "→"}</span>{" "}
                  </TextAtom>
                </span>
              )}
            </TextAtom>
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
