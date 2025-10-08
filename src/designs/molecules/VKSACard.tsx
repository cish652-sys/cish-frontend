"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Using next/image for optimization

interface ViksitKrishiCardProps {
  id: number;
  title: string;
  description: string;
  images?: string[]; // New optional prop for images
  isDetailView?: boolean;
}

const ViksitKrishiCard: React.FC<ViksitKrishiCardProps> = ({
  id,
  title,
  description,
  images,
  isDetailView = false,
}) => {
  // Show a shorter description on the main list page
  const shortDescription = description.length > 150 && !isDetailView
    ? `${description.substring(0, 150)}...`
    : description;

  return (
    <div className="w-full max-w-6xl p-6 mb-8 bg-white border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">
        {shortDescription}
        {!isDetailView && (
          <Link
            href={`/VKSA/${id}`} // This link takes the user to the detail page
            className="text-green-700 font-semibold cursor-pointer hover:underline ml-1"
          >
            View More →
          </Link>
        )}
      </p>

      {/* This section renders the images from the API */}
      {images && images.length > 0 && (
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
