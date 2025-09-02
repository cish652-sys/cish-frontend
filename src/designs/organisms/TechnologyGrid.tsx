"use client";

import { TechInfoCard } from "../molecules/TechInfoCard";

export interface TechnologyItem {
  // <-- add export
  id: string;
  title: string;
  description: string[];
  image?: string;
}

interface TechnologyGridProps {
  items: TechnologyItem[];
  showHeading:boolean
}

export const TechnologyGrid: React.FC<TechnologyGridProps> = ({ items,showHeading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
      {items.map((tech) => (
        <TechInfoCard
          key={tech.id}
          title={tech.title}
          description={tech.description}
          image={tech.image}
          onViewMore={() => alert(`Clicked on ${tech.title}`)}
          showHeading={showHeading}
        />
      ))}
    </div>
  );
};
