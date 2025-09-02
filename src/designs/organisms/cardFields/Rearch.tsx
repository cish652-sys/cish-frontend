"use client";
import Typography from "@/designs/atoms/Typography";
import EventCard from "@/designs/molecules/EventCard";
import { rearchData } from "@/lib/utils";
import Image from "next/image";

export default function Rearch() {
  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Image src="/icons/man-scientist 1.svg" alt="image" width={24} height={24} />
          <Typography variant="sectionHeading">Key Research</Typography>
        </div>
        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {rearchData.map((item, index) => (
            <EventCard
              key={index}
              image={item.image}
              date={item.date}
              titleResearch={item.titleResearch}
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
