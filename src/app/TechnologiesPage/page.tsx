'use client';
import React, { useEffect, useState } from "react";
import { Header } from "@/designs/organisms/Header";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import { Logo } from "@/designs/atoms/Logo";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { TechnologyModal } from "@/designs/organisms/TechnologyModal";
import { technoItems, technologiesItems } from "@/lib/utils"; // Fallback data
import { ApiTechnology, TechnologyCardItem } from "@/types"

function TechnologiesPage() {
  const [trendingTech, setTrendingTech] = useState<TechnologyCardItem[]>(technoItems);
  const [otherTech, setOtherTech] = useState<TechnologyCardItem[]>(technologiesItems);
  const [allTechData, setAllTechData] = useState<ApiTechnology[]>([]);
  const [selectedTech, setSelectedTech] = useState<ApiTechnology | null>(null);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const trendingApiUrl = 'https://api.cish.org.in/api/innovation?key=technology&isTrending=true';
        const otherApiUrl = 'https://api.cish.org.in/api/innovation?key=technology';

        const [trendingRes, otherRes] = await Promise.all([
          fetch(trendingApiUrl),
          fetch(otherApiUrl),
        ]);
        
        const trendingData: ApiTechnology[] = trendingRes.ok ? await trendingRes.json() : [];
        const allData: ApiTechnology[] = otherRes.ok ? await otherRes.json() : [];
        
        setAllTechData(allData);

        if (Array.isArray(trendingData) && trendingData.length > 0) {
         
          const mappedTrending = trendingData.map((item): TechnologyCardItem => ({
            id: item.id, 
            title: item.title,
            description: [item.details],
            image: item.image,
            href: `/technologies/${item.id}`,
          }));
          setTrendingTech(mappedTrending);
        }

        const otherOnlyData = allData.filter(item => 
            !trendingData.some(trendingItem => trendingItem.id === item.id)
        );
        
        if (Array.isArray(otherOnlyData) && otherOnlyData.length > 0) {
          const mappedOther = otherOnlyData.map((item): TechnologyCardItem => ({
            id: item.id, 
            title: item.title,
            image: item.image,
            description: [item.details],
            href: `/technologies/${item.id}`,
          }));
          setOtherTech(mappedOther);
        }
      } catch (error) {
        console.error("Failed to fetch technologies:", error);
      } finally {
      }
    };
    fetchTechnologies();
  }, []);

  const handleViewMore = (id: number) => {
    const tech = allTechData.find(t => t.id === id);
    if (tech) setSelectedTech(tech);
  };

  const closeModal = () => setSelectedTech(null);

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

      <TrendingTechnologies technologies={trendingTech}  />
      <OtherTechnologies technologiesItems={otherTech} onViewMore={handleViewMore} />
      <Footer />
      
      {selectedTech && <TechnologyModal technology={selectedTech} onClose={closeModal} />}
    </div>
  );
}

export default TechnologiesPage;