// src/designs/molecules/TechCard.tsx
import React from "react";
import Typography from "../atoms/Typography";
import ButtonLink from "../atoms/ButtonLink"; // Import ButtonLink
import Image from "next/image";

export interface TechCardProps {
  title: string;
  description: string[];
  href: string; // href is still required for the link fallback
  image?: string;
  onViewMore?: () => void; // Make handler optional
}

const TechCard: React.FC<TechCardProps> = ({
  title,
  description,
  image,
  href,
  onViewMore, // Destructure the handler
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden hover:shadow-lg transition p-4 gap-4">
      {image && (
        <div className="flex-shrink-0 w-fit bg-gray-200 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            height={500}
            width={500}
          />
        </div>
      )}

      {/* Right side content */}
      <div className="flex flex-col flex-1">
        <Typography variant="cardTitle">{title}</Typography>

        <ul className="list-disc list-outside pl-5 mt-2">
          {description.map((line, idx) => (
            <li key={idx} className="leading-snug">
              <p className="inline text-gray-700 text-sm">
                {line}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          {/* --- CONDITIONAL LOGIC HERE --- */}
          {onViewMore ? (
            // If handler is provided, render a button
            <button
              onClick={(e) => {
                e.preventDefault();
                onViewMore();
              }}
              className="text-green-700 hover:text-green-800 font-semibold cursor-pointer"
            >
              VIEW MORE →
            </button>
          ) : (
            // Otherwise, render the default link
            <ButtonLink label="VIEW MORE" href={href} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
