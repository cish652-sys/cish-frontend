import React from "react";
import { Logo } from "../Logo";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <Logo src={src} alt={alt} width={10} height={10} />;
};

export default Icon;
