"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/designs/organisms/Header";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import { Logo } from "@/designs/atoms/Logo";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { DetailsModal } from "@/designs/molecules/DetailsModal";
import { technoItems, technologiesItems } from "@/lib/utils"; // Fallback data
import { ApiTechnology, TechnologyCardItem } from "@/types";

function TechnologiesPage() {
  const [trendingTech, setTrendingTech] = useState<TechnologyCardItem[]>(technoItems);
  const [otherTech, setOtherTech] = useState<TechnologyCardItem[]>(technologiesItems);
  const [allTechData, setAllTechData] = useState<ApiTechnology[]>([]);
  const [modalItem, setModalItem] = useState<ApiTechnology | null>(null);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        // --- 1. We only need to fetch ALL technologies once ---
        const allTechApiUrl = "https://api.cish.org.in/api/innovation?key=technology";
        
        const res = await fetch(allTechApiUrl);
        const allData: ApiTechnology[] = res.ok ? await res.json() : [];

        if (Array.isArray(allData) && allData.length > 0) {
          // --- 2. Store the complete API response ---
          setAllTechData(allData);

          // --- 3. Filter for Trending technologies (isTrending === true) ---
          const trendingData = allData.filter(item => item.isTrending === true);

          // --- 4. Filter for Other technologies (isTrending is false or null) ---
          const otherOnlyData = allData.filter(item => item.isTrending !== true);

          // --- 5. Map and set Trending technologies ---
          if (trendingData.length > 0) {
            const mappedTrending = trendingData.map(
              (item): TechnologyCardItem => ({
                id: item.id,
                title: item.title,
                description: [item.details], // Map details for the card
                image: item.image,
                href: `/technologies/${item.id}`,
              })
            );
            setTrendingTech(mappedTrending);
          } else {
            // If API returns no trending items, set to empty array
            setTrendingTech([]);
          }

          // --- 6. Map and set Other technologies ---
          if (otherOnlyData.length > 0) {
            const mappedOther = otherOnlyData.map(
              (item): TechnologyCardItem => ({
                id: item.id,
                title: item.title,
                image: item.image,
                description: [item.details], // Map details for the card
                href: `/technologies/${item.id}`,
              })
            );
            setOtherTech(mappedOther);
          } else {
             // If API returns no other items, set to empty array
            setOtherTech([]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch technologies:", error);
        // On error, the component will use the default fallback state
      }
    };

    fetchTechnologies();
  }, []); // --- 7. Dependency array set to [] to run only once on mount ---

  // These handlers are correct and find the full item from allTechData
  const handleViewTrending = (item: TechnologyCardItem) => {
    const fullItem = allTechData.find((t) => t.id === item.id);
    if (fullItem) {
      setModalItem(fullItem);
    }
  };

  const handleViewOther = (id: number) => {
    const fullItem = allTechData.find((t) => t.id === id);
    if (fullItem) {
      setModalItem(fullItem);
    }
  };

  const closeModal = () => setModalItem(null);

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "TECHNOLOGIES" }]}
        iconProps={true}
        title="TECHNOLOGIES FOR COMMERCIALIZATION"
        description={[""]}
      />

      <TrendingTechnologies technologies={trendingTech} onViewMore={handleViewTrending} />
      <OtherTechnologies technologiesItems={otherTech} onViewMore={handleViewOther} />
      <Footer />

      {/* This modal correctly receives the full ApiTechnology object */}
      {modalItem && (
        <DetailsModal
          isOpen={!!modalItem}
          item={modalItem}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default TechnologiesPage;