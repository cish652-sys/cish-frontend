// src/designs/molecules/DetailsModal.tsx
"use client";

import React from "react";
import Image from "next/image";
import Typography from "../atoms/Typography";
import { TechnologyCardItem } from "@/types"; // Make sure this type is correct

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: TechnologyCardItem | null;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) {
    return null;
  }

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 m-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
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
