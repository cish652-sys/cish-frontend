"use client";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import ViksitKrishiCard from "@/designs/molecules/VKSACard";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Logo } from "@/designs/atoms/Logo";
import { FieldGeneData } from "../data";

interface CardDetailPageProps {
  params: { id: string };
}

const CardDetailPage: React.FC<CardDetailPageProps> = ({ params }) => {
  const cardId = parseInt(params.id, 10);
  const [cardData, setCardData] = useState(
    FieldGeneData.find((card) => card.id === cardId) || null
  );

  if (!cardData) notFound();

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
          { label: "Field Gene Bank", href: "/FieldGeneBank" },
          { label: cardData.title ?? "" },
        ]}
        iconProps={true}
        title={cardData.title ?? ""}
        description={[""]}
      />
      <div className="mx-auto bg-[#f9f8f2] p-6 md:p-10">
        <div className="flex flex-col items-center w-full">
          <ViksitKrishiCard
            id={cardData.id}
            title={cardData.title ?? ""}
            description={cardData.description ?? ""}
            images={cardData.images}
            isDetailView={true}
            basePath="FieldGeneBank"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CardDetailPage;
