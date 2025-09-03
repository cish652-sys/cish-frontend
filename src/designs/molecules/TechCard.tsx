import React from "react";
import Typography from "../atoms/Typography";
import ButtonLink from "../atoms/ButtonLink";
import Image from "next/image";

export interface TechCardProps {
  title: string;
  description: string[];
  href: string;
  image?: string;
}

const TechCard: React.FC<TechCardProps> = ({ title, description, image }) => {
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
              <Typography variant="paragraphSmall" className="inline">
                {line}
              </Typography>
            </li>
          ))}
        </ul>

        {/* Button hamesha bottom me chipka rahega */}
        <div className="mt-auto pt-4">
          <ButtonLink label="VIEW MORE" />
        </div>
      </div>
    </div>
  );
};

export default TechCard;