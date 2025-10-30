"use client";

import React, { useState } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Column, DataTable, TableRow } from "@/designs/molecules/DataTable";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

export default function AgroAdvisoryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // ✅ Define table columns
  const columns: Column[] = [
    { key: "title", label: "TITLE", align: "left", width: "40%" },
    { key: "fileSize", label: "TYPE", align: "center", width: "20%" },
  ];

  // ✅ Table data
  const data: TableRow[] = [
    {
      title: "Latest Agro Advisory",
      publishedDate: "04-03-2025",
      fileSize: "",
      fileUrl: "https://minio.cish.org.in/cish-bucket/newAdv.pdf",
    },
  ];

  // ✅ View PDF in modal
  const handleView = (row: TableRow) => {
    if (row.fileUrl) {
      setSelectedPdf(row.fileUrl as string);
      setModalOpen(true);
    }
  };

  // ✅ Download PDF
  const handleDownload = (row: TableRow) => {
    if (row.fileUrl) {
      const link = document.createElement("a");
      link.href = row.fileUrl as string;
      link.download = (row.title as string) + ".pdf";
      link.click();
    }
  };

  // ✅ Close Modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPdf(null);
  };

  return (
    <main>
      <Header />
      <ResponsiveNavbar />

      {/* Banner */}
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>

      {/* Breadcrumb + Title */}
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Agro Advisory" }]}
        iconProps={true}
        title="Agro Advisory"
        description={[""]}
      />

      {/* Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <DataTable
            title="Agro Advisory - Latest Updates"
            columns={columns}
            data={data}
            onView={handleView}
            onDownload={handleDownload}
            showActions={true}
            viewLabel="VIEW"
            downloadLabel="DOWNLOAD"
          />
        </div>
      </section>

      <Footer />

      {/* ✅ PDF Modal */}
      {modalOpen && selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-4/5 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <iframe src={selectedPdf} className="w-full h-full rounded-lg" title="PDF Viewer" />
          </div>
        </div>
      )}
    </main>
  );
}
