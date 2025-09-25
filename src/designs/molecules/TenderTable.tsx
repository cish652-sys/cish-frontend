"use client";
import React from "react";
import { Tender } from "../atoms/TableRow";

interface TenderTableProps {
  tenders: Tender[];
  tableType?: "tender" | "job" | "announcement";
}

// Animated NEW Badge Component for table items
// Animated NEW Badge Component for table items with slow blink
const AnimatedNewBadge: React.FC = () => {
  return (
    <span className="relative inline-flex items-center">
      <span
        className="inline-flex items-center px-2 py-1 rounded text-xs font-bold text-white bg-gradient-to-r from-green-500 to-green-500 shadow-sm"
        style={{ animation: "pulse 5s ease-in-out infinite" }}
      >
        NEW
      </span>
      <span className="absolute inset-0 rounded bg-gradient-to-r from-green-500 to-green-500 opacity-40 animate-ping"></span>
    </span>
  );
};

export const TenderTable: React.FC<TenderTableProps> = ({ tenders, tableType = "tender" }) => {
  // Function to generate and download dummy PDF
  const downloadApplicationForm = () => {
    const pdfContent = `
APPLICATION FORM
================

Name: _________________________

Father's Name: _________________

Date of Birth: _________________

Educational Qualification: _____

Experience: ____________________

Address: _______________________
           _______________________

Phone: ________________________

Email: ________________________


Signature: _____________________

Date: __________________________
    `;

    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "application-form.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Function to render title with optional link
  const renderTitle = (tender: Tender) => {
    if (tender.link) {
      return (
        <a
          href={tender.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 no-underline hover:underline transition-colors cursor-pointer"
        >
          {tender.title}
        </a>
      );
    }
    return <span className="hover:underline cursor-pointer">{tender.title}</span>;
  };

  // Function to render result with optional link
  const renderResult = (tender: Tender) => {
    if (tender.result) {
      if (tender.link) {
        return (
          <a
            href={tender.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 no-underline hover:underline cursor-pointer"
          >
            {tender.result}
          </a>
        );
      }
      return <span className="text-green-600 hover:underline cursor-pointer">{tender.result}</span>;
    }
    return null;
  };

  if (tableType === "job") {
    return (
      <div className="overflow-y-auto border shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-3 py-2 text-left">Sr. No</th>
              <th className="px-3 py-2 text-left">Title</th>
              <th className="px-3 py-2 text-left">Form</th>
              <th className="px-3 py-2 text-left">Post Date</th>
              <th className="px-3 py-2 text-left">Last Date</th>
              <th className="px-3 py-2 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            {tenders.map((tender, index) => (
              <tr key={tender.id} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-3">
                    {renderTitle(tender)}
                    {tender.isNew && <AnimatedNewBadge />}
                  </div>
                </td>
                <td className="px-3 py-2">
                  {tender.form && (
                    <>
                      {tender.link ? (
                        <a
                          href={tender.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-800 text-white text-xs hover:bg-green-900 cursor-pointer px-2 py-1 rounded inline-block no-underline"
                        >
                          {tender.form}
                        </a>
                      ) : (
                        <button
                          onClick={downloadApplicationForm}
                          className="bg-green-800 text-white text-xs hover:bg-green-900 cursor-pointer px-2 py-1 rounded"
                        >
                          {tender.form}
                        </button>
                      )}
                    </>
                  )}
                </td>
                <td className="px-3 py-2">{tender.postDate}</td>
                <td className="px-3 py-2">{tender.lastDate}</td>
                <td className="px-3 py-2">{renderResult(tender)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-y-auto border shadow-sm">
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
            <tr key={t.id} className="border-b hover:bg-gray-50">
              <td className="px-3 py-2">{t.id}</td>
              <td className="px-3 py-2">
                <div className="flex items-center gap-6">
                  {renderTitle(t)}
                  {t.isNew && <AnimatedNewBadge />}
                </div>
              </td>
              <td className="px-3 py-2">{t.lastDate}</td>
              <td className="px-3 py-2">
                <span className="text-gray-400">→</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
