"use client";
import React from "react";

export interface TextAtomProps {
  children: React.ReactNode;
  className?: string;
}

const TextAtom: React.FC<TextAtomProps> = ({ children, className = "" }) => (
  <p className={`text-gray-600 text-sm md:text-base leading-relaxed ${className}`}>
    {children}
  </p>
);

export default TextAtom;
