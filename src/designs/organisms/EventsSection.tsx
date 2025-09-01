"use client";
import { eventsData } from "@/lib/utils";
import Heading from "../atoms/Heading";
import EventCard from "../molecules/EventCard";
import { Button } from "../atoms/button";
import Image from "next/image";
import Typography from "../atoms/Typography";

export default function EventsSection() {
  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <div className="container max-w-7xl mx-auto">
         <div className="flex items-center gap-2 mb-6">
        <Image src="/icons/newspaper 1.svg" alt="image" width={24} height={24}/>
          <Typography variant="sectionHeading">NEWS & EVENTS</Typography>
        </div>
        <div className="grid gap-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {eventsData.map((item, index) => (
            <EventCard
              key={index}
              image={item.image}
              date={item.date}
              title={item.title}
              description={item.description}
              showDate={true}
              showFooter={true}
              showTitle={true}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 font-semibold">
            VIEW MORE →
          </Button>
        </div>
      </div>
    </section>
  );
}
