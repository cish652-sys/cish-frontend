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
    <section className={`w-full py-10 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center">
        {/* Left */}
        <div className="space-y-6">
          <DirectorHeader />
          <DirectorContent />
          <ActionCards />
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <ImageAtom src={imageSrc} alt="Director" width={302} height={302} />
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
