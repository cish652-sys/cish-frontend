"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export interface Tender {
  id: number;
  title: string;
  lastDate: string;
  isNew: boolean;
  form?: string;
  postDate?: string;
  result?: string;
  link?: string;
}

export const TableRow: React.FC<{ tender: Tender }> = ({ tender }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="px-3 py-2">{tender.id}</td>
    <td className="px-3 py-2 font-medium text-gray-800 flex items-center">{tender.title}</td>
    <td className="px-3 py-2 whitespace-nowrap">{tender.lastDate}</td>
    <td className="px-3 py-2 text-right">
      <ArrowRight className="w-4 h-4 text-green-700" />
    </td>
  </tr>
);
