"use client";
import Heading from "@/designs/atoms/Heading";
import EventCard from "@/designs/molecules/EventCard";
import { rearchData } from "@/lib/utils";

export default function Rearch() {
  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <div className="container max-w-7xl mx-auto">
        <Heading title=" Key Research" />
        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {rearchData.map((item, index) => (
            <EventCard
              key={index}
              image={item.image}
              date={item.date}
              title={item.title}
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
