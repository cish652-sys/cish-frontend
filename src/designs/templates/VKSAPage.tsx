"use client";
import React, { useState, useEffect } from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { viksitKrishiData } from "@/app/VKSA/data";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import Typography from "@/designs/atoms/Typography";

interface VksaApiItem {
  id: number;
  title: string;
  name: string;
  images: string[];
}

const VKSAPage = () => {
  const [vksaItems, setVksaItems] = useState(viksitKrishiData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVksaData = async () => {
      try {
        const response = await fetch(
          "https://api.nationalfarmerportal.org/nfp-portal/api/news?type=vksa"
        );
        if (!response.ok) throw new Error("API fetch failed");

        const apiData: VksaApiItem[] = await response.json();

        if (apiData && apiData.length > 0) {
          const formattedData = apiData.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.name,
            images: item.images,
          }));
          setVksaItems(formattedData);
        }
      } catch (error) {
        console.error("Failed to fetch VKSA data, using fallback data.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVksaData();
  }, []);

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "VIKSIT KRISHI SANKALP ABHIYAN" }]}
        iconProps={true}
        title="VIKSIT KRISHI SANKALP ABHIYAN"
        description={[""]}
      />
      <div className="mx-auto bg-[#f9f8f2] p-6 md:p-10">
        <div className="flex flex-col gap-6 container">
          <div className="flex items-center pb-[80px] gap-2">
            <Typography variant="sectionHeading">VIKSIT KRISHI SANKALP ABHIYAN</Typography>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            vksaItems.map((card) => (
              <ViksitKrishiCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                images={card.images}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default VKSAPage;
