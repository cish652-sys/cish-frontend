"use client";

import Typography from "../atoms/Typography";

interface TechnologyItemProps {
  title: string;
  description: string;
  date: string;
}

export const TechnologyItem = ({ title, date, description }: TechnologyItemProps) => {
  return (
    <div className="border-b px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 transition">
      {/* Title + Date */}
      <div className="flex items-start sm:items-center flex-col sm:flex-row gap-1 sm:gap-2 mb-1">
        <span className="text-sm sm:text-base md:text-lg font-bold normal-case leading-tight tracking-normal font-['Noto Sans'] flex-1 min-w-0">
          {title}
        </span>

        <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0 self-start sm:self-auto">
          {date}
        </span>
      </div>

      {/* Description - uncommented and made responsive */}
      <Typography
        variant="bodySmall"
        className="text-gray-700 text-xs sm:text-sm line-clamp-2 sm:line-clamp-1 leading-relaxed"
      >
        {description}
      </Typography>
    </div>
  );
};
