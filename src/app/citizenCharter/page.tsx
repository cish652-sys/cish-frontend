"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Column, DataTable, TableRow } from "@/designs/molecules/DataTable";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

export default function CitizenCharter() {
  const columns: Column[] = [
    { key: "title", label: "TITLE", align: "left", width: "40%" },
    { key: "fileSize", label: "TYPE/SIZE", align: "center", width: "20%" },
  ];

  const data: TableRow[] = [
    {
      title: "citizen charter",
      publishedDate: "04-03-2025",
      fileSize: "1.19 MB",
      fileUrl: "/path/to/citizen-charter.pdf",
    },
  ];

  const handleView = (row: TableRow) => {
    console.log("View clicked for:", row);
    if (row.fileUrl) {
      window.open(row.fileUrl as string, "_blank");
    }
  };

  const handleDownload = (row: TableRow) => {
    console.log("Download clicked for:", row);
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
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Citizen Charter" }]}
        iconProps={true}
        title="CITIZEN CHARTER"
        description={[""]}
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <DataTable
            title="CITIZEN CHARTER"
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
