"use client";
import { useQuery } from "@tanstack/react-query";
import Typography from "@/designs/atoms/Typography";
import EventCard from "@/designs/molecules/EventCard";
import Image from "next/image";

import { rearchData as dummyData } from "@/lib/utils";

type UnifiedResearchItem = {
  id: number | string;
  title: string;
  imageUrl: string;
  description: string;
};

type ApiResearchItem = {
  id: number;
  title: string;
  imageUrl: string;
  description: string | null;
};

const fetchKeyResearch = async (): Promise<ApiResearchItem[]> => {
  const response = await fetch("https://api.cish.org.in/api/content/keyResearch");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Rearch() {
  const {
    data: researchData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["keyResearch"],
    queryFn: fetchKeyResearch,
  });

  if (isPending) {
    return <section className="py-12 px-6">Loading research...</section>;
  }

  const normalizedApiData: UnifiedResearchItem[] = (researchData || []).map((item) => ({
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    description: item.description || "",
  }));

  const normalizedDummyData: UnifiedResearchItem[] = dummyData.map((item, index) => ({
    id: `dummy-${index}`,
    title: item.titleResearch,
    imageUrl: item.image,
    description: item.description,
  }));

  const dataToRender =
    isError || !normalizedApiData.length ? normalizedDummyData : normalizedApiData;

  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Image src="/icons/man-scientist 1.svg" alt="image" width={24} height={24} />
          <Typography variant="sectionHeading">Key Research</Typography>
        </div>
        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {dataToRender.map((item) => (
            <EventCard
              key={item.id}
              image={item.imageUrl}
              titleResearch={item.title}
              date=""
              title=""
              description={item.description}
              showDate={false}
              showFooter={false}
              showTitle={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
