"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ViksitKrishiCardProps {
  id: number;
  title: string;
  description: string;
  images?: string[];
  isDetailView?: boolean;
  basePath?: string;
  hideImages?: boolean;
}

const ViksitKrishiCard: React.FC<ViksitKrishiCardProps> = ({
  id,
  title,
  description,
  images,
  isDetailView = false,
  basePath = "VKSA",
  hideImages = false,
}) => {
  // Shorten description for non-detail views
  const shortDescription =
    description.length > 150 && !isDetailView ? `${description.substring(0, 150)}...` : description;

  return (
    <div className="w-full max-w-6xl p-6 mb-8 bg-white border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>

      <p className="text-gray-700 text-base leading-relaxed">
        {shortDescription}
        {!isDetailView && (
          <Link
            href={`/${basePath}/${id}`}
            className="text-green-700 font-semibold cursor-pointer hover:underline ml-1"
          >
            View More →
          </Link>
        )}
      </p>

      {/* Image Grid - Only show if hideImages is false */}
      {!hideImages && images && images.length > 0 && (
        <div className="grid pt-8 grid-cols-2 sm:grid-cols-3 mb-4 md:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-32 w-full overflow-hidden rounded-md">
              <Image
                src={src}
                alt={`${title} image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="bg-gray-200"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViksitKrishiCard;