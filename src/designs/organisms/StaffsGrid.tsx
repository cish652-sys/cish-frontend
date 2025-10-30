// designs/organisms/StaffsGrid.tsx
"use client";

import { TechInfoCard } from "../molecules/TechInfoCard";
import { useRouter } from "next/navigation";

// UPDATED StaffsItems type
// This type is now structured to hold data from the API
// as well as legacy fields for division pages.
export type StaffsItems = {
  // Core fields
  id: string;
  image: string;
  title: string; // For divisions: "Division of..." | For staff: "Dr. Name"
  description: string[]; // For divisions (from dummy data)

  // Staff-specific details (from API)
  name?: string;
  designation?: string;
  icarEmail?: string;
  altEmail?: string;
  specialization?: string;
  joiningDate?: string;
  mscInstitute?: string;
  phdInstitute?: string;
  divisionQueryName?: string;

  // Division-specific details (from dummy data)
  headName?: string;
  headTitle?: string;
  publications?: string[];
  href?: string;
  descriptions?: string[];

  // API-only fields (for logic)
  subDeptId?: string;
  division?: string;
  isHead?: boolean;
  isDirector?: boolean;
  descriptionDirector?: string | null;
};

interface StaffsGridProps {
  items: StaffsItems[];
  showHeading: boolean;
  subDeptIdForLinks?: string;
}

export const StaffsGrid: React.FC<StaffsGridProps> = ({
  items,
  showHeading,
  subDeptIdForLinks,
}) => {
  const router = useRouter();

  const handleViewMore = (staff: StaffsItems) => {
    // ALWAYS build the URL from the staff.id
    let href = `/staff/${staff.id}`;

    if (subDeptIdForLinks) {
      href += `?subDeptId=${subDeptIdForLinks}`;
    }
    router.push(href);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
      {items.map((tech) => (
        <TechInfoCard
          href="" // TechInfoCard seems to be for divisions/tech
          key={tech.id}
          title={tech.title}
          description={tech.description}
          image={tech.image}
          onViewMore={() => handleViewMore(tech)}
          showHeading={showHeading}
        />
      ))}
    </div>
  );
};
