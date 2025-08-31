import React from "react";
import Typography from "../atoms/Typography";
import ButtonLink from "../atoms/ButtonLink";

interface TechCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

const TechCard: React.FC<TechCardProps> = ({ title, description, href, image }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden hover:shadow-lg transition p-4 gap-4">
      {image && (
        <div className="flex-shrink-0 w-fit bg-gray-200 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="flex flex-col justify-between flex-1">
        <Typography variant="bodySmall">{title}</Typography>
        <Typography variant="paragraphVariant">{description}</Typography>
        <ButtonLink label="SEE MORE" />{" "}
      </div>
    </div>
  );
};

export default TechCard;
