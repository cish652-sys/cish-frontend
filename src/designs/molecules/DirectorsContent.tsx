"use client";
import React from "react";
import TextAtom from "../atoms/TextDirectorsDesk";
import LinkAtom from "../atoms/LinkDirectorsDesk";

export interface DirectorContentProps {
  content: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

const DirectorContent: React.FC<DirectorContentProps> = ({
  content,
  linkText = "SEE MORE",
  linkHref = "#",
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <TextAtom className={`flex flex-col gap-2 ${className}`}>
        {content}
        {linkText && <LinkAtom href={linkHref}>{linkText}</LinkAtom>}
      </TextAtom>
    </div>
  );
};

export default DirectorContent;
