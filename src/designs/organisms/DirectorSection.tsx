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
    <section className={`my-14 py-6${className}`}>
      <div className="container flex flex-row gap-4 ">
        <div className="">
          <DirectorHeader />
          <DirectorContent />
          <div className="mt-10">
            <ActionCards />
          </div>
        </div>

        <div className="flex justify-center items-end">
          <ImageAtom src={imageSrc} alt="Director" width={2600} height={3000} />
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
