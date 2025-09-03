import React from "react";
import { Logo } from "../Logo";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ src, alt , width=20, height=20}) => {
  return <Logo src={src} alt={alt} width={width} height={height} />;
};

export default Icon;
