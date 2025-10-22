"use client";

import { TechInfoCard } from "../molecules/TechInfoCard";
import { useRouter } from "next/navigation";

export type StaffsItems = {
  id: string;
  image: string;
  title: string;
  description: string[];
  headName?: string;
  headTitle?: string;
  publications?: string[];
  href?: string;
  name?: string;
  designation?: string;
  icarEmail?: string;
  altEmail?: string;
  specialization?: string;
  joiningDate?: string;
  mscInstitute?: string;
  phdInstitute?: string;
  descriptions?: string[];
};

interface StaffsGridProps {
  items: StaffsItems[];
  showHeading: boolean;
}

export const StaffsGrid: React.FC<StaffsGridProps> = ({ items, showHeading }) => {
  const router = useRouter();

  const handleViewMore = (staff: StaffsItems) => {
    // Redirect to staff detail page using the href or id
    if (staff.href) {
      router.push(staff.href);
    } else {
      // Fallback to a default detail page route
      router.push(`/staff/${staff.id}`);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
      {items.map((tech) => (
        <TechInfoCard
          href=""
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
