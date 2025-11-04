"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import Slider from "react-slick";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { viksitKrishiData } from "@/app/VKSA/data"; // Fallback data
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import Typography from "@/designs/atoms/Typography";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Interfaces (for type safety) ---
interface VksaApiItem {
  id: number | string;
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

// Gallery images
const galleryImages = [
  { id: 1, src: "/icons/vksa1.png", alt: "Gallery Image 1" },
  { id: 3, src: "/icons/vksa2.png", alt: "Gallery Image 3" },
  { id: 4, src: "/icons/vksa3.png", alt: "Gallery Image 4" },
  { id: 5, src: "/icons/vksa4.png", alt: "Gallery Image 5" },
];

const VKSAPage = () => {
  const [cards, setCards] = useState<VksaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVksaList = async () => {
      try {
        const response = await fetch(
          "https://api.cish.org.in/api/news?type=vksa"
        );
        if (response.ok) {
          const apiData: VksaApiItem[] = await response.json();
          if (apiData && apiData.length > 0) {
            const mappedData = apiData.map((item: VksaApiItem) => ({
id: parseInt(String(item.id), 10),
              title: item.title,
              description: item.name,
              images: item.images,
            }));
            setCards(mappedData);
          } else {
            // Fallback if API returns empty array
            setCards(viksitKrishiData);
          }
        } else {
          // Fallback if response is not ok
          setCards(viksitKrishiData);
        }
      } catch (error) {
        console.error("Failed to fetch VKSA list, using fallback.", error);
        // Fallback if fetch fails
        setCards(viksitKrishiData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVksaList();
  }, []);

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

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
          { label: "VIKSIT KRISHI SANKALP ABHIYAN" },
        ]}
        iconProps={true}
        title="VIKSIT KRISHI SANKALP ABHIYAN"
        description={[""]}
      />
      <div className="mx-auto bg-[#f9f8f2] p-6 md:p-10">
        <div className="flex flex-col gap-6 container">
          <div className="flex items-center pb-[80px] gap-2">
            <Typography variant="sectionHeading">
              VIKSIT KRISHI SANKALP ABHIYAN
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              Loading events...
            </div>
          ) : (
            cards.map((card) => (
              <Link
                key={card.id}
                href={`/VKSA/${card.id}`}
                passHref
                className="w-full flex justify-center" // <--- Like this
              >
                <ViksitKrishiCard
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  images={card.images}
                />
              </Link>
            ))
          )}
          {!isLoading && cards.length === 0 && <div>No events found.</div>}
        </div>
      </div>

      {/* --- Carousel Section --- */}
      <section className="container mx-auto w-full py-10 md:py-16 px-6">
        <div className="flex items-center pb-6 gap-2">
          <Typography variant="sectionHeading">Photo Gallery</Typography>
        </div>
        <Slider {...carouselSettings}>
          {galleryImages.map((image) => (
            <div key={image.id} className="px-2">
              <div className="relative w-full h-64 overflow-hidden ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <Footer />
    </main>
  );
};

export default VKSAPage;