// src/app/varieties/page.tsx (or wherever VarietiesPage.tsx is)
"use client";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ApiTechnology, TechnologyCardItem } from "@/types";
import { varietiesItem, technologiesVarietiesItems } from "@/lib/utils";
import { DetailsModal } from "@/designs/molecules/DetailsModal"; // Import the modal

function VarietiesPage() {
  const [topVariety, setTopVariety] = useState<TechnologyCardItem[]>(varietiesItem);
  const [otherVarieties, setOtherVarieties] = useState<TechnologyCardItem[]>(
    technologiesVarietiesItems
  );

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TechnologyCardItem | null>(null);

  useEffect(() => {
    // ... your existing fetchVarieties logic ...
    // (No changes needed inside useEffect)
    const fetchVarieties = async () => {
      try {
        const apiUrl = "https://api.cish.org.in/api/innovation?key=varities";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const data: ApiTechnology[] = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const topItemData = data.slice(0, 1);
          const mappedTopVariety = topItemData.map(
            (item): TechnologyCardItem => ({
              id: item.id,
              title: item.title,
              description: [item.details],
              image: item.image,
              href: `/varieties/${item.id}`,
            })
          );
          setTopVariety(mappedTopVariety);
          const otherItemsData = data.slice(1);
          const mappedOtherVarieties = otherItemsData.map(
            (item): TechnologyCardItem => ({
              id: item.id,
              title: item.title,
              image: item.image,
              description: [item.details],
              href: `/varieties/${item.id}`,
            })
          );
          setOtherVarieties(mappedOtherVarieties);
        }
      } catch (error) {
        console.error("Failed to fetch varieties:", error);
      }
    };
    fetchVarieties();
  }, []);

  // Handler for the "Trending" item (passes the full item)
  const handleViewTopItem = (item: TechnologyCardItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Handler for the "Other" items (finds item by ID)
  const handleViewOtherItem = (id: number) => {
    // Find from the correct list
    const item = [...topVariety, ...otherVarieties].find((v) => v.id === id);
    if (item) {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      {/* ... section, SectionHeader ... */}
      <section className="relative w-full">
        <Image
          src={"/icons/bannerblank.svg"}
          alt="Website Banner"
          height={452}
          width={2000}
          className="w-full object-cover"
          priority
        />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Varieties" }]}
        iconProps={false}
        title="VARIETIES FOR COMMERCIALIZATION"
        description={[""]}
      />

      <div className="py-0 bg-[#FBFAF0]">
        <TrendingTechnologies
          technologies={topVariety}
          showVerieties={false}
          onViewMore={handleViewTopItem} // Pass the handler
        />
        <OtherTechnologies
          technologiesItems={otherVarieties}
          showHeading={false}
          onViewMore={handleViewOtherItem} // Pass the handler
        />
      </div>
      <Footer />

      {/* Render the modal */}
      <DetailsModal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />
    </div>
  );
}

export default VarietiesPage;
