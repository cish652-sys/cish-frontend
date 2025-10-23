"use client";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import TrendingTechnologies from "@/designs/organisms/TrendingTechnologies";
import { OtherTechnologies } from "@/designs/templates/OtherTechnologies";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ApiTechnology, TechnologyCardItem } from "@/types";
import { varietiesItem, technologiesVarietiesItems } from "@/lib/utils";

function ClimateResilientPage() {
  const [topVariety, setTopVariety] = useState<TechnologyCardItem[]>(varietiesItem);
  const [otherVarieties, setOtherVarieties] = useState<TechnologyCardItem[]>(
    technologiesVarietiesItems
  );

  useEffect(() => {
    const fetchVarieties = async () => {
      try {
        const apiUrl = "https://api.cish.org.in/api/innovation?key=varities";
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }

        const data: ApiTechnology[] = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const topItemData = data.slice(0, 1);
          const mappedTopVariety = topItemData.map(
            (item): TechnologyCardItem => ({
              id: item.id,
              title: item.title,
              description: [item.details],
              image: item.image,
              href: `/varieties/${item.id}`,
            })
          );
          setTopVariety(mappedTopVariety);

          const otherItemsData = data.slice(1);
          const mappedOtherVarieties = otherItemsData.map(
            (item): TechnologyCardItem => ({
              id: item.id,
              title: item.title,
              image: item.image,
              description: [item.details],
              href: `/varieties/${item.id}`,
            })
          );
          setOtherVarieties(mappedOtherVarieties);
        }
      } catch (error) {
        console.error("Failed to fetch varieties:", error);
      } finally {
      }
    };

    fetchVarieties();
  }, []);

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Image
          src={"/icons/bannerblank.svg"}
          alt="Website Banner"
          height={452}
          width={2000}
          className="w-full object-cover"
          priority
        />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Varieties" }]}
        iconProps={false}
        title="Climate Resilient"
        description={[""]}
      />
      <div className="py-0 bg-[#FBFAF0]">
        <TrendingTechnologies technologies={topVariety} showVerieties={false} />
        <OtherTechnologies technologiesItems={otherVarieties} showHeading={false} />
      </div>
      <Footer />
    </div>
  );
}

export default ClimateResilientPage;
