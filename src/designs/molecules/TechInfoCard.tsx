// src/designs/molecules/TechInfoCard.tsx
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import Typography from "../atoms/Typography";
import { cn } from "@/lib/utils";
// Assuming ButtonLink can be used here, or just use an <a> tag
// import ButtonLink from "../atoms/ButtonLink";

interface TechInfoCardProps {
  title: string;
  description: string[];
  image?: string;
  onViewMore?: () => void;
  showHeading: boolean;
  showTechnologyDetails?: boolean;
  className?: string;
  href: string; // Make sure href is passed
}

export const TechInfoCard: React.FC<TechInfoCardProps> = ({
  title,
  description,
  image,
  onViewMore,
  showHeading,
  showTechnologyDetails = false,
  className,
  href, // Destructure href
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden",
        className
      )}
    >
      {/* ... CardHeader and CardContent are unchanged ... */}
      <CardHeader className="p-2 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={160}
            className="object-fill w-full h-full min-h-[200px]"
          />
        ) : (
          <div className="w-full h-[160px] flex items-center justify-center bg-gray-200 text-gray-500">
            <Typography variant="bodySmall">No Image</Typography>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-2 flex flex-col flex-1">
        <Typography variant="contentTitle">{title}</Typography>
        {!showHeading && showTechnologyDetails && (
          <Typography variant="badgeStyle" className="mt-2">
            Technology Details:
          </Typography>
        )}
        {showTechnologyDetails && (
          <ul className="list-disc list-outside">
            {description.map((line, idx) => (
              <Typography key={idx} variant="labelSmall">
                {line}
              </Typography>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="p-4 flex justify-end mt-auto">
        {/* --- CONDITIONAL LOGIC HERE --- */}
        {onViewMore ? (
          // If handler is provided, render a button
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewMore();
            }}
            className="text-green-700 hover:text-green-800 font-semibold cursor-pointer"
          >
            VIEW MORE →
          </button>
        ) : (
          <a
            href={href}
            className="text-green-700 hover:text-green-800 font-semibold cursor-pointer"
          >
            VIEW MORE →
          </a>
        )}
      </CardFooter>
    </Card>
  );
};
