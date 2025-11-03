"use client";
import React from "react";
import Image from "next/image";

import { TechnologyCardItem } from "@/types";

type TechCardProps = TechnologyCardItem & {
  onViewMore?: () => void;
};

const TechCard: React.FC<TechCardProps> = ({ id, title, image, description, href, onViewMore }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white shadow-md ">
      {image && (
        <div className="relative w-full md:w-64 h-48 flex-shrink-0">
          <Image src={image} alt={title} layout="fill" className="object-cover " />
        </div>
      )}

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="mb-2">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{description[0]}</p>
        </div>

        {onViewMore && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onViewMore();
            }}
            className="text-green-700 flex align-left hover:text-green-800 font-semibold cursor-pointer"
          >
            VIEW MORE →
          </button>
        )}
      </div>
    </div>
  );
};

export default TechCard;
