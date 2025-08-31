"use client";
import React from "react";
import director from "../public/images/director's desk icon.svg" 
import Icon from "./ImpactCard/Icon";

export interface HeadingAtomProps {
  children: React.ReactNode;
  className?: string;
}

const HeadingAtom: React.FC<HeadingAtomProps> = ({ children, className = "" }) => {
  return (
    <h2
      className={`flex items-center gap-2 text-green-700 font-semibold text-lg md:text-xl ${className}`}
    >
      <Icon src={director} alt="block" className="w-6 h-6" />
      {children}
    </h2>
  );
};

export default HeadingAtom;
