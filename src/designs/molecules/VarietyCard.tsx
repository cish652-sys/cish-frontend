"use client";

import Image from "next/image";
import Typography from "../atoms/Typography";

interface VarietyCardProps {
  src: string;
  title: string;
}

export const VarietyCard = ({ src, title }: VarietyCardProps) => {
  return (
    <div className="shadow-md hover:shadow-lg transition overflow-hidden">
      <Image src={src} alt={title} width={250} height={200} className="w-full h-40 object-cover" />

      <div className="bg-[ #FFFFFF] p-2 text-center">
        <Typography variant="bodySmall">{title}</Typography>
      </div>
    </div>
  );
};
