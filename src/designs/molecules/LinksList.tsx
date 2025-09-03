"use client";
import React from "react";

interface LinkItem {
  title: string;
  postDate: string;
  lastDate: string;
  url: string;
}

export const LinksList: React.FC<{ links: LinkItem[] }> = ({ links }) => (
  <div className="overflow-y-auto max-h-[275px] border shadow-sm bg-white">
    {links.map((l, i) => (
      <div key={i} className="px-4 py-3 border-b last:border-b-0">
        <a
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-gray-800 text-sm flex items-center hover:text-blue-600 hover:underline"
        >
          {l.title}
        </a>
      </div>
    ))}
  </div>
);
