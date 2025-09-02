"use client";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { TechnologyGrid, type TechnologyItem } from "../organisms/TechnologyGrid"; // import type

type OtherTechnologiesProps = {
  technologiesItems: TechnologyItem[];
  showHeading?: boolean;
};

export const OtherTechnologies: React.FC<OtherTechnologiesProps> = ({
  technologiesItems,
  showHeading = true,
}) => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-10">
      {showHeading && (
        <div className="flex items-center gap-2 mb-8 container">
          <Icon src="/icons/tractor.svg" alt="Trending" />
          <Typography variant="sectionHeading">Other Technologies</Typography>
        </div>
      )}
      <TechnologyGrid items={technologiesItems} showHeading = {showHeading}/>
    </section>
  );
};
