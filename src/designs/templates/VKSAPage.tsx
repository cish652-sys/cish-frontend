"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Slider from "react-slick"; // Import react-slick
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { viksitKrishiData } from "@/app/VKSA/data"; // Your local static data
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import Typography from "@/designs/atoms/Typography";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- NEW ---
// 1. Add your gallery image paths here
// (Assuming they are in the /public/gallery/ folder)
const galleryImages = [
  { id: 1, src: "/icons/vksa1.png", alt: "Gallery Image 1" },
  { id: 3, src: "/icons/vksa2.png", alt: "Gallery Image 3" },
  { id: 4, src: "/icons/vksa3.png", alt: "Gallery Image 4" },
  { id: 5, src: "/icons/vksa4.png", alt: "Gallery Image 5" },

  // Add as many images as you like
];

const VKSAPage = () => {
  // 2. Configure the carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
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
          {viksitKrishiData.map((card) => (
            <ViksitKrishiCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              images={card.images}
            />
          ))}
        </div>
      </div>

      {/* --- NEW CAROUSEL SECTION --- */}
      <section className="container mx-auto w-full py-10 md:py-16 px-6">
        <div className="flex items-center pb-6 gap-2">
          <Typography variant="sectionHeading">Photo Gallery</Typography>
        </div>
        <Slider {...carouselSettings}>
          {galleryImages.map((image) => (
            <div key={image.id} className="px-2">
              {" "}
              {/* Add padding between slides */}
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
      {/* --- END OF NEW CAROUSEL SECTION --- */}

      <Footer />
    </main>
  );
};

export default VKSAPage;
