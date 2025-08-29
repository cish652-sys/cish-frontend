"use client";
import React from "react";
import { TableRow, Tender } from "../atoms/TableRow";

interface TenderTableProps {
  tenders: Tender[];
}

export const TenderTable: React.FC<TenderTableProps> = ({ tenders }) => (
  <div className="overflow-y-auto max-h-64 border rounded-lg shadow-sm">
    <table className="w-full text-sm">
      <thead className="bg-gray-100 sticky top-0">
        <tr>
          <th className="px-3 py-2 text-left">Sr. No</th>
          <th className="px-3 py-2 text-left">Title</th>
          <th className="px-3 py-2 text-left">Last Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tenders.map((t) => (
          <TableRow key={t.id} tender={t} />
        ))}
      </tbody>
    </table>
  </div>
);
