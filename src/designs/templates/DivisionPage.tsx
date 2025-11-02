'use client';
import React from "react";
import { SectionHeader } from "../organisms/SectionHeader";
import { Logo } from "../atoms/Logo";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import TrendingTechnologies from "../organisms/TrendingTechnologies";
import { divItems } from "@/lib/utils"; // This is your array with 'slug'
import { TechnologyCardItem } from "@/types"; // This is the type with 'id'
import { useRouter } from "next/navigation";

const DivisionPage = () => {
  const router = useRouter();

 
  const technologies: TechnologyCardItem[] = divItems.map((item, index) => ({
    title: item.title,
    description: item.description,
    image: item.image,
    href: item.href,
    
    id: index + 1, 
  }));


  const handleViewMore = (item: TechnologyCardItem) => {
  
    const originalItem = divItems[item.id - 1];

    if (originalItem) {
      router.push(`/Division/${originalItem.slug}`);
    }
  };

  return (
    <main>
      <Header />
      <ResponsiveNavbar />{" "}
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "DIVISION" }]}
        iconProps={true}
        title="DIVISION"
        description={[""]}
      />
      <TrendingTechnologies
        className="bg-white"
        showVerieties={false}
        technologies={technologies} // <-- Pass the new, adapted array
        onViewMore={handleViewMore}  // <-- Pass the new handler function
      />
      <Footer />
    </main>
  );
};

export default DivisionPage;