import React from "react";
import Typography from "../atoms/Typography";
import ButtonLink from "../atoms/ButtonLink";
import Image from "next/image";

export interface TechCardProps {
  // <-- export added
  title: string;
  description: string;
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
      <div className="flex flex-col justify-between flex-1">
        <Typography variant="bodySmall">{title}</Typography>
        <Typography variant="paragraphVariant">{description}</Typography>
        <ButtonLink label="SEE MORE" />
      </div>
    </div>
  );
};

export default TechCard;
