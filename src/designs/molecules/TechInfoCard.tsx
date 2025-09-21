"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import Typography from "../atoms/Typography";

interface TechInfoCardProps {
  title: string;
  description: string[];
  image?: string;
  onViewMore?: () => void;
  showHeading: boolean;
  showTechnologyDetails?: boolean;
}

export const TechInfoCard: React.FC<TechInfoCardProps> = ({
  title,
  description,
  image,
  onViewMore,
  showHeading,
  showTechnologyDetails = false,
}) => {
  return (
    <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition overflow-hidden">
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
        <button onClick={onViewMore} className="text-green-700 hover:text-green-800 font-semibold">
          VIEW MORE →
        </button>
      </CardFooter>
    </Card>
  );
};
