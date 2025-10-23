"use client";

import React from "react";
import { ArrowRight, FileText } from "lucide-react";

// The same TableRow type your other components use
export interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface DataListProps {
  data: TableRow[];
  onView?: (row: TableRow, index: number) => void;
}

export const DataList: React.FC<DataListProps> = ({ data, onView }) => {
  return (
    <div className="w-full px-4 py-8 max-w-7xl mx-auto">
      {/* 1. The Header (built with flexbox, not <table>) */}
      <div className="flex bg-[#599A5E]  px-6 py-4 mb-3">
        {/* These widths match the row widths below */}
        <div className="w-[60%] text-white font-semibold uppercase text-sm tracking-wider">
          TITLE
        </div>
        <div className="w-[25%] text-center text-white font-semibold uppercase text-sm tracking-wider">
          PUBLISHED DATE
        </div>
        {/* The 15% action column has no title */}
        <div className="w-[15%]"></div>
      </div>

      {/* 2. The List Body */}
      <div className="w-full">
        {data.length === 0 ? (
          <div className="bg-white shadow-sm p-8 text-center text-gray-500">
            No data available
          </div>
        ) : (
          // Map over data and render one "card row" per item
          data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              // This is the "card row" with shadow, margin, and padding
              className="bg-white shadow-sm mb-2 overflow-hidden p-4 px-6 flex items-center hover:bg-gray-50 transition-colors"
            >
              {/* Title (w-60%) */}
              <div className="w-[60%] flex items-center gap-3">
                <FileText className="text-blue-600" size={20} />
                <span className="text-gray-700">{row.title}</span>
              </div>

              {/* Published Date (w-25%) */}
              <div className="w-[25%] text-center">
                <span className="font-mono text-gray-600">
                  {row.publishedDate}
                </span>
              </div>

              {/* Action Button (w-15%) */}
              <div className="w-[15%] flex justify-center">
                {onView && (
                  <button
                    onClick={() => onView(row, rowIndex)}
                    className="flex items-center justify-center bg-[#67B96D] hover:bg-[#5AA860] text-white p-2 r transition-colors duration-200"
                  >
                    <ArrowRight size={20} />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};