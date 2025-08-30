// src/components/molecules/TechInfoCard.tsx
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import ButtonLink from "../atoms/ButtonLink";

interface TechInfoCardProps {
  title: string;
  description: string;
  image?: string;
  onViewMore?: () => void;
}

export const TechInfoCard: React.FC<TechInfoCardProps> = ({
  title,
  description,
  image,
  onViewMore,
}) => {
  return (
    <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Image placeholder */}
      <CardHeader className="p-2 bg-gray-100 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={160}
          className="object-cover w-full h-full"
        />
      </CardHeader>

      {/* Content */}
      <CardContent className="p-2">
        <Typography variant="bodyLarge">{title}</Typography>
        <Typography variant="bodySmall">Technology Details:</Typography>

        <Typography variant="paragraphVariant">{description}</Typography>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 flex justify-end">
        <ButtonLink label="VIEW MORE" />{" "}
      </CardFooter>
    </Card>
  );
};
