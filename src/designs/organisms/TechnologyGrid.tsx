"use client";
import { TechInfoCard } from "../molecules/TechInfoCard";
import { TechnologyCardItem } from "@/types";

// REMOVE the old interface:
// export interface TechnologyItem {
//   id: string;
//   title: string;
//   ...
// }

interface TechnologyGridProps {
  items: TechnologyCardItem[]; // <-- USE the correct type here
  showHeading: boolean;
  showTechnologyDetails?: boolean;
  onViewMore?: (id: number) => void; // Make onViewMore optional for VarietiesPage
}

export const TechnologyGrid: React.FC<TechnologyGridProps> = ({
  items,
  showHeading,
  showTechnologyDetails,
  onViewMore,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
      {items.map((tech) => (
        <TechInfoCard
          key={tech.id.toString()}
          title={tech.title}
          description={tech.description}
          image={tech.image}
          href={tech.href}
          showHeading={showHeading}
          showTechnologyDetails={showTechnologyDetails}
          onViewMore={onViewMore ? () => onViewMore(tech.id) : undefined}
        />
      ))}
    </div>
  );
};
