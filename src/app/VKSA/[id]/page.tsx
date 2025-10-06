"use client";
import React from "react";
import { viksitKrishiData } from "@/app/VKSA/data";

import { notFound } from "next/navigation";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Logo } from "@/designs/atoms/Logo";

interface CardDetailPageProps {
  params: {
    id: string;
  };
}

const CardDetailPage: React.FC<CardDetailPageProps> = ({ params }) => {
  const cardId = parseInt(params.id, 10);

  const cardData = viksitKrishiData[cardId];

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
            id={cardId}
            title={cardData.title}
            description={cardData.description}
            isDetailView={true}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CardDetailPage;
