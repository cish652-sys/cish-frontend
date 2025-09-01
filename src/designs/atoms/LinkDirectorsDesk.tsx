"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export interface LinkAtomProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const LinkAtom: React.FC<LinkAtomProps> = ({ href = "#", children, className = "" }) => (
  <a
    href={href}
    className={`text-green-700 font-semibold inline-flex items-center gap-1 text-sm md:text-base mt-0 ${className}`}
  >
    {children}
    <ArrowRight className="w-4 h-4" />
  </a>
);

export default LinkAtom;
