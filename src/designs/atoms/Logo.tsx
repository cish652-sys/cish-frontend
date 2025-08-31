"use client";
import Image from "next/image";
import React from "react";

interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  responsive?: boolean; // new prop
}

export const Logo: React.FC<LogoProps> = ({ src, alt, width = 60, height = 60, responsive }) => {
  if (responsive) {
    return (
      <div className="relative w-full h-[200px] md:h-[400px] lg:h-[600px]">
        <Image src={src} alt={alt} fill className="object-cover" priority />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
