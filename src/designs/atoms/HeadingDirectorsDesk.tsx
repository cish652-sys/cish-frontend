"use client";
import React from "react";
import { Blocks } from "lucide-react";

export interface HeadingAtomProps {
  children: React.ReactNode;
  className?: string;
}

const HeadingAtom: React.FC<HeadingAtomProps> = ({ children, className = "" }) => {
  return (
    <h2
      className={`flex items-center gap-2 text-green-700 font-semibold text-lg md:text-xl ${className}`}
    >
      <Blocks className="w-5 h-5" />
      {children}
    </h2>
  );
};

export default HeadingAtom;
