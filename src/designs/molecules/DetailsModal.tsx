// src/designs/molecules/DetailsModal.tsx
"use client";

import React from "react";
import Image from "next/image";
import Typography from "../atoms/Typography";
import { TechnologyCardItem } from "@/types";

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: TechnologyCardItem | null;
  // ✅ New props for PDF viewing
  pdfUrl?: string;
  pdfTitle?: string;
  mode?: "details" | "pdf"; // ✅ Mode to determine what to show
}

export const DetailsModal: React.FC<DetailsModalProps> = ({
  isOpen,
  onClose,
  item,
  pdfUrl,
  pdfTitle,
  mode = "details",
}) => {
  if (!isOpen) {
    return null;
  }

  // ✅ PDF viewing mode
  if (mode === "pdf" && pdfUrl) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-6xl bg-white rounded-lg shadow-xl m-4 h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Typography variant="sectionHeading">{pdfTitle || "Document Viewer"}</Typography>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-hidden">
            <iframe src={pdfUrl} className="w-full h-full" title={pdfTitle || "PDF Document"} />
          </div>
        </div>
      </div>
    );
  }

  // ✅ Original details mode (existing functionality)
  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 m-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Image */}
        {item.image && (
          <div className="w-full h-64 relative mb-4">
            <Image src={item.image} alt={item.title} layout="fill" className="object-contain" />
          </div>
        )}

        {/* Title */}
        <Typography variant="sectionHeading" className="mb-4">
          {item.title}
        </Typography>

        {/* Description */}
        <Typography variant="bodyLarge" className="mb-2">
          Details:
        </Typography>
        <ul className="list-disc list-outside pl-5 space-y-1">
          {item.description.map((line, idx) => (
            <li key={idx}>
              <p className="text-gray-700 text-sm">{line}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
