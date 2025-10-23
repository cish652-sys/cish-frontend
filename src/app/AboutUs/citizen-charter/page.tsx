// "use client";

// import React from "react";
// import { Header } from "@/designs/organisms/Header";
// import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
// import { Logo } from "@/designs/atoms/Logo";
// import { SectionHeader } from "@/designs/organisms/SectionHeader";
// import { Column, DataTable, TableRow } from "@/designs/molecules/DataTable";
// import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// export default function CitizenCharter() {
//   // Define your columns
//   const columns: Column[] = [
//     { key: "title", label: "TITLE", align: "left", width: "40%" },
//     { key: "publishedDate", label: "PUBLISHED DATE", align: "center", width: "25%" },
//     { key: "fileSize", label: "TYPE/SIZE", align: "center", width: "20%" },
//   ];

//   // Define your data
//   const data: TableRow[] = [
//     {
//       title: "citizen charter",
//       publishedDate: "04-03-2025",
//       fileSize: "1.19 MB",
//       fileUrl: "/files/citzeneng.pdf", // Add any additional data you need
//     },
//     // Add more rows as needed
//   ];

//   // Handle view action
//   const handleView = (row: TableRow, index: number) => {
//     console.log("View clicked for:", row);
//     // Open PDF in new tab or implement your view logic
//     if (row.fileUrl) {
//       window.open(row.fileUrl as string, "_blank");
//     }
//   };

//   // Handle download action
//   const handleDownload = (row: TableRow, index: number) => {
//     console.log("Download clicked for:", row);
//     // Implement download logic
//     if (row.fileUrl) {
//       const link = document.createElement("a");
//       link.href = row.fileUrl as string;
//       link.download = row.title as string;
//       link.click();
//     }
//   };

//   return (
//     <main>
//       <Header />
//       <ResponsiveNavbar />
//       <section className="relative w-full">
//         <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
//       </section>
//       <SectionHeader
//         breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Vision 2050" }]}
//         iconProps={true}
//         title="Citizen Charter"
//         description={[""]}
//       />

//       {/* Vision 2050 Content Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <DataTable
//             title="Citizen Charter"
//             columns={columns}
//             data={data}
//             onView={handleView}
//             onDownload={handleDownload}
//             showActions={true}
//             viewLabel="VIEW"
//             downloadLabel="DOWNLOAD"
//           />
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

"use client";

import React, { useState } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Column, DataTable, TableRow } from "@/designs/molecules/DataTable";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

export default function CitizenCharter() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Columns and data as before
  const columns: Column[] = [
    { key: "title", label: "TITLE", align: "left", width: "40%" },
    { key: "publishedDate", label: "PUBLISHED DATE", align: "center", width: "25%" },
    { key: "fileSize", label: "TYPE/SIZE", align: "center", width: "20%" },
  ];

  const data: TableRow[] = [
    {
      title: "Citizen Charter",
      publishedDate: "04-03-2025",
      fileSize: "1.19 MB",
      fileUrl: "/files/citizen-charter.pdf",
    },
  ];

  // Open modal with PDF
  const handleView = (row: TableRow) => {
    if (row.fileUrl) {
      setSelectedPdf(row.fileUrl as string);
      setModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPdf(null);
  };

  // Download logic (unchanged)
  const handleDownload = (row: TableRow) => {
    if (row.fileUrl) {
      const link = document.createElement("a");
      link.href = row.fileUrl as string;
      link.download = (row.title as string) + ".pdf";
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
        title="Citizen Charter"
        description={[""]}
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <DataTable
            title="Citizen Charter"
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

      {/* PDF Modal */}
      {modalOpen && selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-4/5 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
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
