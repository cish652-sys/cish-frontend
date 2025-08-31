import Image from "next/image";
import React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={`w-8 h-8 ${className}`} height={32} width={32} />;
};

export default Icon;
