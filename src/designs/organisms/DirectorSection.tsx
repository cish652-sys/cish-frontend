"use client";
import React from "react";
import DirectorHeader from "../molecules/DirectorHeader";
import DirectorContent from "../molecules/DirectorsContent";
import ActionCards from "../molecules/ActionCardsDirectorsDesk";
import ImageAtom from "../atoms/ImageDirectorDesk";

export interface DirectorSectionProps {
  imageSrc: string;
  className?: string;
}

const DirectorSection: React.FC<DirectorSectionProps> = ({ imageSrc, className = "" }) => {
  return (
    <section id="directorsSection" className={`mb-12 ${className}`}>
      <div className="container flex flex-col lg:flex-row gap-6 lg:flex-nowrap">
        <div className="flex-1">
          <DirectorHeader className="text-[#1B5E20]" heading="FROM DIRECTOR'S DESK" />
          <DirectorContent
            content="Central Institute for Subtropical Horticulture Institute with a unique distinction of
        working on the mango the king of fruit on one hand and guava the poor man’s apple on the
        other is placed on envious pedestal of having the world largest germplasm (755) in its field
        genebank. being ever committed to challenging and tempting task of conserving our invaluable
        fast eroding genetic wealth of mango, during the period we through our dedicated team at the
        institute could virtually ignite the passion of farmers and set the example to be emulated,
        for conserving the unique heirloom mango varieties by empowering the farmer through society
        for conservation of biodiversity. consequently we were able to submit 34 farmers and
        community varieties to PPV&FRA for registration, established community nurseries and outside
        community nursery produced more than 10000 grafts of non-commercial varieties."
            linkHref="https://cish.in/dir_message.php"
            linkText="SEE MORE"
          />
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
