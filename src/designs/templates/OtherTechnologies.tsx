// src/components/sections/OtherTechnologies.tsx
"use client";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { TechnologyGrid } from "../organisms/TechnologyGrid";
type OtherTechnologiesProps = {
  technologiesItems: any[];
  showHeading?: boolean;
};
export const OtherTechnologies: React.FC<OtherTechnologiesProps> = ({
  technologiesItems,
  showHeading = true,
}) => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-10">
      {/* Heading */}
      {showHeading && (
        <div className="flex items-center gap-2 mb-8 container">
          <Icon
            src="/icons/OtherTechnologyIcon.svg"
            alt="Trending"
            className="w-6 h-6 text-green-700"
          />
          <Typography variant="bodyLarge">Other Technologies</Typography>
        </div>
      )}

      {/* Grid */}
      <TechnologyGrid items={technologiesItems} />
    </section>
  );
};
