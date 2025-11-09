"use client";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Logo } from "@/designs/atoms/Logo";
import Typography from "@/designs/atoms/Typography";
import { viksitKrishiData } from "@/app/VKSA/data";

// Import carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Updated interface to match API response structure
interface VksaApiItem {
  id: number;
  title: string;
  name: string;
  images: Array<{
    url: string;
    thumbnail: boolean;
  }>;
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

const dummyGalleryImages = [
  { id: 1, src: "/icons/vksa1.png", alt: "Gallery Image 1" },
  { id: 2, src: "/icons/vksa2.png", alt: "Gallery Image 2" },
  { id: 3, src: "/icons/vksa3.png", alt: "Gallery Image 3" },
  { id: 4, src: "/icons/vksa4.png", alt: "Gallery Image 4" },
];

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
            // ✅ Extract URLs from image objects
            dataToSearch = apiData.map((item: VksaApiItem) => ({
              id: item.id,
              title: item.title,
              description: item.name,
              images: item.images.map(img => img.url), // Extract URL from each image object
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

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!cardData) {
    notFound();
  }

  // Determine which images to display: API images if available, otherwise dummy images
  const imagesToDisplay =
    cardData.images && cardData.images.length > 0
      ? cardData.images
      : dummyGalleryImages.map((img) => img.src);

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

      {/* --- Carousel Section --- */}
      {imagesToDisplay && imagesToDisplay.length > 0 && (
        <section className="container mx-auto w-full py-10 md:py-16 px-6">
          <div className="flex items-center pb-6 gap-2">
            <Typography variant="sectionHeading">Photo Gallery</Typography>
          </div>
          <Slider {...carouselSettings}>
            {imagesToDisplay.map((imageUrl, index) => (
              <div key={index} className="px-2">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${cardData.title} - Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default CardDetailPage;