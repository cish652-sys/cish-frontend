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
  iconName,
  title,
  description,
}) => {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 md:px-8 lg:px-16 py-8">
      {/* Breadcrumb */}
      <div className="w-full text-left mb-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Icon + Title */}
      <div className="flex items-center gap-2">
        <Icon src="/icons/microscope.svg" alt="1568685-200 1.svg" className="text-green-700" />
        <Typography variant="bodyLarge" weight="bold" className="text-green-800">
          {title}
        </Typography>
      </div>

      {/* Description */}
      <div className="mt-4 max-w-2xl space-y-2">
        {description.map((line, i) => (
          <Typography key={i} variant="bodyInterItalic">
            {line}
          </Typography>
        ))}
      </div>
    </section>
  );
};
