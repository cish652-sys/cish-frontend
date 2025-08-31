"use client";
import React from "react";
import Image from "next/image";

export interface ImageAtomProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageAtom: React.FC<ImageAtomProps> = ({
  src,
  alt = "image",
  width = 350,
  height = 350,
  className = "",
}) => (
  <div className={`overflow-hidden ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-cover"
      priority={false}
    />
  </div>
);

export default ImageAtom;
