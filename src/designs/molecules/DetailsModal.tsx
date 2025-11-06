"use client";

import React from "react";
import Image from "next/image";
import Typography from "../atoms/Typography";
import { ApiTechnology } from "@/types"; // Make sure this is imported

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: ApiTechnology | null; // This should be ApiTechnology
  pdfUrl?: string;
  pdfTitle?: string;
  mode?: "details" | "pdf";
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

  // PDF viewing mode
  if (mode === "pdf" && pdfUrl) {
    // ... (no changes in this block)
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

  // Details mode
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
        <p className="text-gray-700 text-sm mb-4 whitespace-pre-line">{item.details}</p>

        {/* All Other API Data */}
        <Typography variant="bodyLarge" className="mb-3 border-t pt-3">
          Key Information
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-800">
          {item.inventor && (
            <p>
              <strong>Inventor:</strong> {item.inventor}
            </p>
          )}
          {item.collaborators && (
            <p>
              <strong>Collaborators:</strong> {item.collaborators}
            </p>
          )}
          {item.yearOfDevelopment && (
            <p>
              <strong>Year of Development:</strong> {item.yearOfDevelopment}
            </p>
          )}
          {item.yearOfRelease && (
            <p>
              <strong>Year of Release:</strong> {item.yearOfRelease}
            </p>
          )}
          {item.yearOfCommercialization && (
            <p>
              <strong>Commercialization:</strong> {item.yearOfCommercialization}
            </p>
          )}
          {item.royalty && (
            <p>
              <strong>Royalty:</strong> {item.royalty}
            </p>
          )}
          {item.licenseFee && (
            <p>
              <strong>License Fee:</strong> {item.licenseFee}
            </p>
          )}
          {item.natureOfLicense && (
            <p>
              <strong>Nature of License:</strong> {item.natureOfLicense}
            </p>
          )}
          {item.licenseDuration && (
            <p>
              <strong>License Duration:</strong> {item.licenseDuration} years
            </p>
          )}
          {item.icNumber && (
            <p>
              <strong>IP Protection:</strong> {item.icNumber}
            </p>
          )}
          {item.ppvfraRegistration && (
            <p>
              <strong>PPVFRA Registration:</strong> {item.ppvfraRegistration}
            </p>
          )}

          {item.targetCustomers && (
            <p className="md:col-span-2">
              <strong>Target Customers:</strong>{" "}
              {Array.isArray(item.targetCustomers)
                ? item.targetCustomers
                    .map((customer: string) =>
                      customer
                        .split(" ")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                        .join(" ")
                    )
                    .join(", ")
                : (item.targetCustomers as string)
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(" ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
