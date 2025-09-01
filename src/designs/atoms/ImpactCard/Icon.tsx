import React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`w-10 h-10 ${className}`} />;
};

export default Icon;
