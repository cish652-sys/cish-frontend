"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import Typography from "../atoms/Typography";
import { cn } from "@/lib/utils";

interface DivisionVarietyCardProps {
  title: string;
  description: string[];
  image?: string;
  href?: string;
  className?: string;
}

export const DivisionVarietyCard: React.FC<DivisionVarietyCardProps> = ({
  title,
  description,
  image,
  href,
  className,
}) => {
  const router = useRouter();

  const handleViewMore = () => {
    if (href) {
      if (href.startsWith("http")) {
        window.open(href, "_blank"); 
      } else {
        router.push(href);
      }
    }
  };

  return (
    <Card
      className={cn(
        "flex flex-col justify-between h-[600px] shadow-sm hover:shadow-md transition overflow-hidden",
        className
      )}
    >
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

        <div className="mt-2">
          <ul className="list-disc list-outside pl-5">
            {description.map((line, idx) => (
              <ul key={idx}>
                <Typography variant="paragraphSmall">{line}</Typography>
              </ul>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="p-4 flex justify-end mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleViewMore();
          }}
          className="text-green-700 hover:text-green-800 font-semibold cursor-pointer"
        >
          VIEW MORE →
        </button>
      </CardFooter>
    </Card>
  );
};