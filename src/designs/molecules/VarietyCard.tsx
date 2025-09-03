"use client";

import Image from "next/image";
import Typography from "../atoms/Typography";

interface VarietyCardProps {
  src: string;
  title: string;
}

export const VarietyCard = ({ src, title }: VarietyCardProps) => {
  return (
    <div className="shadow-md hover:shadow-lg  overflow-hidden w-40 sm:w-48 md:w-56 lg:w-64 flex-shrink-0">
      <Image
        src={src}
        alt={title}
        width={250}
        height={200}
        className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover"
      />

      <div className="bg-white p-2 sm:p-3 text-center">
        <Typography variant="bodySmall" className="text-xs sm:text-sm leading-tight">
          {title}
        </Typography>
      </div>
    </div>
  );
};
