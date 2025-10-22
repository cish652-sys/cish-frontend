"use client";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { TechnologyGrid } from "../organisms/TechnologyGrid";
import { TechnologyCardItem } from "@/types";

type OtherTechnologiesProps = {
  technologiesItems: TechnologyCardItem[]; // <-- USE the correct type here
  showHeading?: boolean;
  onViewMore?: (id: number) => void; // Make onViewMore optional
};

export const OtherTechnologies: React.FC<OtherTechnologiesProps> = ({
  technologiesItems,
  showHeading = true,
  onViewMore,
}) => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-10">
      {showHeading && (
        <div className="flex items-center gap-2 mb-8 container">
          <Icon src="/icons/tractor.svg" alt="Other Tech" />
          <Typography variant="sectionHeading">Other Technologies</Typography>
        </div>
      )}
      <TechnologyGrid items={technologiesItems} showHeading={showHeading} onViewMore={onViewMore} />
    </section>
  );
};
