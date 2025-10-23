"use client";

import React from "react";
import { Eye, Download, FileText } from "lucide-react";

export interface Column {
  key: string;
  label: string;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface TableRow {
  [key: string]: string | number | React.ReactNode;
}

interface DataTableProps {
  title?: string;
  description?: string;
  columns: Column[];
  data: TableRow[];
  onView?: (row: TableRow, index: number) => void;
  onDownload?: (row: TableRow, index: number) => void;
  showActions?: boolean;
  viewLabel?: string;
  downloadLabel?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  title,
  description,
  columns,
  data,
  onView,
  onDownload,
  showActions = true,
  viewLabel = "VIEW",
  downloadLabel = "DOWNLOAD",
}) => {
  return (
    <div className="w-full px-4 py-8 max-w-7xl mx-auto">
      {/* Title and Description */}
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>}
          {description && (
            <p className="text-gray-600 italic text-center max-w-4xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {/* Table with gap between header and body */}
      <div className="overflow-x-auto">
        {/* Table Header - Separate from body */}
        <table className="w-full border-collapse mb-3">
          <thead>
            <tr className="bg-[#599A5E] rounded-t-lg">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-4 text-${column.align || "left"} text-white font-semibold uppercase text-sm tracking-wider`}
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
              {showActions && (
                <th className="px-6 py-4 text-center text-white font-semibold uppercase text-sm tracking-wider">
                  ACTIONS
                </th>
              )}
            </tr>
          </thead>
        </table>

        {/* Table Body - Separate to create gap */}
        <table className="w-full border-collapse bg-white shadow-sm">
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (showActions ? 1 : 0)}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`px-6 py-4 text-${column.align || "left"} text-gray-700`}
                      style={{ width: column.width }}
                    >
                      {/* Add icon for title column if it's a document */}
                      {column.key === "title" && typeof row[column.key] === "string" ? (
                        <div className="flex items-center gap-3">
                          <FileText className="text-blue-600" size={20} />
                          <span>{row[column.key]}</span>
                        </div>
                      ) : column.key === "fileSize" && typeof row[column.key] === "string" ? (
                        <div className="flex items-center gap-2 justify-center">
                          <FileText className="text-red-600" size={18} />
                          <span className="font-medium">PDF</span>
                          <span className="ml-2">{row[column.key]}</span>
                        </div>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                  {showActions && (
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        {onView && (
                          <button
                            onClick={() => onView(row, rowIndex)}
                            className="flex items-center gap-2 bg-[#67B96D] hover:bg-[#5AA860] text-white px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium"
                          >
                            <Eye size={16} />
                            {viewLabel}
                          </button>
                        )}
                        {onDownload && (
                          <button
                            onClick={() => onDownload(row, rowIndex)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium"
                          >
                            <Download size={16} />
                            {downloadLabel}
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
