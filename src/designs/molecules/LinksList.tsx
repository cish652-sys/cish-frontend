"use client";
import React from "react";

interface LinkItem {
  title: string;
  postDate: string;
  lastDate: string;
}

export const LinksList: React.FC<{ links: LinkItem[] }> = ({ links }) => (
  <div className="overflow-y-auto max-h-[275px] border shadow-sm bg-white">
    {links.map((l, i) => (
      <div key={i} className="px-4 py-3 border-b last:border-b-0">
        <p className="font-bold text-gray-800 text-sm flex items-center">
          <span className="mr-2 text-lg">•</span> {l.title}
        </p>
      </div>
    ))}
  </div>
);
