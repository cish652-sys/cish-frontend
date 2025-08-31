"use client";

import Typography from "../atoms/Typography";

interface TechnologyItemProps {
  title: string;
  description: string;
  date: string;
}

export const TechnologyItem = ({ title, description, date }: TechnologyItemProps) => {
  return (
    <div className="border-b px-4 py-3 hover:bg-gray-50 transition">
      {/* Title + Date */}
      <div className="flex items-center mb-1">
        <span className="ml-2 text-[18px] font-bold capitalize leading-[100%] tracking-[0] font-['Noto Sans']">
          {title}
        </span>

        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{date}</span>
      </div>

      {/* Description */}
      {/* <Typography variant="bodySmall" className="text-gray-700 line-clamp-1">
        {description}
      </Typography> */}
    </div>
  );
};
