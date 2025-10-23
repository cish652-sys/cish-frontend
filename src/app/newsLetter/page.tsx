"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Column, DataTable, TableRow } from "@/designs/molecules/DataTable";

export default function NewsLetter() {
  // Define your columns
  const columns: Column[] = [
    { key: "title", label: "TITLE", align: "left", width: "40%" },
    { key: "publishedDate", label: "PUBLISHED DATE", align: "center", width: "25%" },
    { key: "fileSize", label: "TYPE/SIZE", align: "center", width: "20%" },
  ];

  // Define your data
  const data: TableRow[] = [
    {
      title: "vision 2050",
      publishedDate: "04-03-2025",
      fileSize: "1.19 MB",
      fileUrl: "/path/to/vision2050.pdf", // Add any additional data you need
    },
    // Add more rows as needed
  ];

  // Handle view action
  const handleView = (row: TableRow, index: number) => {
    console.log("View clicked for:", row);
    // Open PDF in new tab or implement your view logic
    if (row.fileUrl) {
      window.open(row.fileUrl as string, "_blank");
    }
  };

  // Handle download action
  const handleDownload = (row: TableRow, index: number) => {
    console.log("Download clicked for:", row);
    // Implement download logic
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
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Vision 2050" }]}
        iconProps={true}
        title="VISION 2050"
        description={[""]}
      />

      {/* Vision 2050 Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
              The Central Institute For Subtropical Horticulture (CISH), Lucknow, Under ICAR, Is
              Dedicated To Research And Innovation In Subtropical Fruits Like Mango, Guava, And
              Litchi. It Works Towards Sustainable Farming, Technology Transfer, And Farmer
              Empowerment.
            </p>
          </div>

          <DataTable
            title="VISION 2050"
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
