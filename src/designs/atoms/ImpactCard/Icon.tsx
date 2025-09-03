import React from "react";
import { Logo } from "../Logo";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <Logo src={src} alt={alt} width={20} height={20} />;
};

export default Icon;
