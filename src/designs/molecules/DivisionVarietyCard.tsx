"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import Typography from "../atoms/Typography";
import { cn } from "@/lib/utils";

interface DivisionVarietyCardProps {
  title: string;
  description: string[];
  image?: string;
  href?: string;
  className?: string;
  showViewMore?: boolean;
}

export const DivisionVarietyCard: React.FC<DivisionVarietyCardProps> = ({
  title,
  description,
  image,
  href,
  className,
  showViewMore = true,
}) => {
  const router = useRouter();
  const [comingSoon, setComingSoon] = useState(false);

  const handleViewMore = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!href) return;

    // For external links
    if (href.startsWith("http")) {
      window.open(href, "_blank");
      return;
    }

    try {
      // ✅ Check if the page actually exists
      const res = await fetch(href, { method: "HEAD" });
      if (res.ok) {
        router.push(href);
      } else {
        setComingSoon(true);
        setTimeout(() => setComingSoon(false), 3000);
      }
    } catch {
      setComingSoon(true);
      setTimeout(() => setComingSoon(false), 3000);
    }
  };

  return (
    <Card
      className={cn(
        "flex flex-col justify-between h-[600px] shadow-sm hover:shadow-md transition overflow-hidden",
        className
      )}
    >
      {/* Header */}
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

      {/* Scrollable Content */}
      <CardContent className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <Typography variant="contentTitle" className="mb-2">
          {title}
        </Typography>

        <ul className="list-disc list-outside pl-4 space-y-2">
          {description.map((line, idx) => (
            <li key={idx}>
              <Typography variant="paragraphSmall">{line}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Footer */}
      {showViewMore && (
        <CardFooter className="p-4 flex flex-col items-end mt-auto">
          <button
            onClick={handleViewMore}
            className="text-green-700 hover:text-green-800 font-semibold cursor-pointer"
          >
            VIEW MORE →
          </button>

          {/* "Coming Soon" message */}
          {comingSoon && (
            <Typography
              variant="bodySmall"
              className="text-red-600 mt-2 transition-opacity duration-300"
            >
              Coming Soon...
            </Typography>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
