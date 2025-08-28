"use client";
import Image from "next/image";
import React from "react";
interface LogoProps {
  src: string ;
  alt: string;
  width?: number;
  height?: number;
}
export const Logo: React.FC<LogoProps> = ({ src, alt, width = 60, height = 60 }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
