// src/components/organisms/SectionHeader.tsx
"use client";

import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { Breadcrumb, BreadcrumbItem } from "../molecules/Breadcrumb";

interface SectionHeaderProps {
  breadcrumbItems: BreadcrumbItem[];
  iconName: string;
  title: string;
  description: string[];
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  breadcrumbItems,
  title,
  description,
}) => {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 md:px-8 lg:px-16 py-8 container">
      {/* Breadcrumb */}
      <div className="w-full text-left mb-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Icon + Title */}
      <div className="flex items-center gap-2">
        <Icon src="/icons/microscope.svg" alt="1568685-200 1.svg" />
        <Typography variant="headingLarge">{title}</Typography>
      </div>

      {/* Description */}
      <div className="mt-3">
        {description.map((line, i) => (
          <Typography key={i} variant="italicHighlight">
            {line}
          </Typography>
        ))}
      </div>
    </section>
  );
};
