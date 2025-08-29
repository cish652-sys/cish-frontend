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
      <div className="container mx-auto ">
        {/* Left */}
        <DirectorHeader />
        <div className="flex gap-3.5">
          <div className="flex flex-col gap-6">
            <DirectorContent />
            <ActionCards />
          </div>

          {/* Right */}
          <ImageAtom src={imageSrc} alt="Director" width={2600} height={2600} />
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
