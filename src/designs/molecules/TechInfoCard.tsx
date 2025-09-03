// src/components/molecules/TechInfoCard.tsx
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import Typography from "../atoms/Typography";
import ButtonLink from "../atoms/ButtonLink";

interface TechInfoCardProps {
  title: string;
  description: string[];
  image?: string;
  onViewMore?: () => void;
  showHeading: boolean;
}

export const TechInfoCard: React.FC<TechInfoCardProps> = ({
  title,
  description,
  image,
  showHeading,
}) => {
  return (
    <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Image */}
      <CardHeader className="p-2 bg-gray-100 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={160}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-[160px] flex items-center justify-center bg-gray-200 text-gray-500">
            <Typography variant="bodySmall">No Image</Typography>
          </div>
        )}
      </CardHeader>

      {/* Content */}
      <CardContent className="p-2 flex flex-col flex-1">
        <Typography variant="contentTitle">{title}</Typography>
        {!showHeading && (
          <Typography variant="badgeStyle" className="mt-2">
            Technology Details:
          </Typography>
        )}

        <ul className="list-disc list-outside">
          {description.map((line, idx) => (
            <Typography variant="labelSmall">
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 flex justify-end mt-auto">
        <ButtonLink label="VIEW MORE" />
      </CardFooter>
    </Card>
  );
};
