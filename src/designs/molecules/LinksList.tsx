"use client";
import React from "react";

interface LinkItem {
  title: string;
  postDate: string;
  lastDate: string;
}

export const LinksList: React.FC<{ links: LinkItem[] }> = ({ links }) => (
  <div className="overflow-y-auto max-h-[275px] border  shadow-sm bg-white">
    {links.map((l, i) => (
      <div key={i} className="px-4 py-3 border-b last:border-b-0">
        <p className="font-bold text-gray-800 text-sm">{l.title}</p>
        <div className="text-xs text-gray-600 flex gap-6 mt-1">
          <span>Post Date- {l.postDate}</span>
          <span>Last Date- {l.lastDate}</span>
        </div>
      </div>
    ))}
  </div>
);
