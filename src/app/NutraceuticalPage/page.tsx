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
import { DetailsModal } from "@/designs/molecules/DetailsModal";
import { Logo } from "@/designs/atoms/Logo";

function NutraceuticalPage() {
  const [topVariety, setTopVariety] = useState<TechnologyCardItem[]>(varietiesItem);
  const [otherVarieties, setOtherVarieties] = useState<TechnologyCardItem[]>(
    technologiesVarietiesItems
  );

  const [allNutraData, setAllNutraData] = useState<ApiTechnology[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ApiTechnology | null>(null);

  useEffect(() => {
    const fetchVarieties = async () => {
      try {
        const apiUrl = "https://api.cish.org.in/api/innovation?key=varities";
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }

        const data: ApiTechnology[] = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const nutraOnly = data.filter((item) => item.isNutraceutical === true);

          setAllNutraData(nutraOnly);

          const topItemData = nutraOnly.slice(0, 3);
          const otherItemsData = nutraOnly.slice(3);

          if (topItemData.length > 0) {
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
          } else {
            setTopVariety([]);
          }

          if (otherItemsData.length > 0) {
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
          } else {
            setOtherVarieties([]); // Clear if none
          }
        }
      } catch (error) {
        console.error("Failed to fetch varieties:", error);
      }
    };

    fetchVarieties();
  }, []);

  const handleViewTopItem = (item: TechnologyCardItem) => {
    const fullItem = allNutraData.find((v) => v.id === item.id);
    if (fullItem) {
      setSelectedItem(fullItem);
      setIsModalOpen(true);
    }
  };

  const handleViewOtherItem = (id: number) => {
    const fullItem = allNutraData.find((v) => v.id === id);
    if (fullItem) {
      setSelectedItem(fullItem);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
     <section className="relative w-full">
                   <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
                 </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "NUTRACEUTICAL RICH" }]}
        iconProps={false}
        title="Nutraceutical Rich"
        description={[""]}
      />
      <div className="py-0 bg-[#FBFAF0]">
        <TrendingTechnologies
          technologies={topVariety}
          showVerieties={false}
          onViewMore={handleViewTopItem}
        />
        <OtherTechnologies
          technologiesItems={otherVarieties}
          showHeading={false}
          onViewMore={handleViewOtherItem}
        />
      </div>
      <Footer />

      <DetailsModal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />
    </div>
  );
}

export default NutraceuticalPage;
