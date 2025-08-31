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
   <section className={`my-14 py-6 ${className}`}>
  <div className="container flex flex-col lg:flex-row gap-6 lg:flex-nowrap">
    <div className="flex-1">
      <DirectorHeader />
      <DirectorContent />
      <div className="mt-10">
        <ActionCards />
      </div>
    </div>

    <div className="flex mb-[-8px] justify-center items-end lg:justify-end">
      <ImageAtom
        src={imageSrc}
        alt="Director"
        className="max-w-full h-auto"
      />
    </div>
  </div>
</section>

  );
};

export default DirectorSection;
