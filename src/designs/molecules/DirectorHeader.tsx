"use client";
import React from "react";
import HeadingAtom from "../atoms/HeadingDirectorsDesk";

export interface DirectorHeaderProps {
  heading: string;
  className?: string;
}

const DirectorHeader: React.FC<DirectorHeaderProps> = ({ heading, className = "" }) => {
  return <HeadingAtom className={`py-8 ${className}`}>{heading}</HeadingAtom>;
};

export default DirectorHeader;
