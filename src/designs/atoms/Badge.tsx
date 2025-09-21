import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  position?: "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const Badge: React.FC<BadgeProps> = ({ children, className, position = "bottom" }) => {
  const baseClasses =
    "absolute z-10 px-4 py-2 text-center text-white font-semibold bg-green-700 flex items-center justify-center";

  const customRounding = "rounded-tl-xl rounded-br-xl";

  const positionClasses = {
    bottom: `bottom-4 left-1/2 -translate-x-1/2 w-auto ${customRounding}`,
    "top-left": `top-4 left-4 ${customRounding}`,
    "top-right": `top-4 right-4 ${customRounding}`,
    "bottom-left": `bottom-4 left-4 ${customRounding}`,
    "bottom-right": `bottom-4 right-4 ${customRounding}`,
  };

  return <div className={cn(baseClasses, positionClasses[position], className)}>{children}</div>;
};
