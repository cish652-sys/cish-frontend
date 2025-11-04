"use client";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Logo } from "@/designs/atoms/Logo";
import { viksitKrishiData } from "@/app/VKSA/data"; // Fallback data

interface VksaApiItem {
  id: number;
  title: string;
  name: string;
  images: string[];
}

interface VksaItem {
  id: number;
  title: string;
  description: string;
  images?: string[];
}

interface CardDetailPageProps {
  params: {
    id: string;
  };
}

const CardDetailPage: React.FC<CardDetailPageProps> = ({ params }) => {
  const [cardData, setCardData] = useState<VksaItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const cardId = parseInt(params.id, 10);

  useEffect(() => {
    const fetchVksaDetails = async () => {
      let dataToSearch: VksaItem[] = viksitKrishiData;
      try {
        const response = await fetch("https://api.cish.org.in/api/news?type=vksa");
        if (response.ok) {
          const apiData: VksaApiItem[] = await response.json();
          if (apiData && apiData.length > 0) {
            // Replaced `any` with the `VksaApiItem` type for safety
            dataToSearch = apiData.map((item: VksaApiItem) => ({
              id: item.id,
              title: item.title,
              description: item.name,
              images: item.images,
            }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch VKSA details, using fallback.", error);
      }

      const foundCard = dataToSearch.find((card) => card.id === cardId);
      setCardData(foundCard || null);
      setIsLoading(false);
    };

    fetchVksaDetails();
  }, [cardId]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!cardData) {
    notFound();
  }

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "VIKSIT KRISHI SANKALP ABHIYAN", href: "/VKSA" },
          { label: cardData.title },
        ]}
        iconProps={true}
        title={cardData.title}
        description={[""]}
      />

      <div className="mx-auto bg-[#f9f8f2] p-6 md:p-10">
        <div className="flex flex-col items-center w-full">
          <ViksitKrishiCard
            id={cardData.id}
            title={cardData.title}
            description={cardData.description}
            images={cardData.images}
            isDetailView={true}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CardDetailPage;
