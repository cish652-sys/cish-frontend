"use client";

import { useRouter } from "next/navigation";
import { TechInfoCard } from "../molecules/TechInfoCard";

export interface TechnologyItem {
  id: string;
  title: string;
  description: string[];
  image?: string;
  href?: string; // ✅ custom/external link
}

interface TechnologyGridProps {
  items: TechnologyItem[];
  showHeading: boolean;
  showTechnologyDetails?: boolean;
}

export const TechnologyGrid: React.FC<TechnologyGridProps> = ({
  items,
  showHeading,
  showTechnologyDetails,
}) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
      {items.map((tech) => (
        <TechInfoCard
          showTechnologyDetails={showTechnologyDetails}
          key={tech.id}
          title={tech.title}
          description={tech.description}
          image={tech.image}
          showHeading={showHeading}
          onViewMore={() => {
            if (tech.href) {
              if (tech.href.startsWith("http")) {
                window.open(tech.href, "_blank");
              } else {
                router.push(tech.href);
              }
            } else {
              // router.push(`/staff/${tech.id}`);
               '';
            }
          }}
        />
      ))}
    </div>
  );
};
