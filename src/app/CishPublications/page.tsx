"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import Typography from "@/designs/atoms/Typography";
import { DataTable, Column, TableRow } from "@/designs/molecules/DataTable";

export default function CishPublications() {
  const columns: Column[] = [
    { key: "sno", label: "क्रम", align: "left", width: "10%" },
    { key: "name", label: "प्रकाशन का नाम", align: "left", width: "60%" },
    { key: "price", label: "मूल्य (रु)", align: "center", width: "15%" },
    { key: "postalPrice", label: "डाक से भेजने पर मूल्य (रु)", align: "center", width: "15%" },
  ];

  const data: TableRow[] = [
    { sno: 1, name: "आम के बागवानी", price: "55", postalPrice: "95" },
    { sno: 2, name: "आम में एकीकृत कीट प्रबंधन", price: "35", postalPrice: "75" },
    { sno: 3, name: "आम में समेकित रोग प्रबंधन", price: "40", postalPrice: "80" },
    { sno: 4, name: "आम पील उपचार", price: "10", postalPrice: "50" },
    { sno: 5, name: "आम की छंटाई उपचार प्रबंधन", price: "10", postalPrice: "50" },
    { sno: 6, name: "अमरूद", price: "65", postalPrice: "105" },
    { sno: 7, name: "अमरूद उन्नत", price: "40", postalPrice: "80" },
    { sno: 8, name: "अमरूद में चेचक नियंत्रण", price: "40", postalPrice: "80" },
    { sno: 9, name: "अमरूद की उत्पादन एवं मंडी बागवानी", price: "60", postalPrice: "100" },
    { sno: 10, name: "पपीता उत्पादन", price: "66", postalPrice: "106" },
    { sno: 11, name: "जैविक बागवानी", price: "40", postalPrice: "80" },
    { sno: 12, name: "High Density & Meadow Orcharding of Guava", price: "60", postalPrice: "100" },
    { sno: 13, name: "The Mango", price: "30", postalPrice: "70" },
    { sno: 14, name: "Mango Products", price: "20", postalPrice: "60" },
    { sno: 15, name: "Mango integrated pest management", price: "10", postalPrice: "50" },
    {
      sno: 16,
      name: "Integrated disease management practices in mango",
      price: "40",
      postalPrice: "80",
    },
    { sno: 17, name: "Rejuvenation of Mango Orchards", price: "10", postalPrice: "50" },
    { sno: 18, name: "The Guava", price: "65", postalPrice: "105" },
    { sno: 19, name: "Guava Rejuvenation", price: "40", postalPrice: "80" },
    { sno: 20, name: "Wedge Grafting in Guava", price: "40", postalPrice: "80" },
    { sno: 21, name: "The Aonla", price: "65", postalPrice: "105" },
    { sno: 22, name: "The Papaya", price: "66", postalPrice: "106" },
    {
      sno: 23,
      name: "PropagationTechniques for mango, guava, aonla",
      price: "55",
      postalPrice: "95",
    },
    { sno: 24, name: "Sookshma Sinchai Padhati", price: "40", postalPrice: "80" },
    { sno: 25, name: "Rejuvenation of old & Senile orchards", price: "150", postalPrice: "190" },
    {
      sno: 26,
      name: "Good agricultural practices management for mango production & trade",
      price: "55",
      postalPrice: "95",
    },
    { sno: 27, name: "Postharvest Management for N E Region", price: "50", postalPrice: "90" },
    { sno: 28, name: "Aonla Rejuvenation", price: "40", postalPrice: "80" },
    { sno: 29, name: "CISH technologies for commercialization", price: "65", postalPrice: "105" },
    { sno: 30, name: "The Jamun", price: "95", postalPrice: "135" },
  ];

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      {/* 📌 Publication List Section */}

      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "CISH Publications" }]}
        iconProps={true}
        title="CISH Publications"
        description={[""]}
      />
      <div className="container max-w-4xl mx-auto flex flex-col gap-4">
        <Typography variant="sectionHeading" className="text-green-800 font-bold">
          List of Institute’s Publications
        </Typography>

        <div className="border border-gray-300 shadow-lg bg-white p-6 md:p-8">
          <ol className="list-decimal list-outside pl-5 space-y-2">
            {[
              "High Density & Meadow Orcharding of Guava",
              "The Mango",
              "Mango Products",
              "Mango Integrated Pest Management",
              "Rejuvenation of Mango Orchards",
              "The Guava",
              "The Aonla",
              "The Papaya",
              "Propagation Techniques for Mango, Guava, Aonla",
              "Good Agricultural Practices Management for Mango Production & Trade",
              "Postharvest Management for N-E region",
              "Aonla Rejuvenation",
              "CISH Technologies for Commercialization",
              "The Jamun",
              "Rejuvenation of Old & Senile Orchards",
              "Integrated Disease Management Practices in Mango",
            ].map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-5xl mx-auto flex flex-col gap-4">
          <Typography variant="sectionHeading" className="text-green-800 font-bold">
            List of Institute’s Publications
          </Typography>

          <div className="border border-gray-300 shadow-lg bg-white p-6 md:p-8">
            <DataTable columns={columns} data={data} showActions={false} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
