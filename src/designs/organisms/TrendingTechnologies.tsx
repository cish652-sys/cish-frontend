import React from "react";
import Typography from "../atoms/Typography";
import TechCard, { TechCardProps } from "../molecules/TechCard"; // import the props type
import Icon from "../atoms/ImpactCard/Icon";

type TrendingTechnologiesProps = {
  technologies: TechCardProps[];
  showVerieties?: boolean;
  className?: string;
};

const TrendingTechnologies: React.FC<TrendingTechnologiesProps> = ({
  technologies,
  showVerieties = true,
  className,
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
        {technologies.map((tech, idx) => (
          <TechCard key={idx} {...tech} />
        ))}
      </div>
    </section>
  );
};

export default TrendingTechnologies;
