"use client";
import React from "react";
import Typography from "../atoms/Typography";
import TechCard from "../molecules/TechCard";
import Icon from "../atoms/ImpactCard/Icon";
import { TechnologyCardItem } from "@/types";

type TrendingTechnologiesProps = {
  technologies: TechnologyCardItem[];
  showVerieties?: boolean;
  className?: string;
  onViewMore?: (item: TechnologyCardItem) => void;
};

const TrendingTechnologies: React.FC<TrendingTechnologiesProps> = ({
  technologies,
  showVerieties = true,
  onViewMore,
}) => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0] ">
      <div className="flex flex-col gap-6 container">
        {showVerieties && (
          <div className="flex items-center gap-2">
            <Icon src="/icons/microscope.svg" alt="Trending" />
            <Typography variant="sectionHeading">Trending Technologies</Typography>
          </div>
        )}
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            {...tech}
            onViewMore={onViewMore ? () => onViewMore(tech) : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingTechnologies;
