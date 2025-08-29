import React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`w-8 h-8 ${className}`} />;
};

export default Icon;
