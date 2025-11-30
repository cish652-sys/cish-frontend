"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Column, DataTable, TableRow } from "@/designs/molecules/DataTable";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// --- Renamed component ---
export default function NewsLetterPage() {
  const columns: Column[] = [
    { key: "title", label: "TITLE", align: "left", width: "40%" },
    { key: "fileSize", label: "TYPE/SIZE", align: "center", width: "20%" },
  ];

  // --- Updated data from your image ---
  const data: TableRow[] = [
    {
      title: "CISH Newsletter 01 January to 30 June 2025",
      fileSize: "N/A", // You can update this size
      fileUrl: "https://cish.in/news_letter.php", // Update this path
    },
    {
      title: "CISH Newsletter 01 January to 30 June 2022",
      fileSize: "N/A", // You can update this size
      fileUrl: "/newsletters/CISH-Newsletter-Jan-June-2022.pdf", // Update this path
    },
    {
      title: "CISH Newsletter 01 July to 31 December 2021",
      fileSize: "N/A",
      fileUrl: "/newsletters/CISH-Newsletter-July-Dec-2021.pdf",
    },
    {
      title: "CISH Newsletter 01 July to 31 December 2020",
      fileSize: "N/A",
      fileUrl: "/newsletters/CISH-Newsletter-July-Dec-2020.pdf",
    },
    {
      title: "CISH Newsletter 01 January to 30 June 2020",
      fileSize: "N/A",
      fileUrl: "/newsletters/CISH-Newsletter-Jan-June-2020.pdf",
    },
    {
      title: "CISH Newsletter 01 January to 30 June 2019",
      fileSize: "N/A",
      fileUrl: "/newsletters/CISH-Newsletter-Jan-June-2019.pdf",
    },
    {
      title: "CISH Newsletter 01 July to 31 December 2018",
      fileSize: "N/A",
      fileUrl: "/newsletters/CISH-Newsletter-July-Dec-2018.pdf",
    },
    {
      title: "CISH Newsletter 01 January to 30 June 2018",
      fileSize: "N/A",
      fileUrl: "/newsletters/CISH-Newsletter-Jan-June-2018.pdf",
    },
    {
      title: "CISH Newsletter 01 January to 30 June 2017",
      fileSize: "N/A",
      fileUrl: "/newsletters/CISH-Newsletter-Jan-June-2017.pdf",
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
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "News Letter" }]}
        iconProps={true}
        title="NEWSLETTER"
        description={[""]}
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <DataTable
            title="NEWSLETTER"
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
