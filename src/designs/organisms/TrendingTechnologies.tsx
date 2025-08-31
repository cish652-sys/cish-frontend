import React from "react";
import Typography from "../atoms/Typography";
import TechCard from "../molecules/TechCard";
import Icon from "../atoms/ImpactCard/Icon";
type TrendingTechnologiesProps = {
  technologies: any[];
  showVerieties?: boolean
};
const TrendingTechnologies: React.FC<TrendingTechnologiesProps> = ({
  technologies,
  showVerieties = true,
}) => {
  return (
    <section className="py-0 bg-[#FBFAF0]">
      <div className="flex flex-col gap-6 px-[80px] pb-[80px] pt-[25px] container">
        {showVerieties && (
          <div className="flex items-center gap-2">
            <Icon src="/icons/tractor.svg" alt="Trending" className="w-6 h-6 text-green-700" />
            <Typography variant="bodyLarge">Trending Technologies</Typography>
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
