"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Column, DataTable, TableRow } from "@/designs/molecules/DataTable";

export default function NewsLetter() {
  // ✅ Updated Columns
  const columns: Column[] = [
    { key: "sno", label: "S.No", align: "left", width: "40%" },
    { key: "fileSize", label: "TYPE/SIZE", align: "center", width: "20%" },
  ];

  // ✅ Updated Data (Added sno: 1)
  const data: TableRow[] = [
    {
      sno: "1",
      title: "vision 2050",
      publishedDate: "04-03-2025",
      fileSize: "1.19 MB",
      fileUrl: "/path/to/vision2050.pdf",
    },
  ];

  // View PDF
  const handleView = (row: TableRow) => {
    if (row.fileUrl) {
      window.open(row.fileUrl as string, "_blank");
    }
  };

  // Download PDF
  const handleDownload = (row: TableRow) => {
    if (row.fileUrl) {
      const link = document.createElement("a");
      link.href = row.fileUrl as string;
      link.download = row.title as string;
      link.click();
    }
  };

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "News Letter" }]}
        iconProps={true}
        title="News Letter"
        description={[""]}
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <DataTable
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
    </main>
  );
}
