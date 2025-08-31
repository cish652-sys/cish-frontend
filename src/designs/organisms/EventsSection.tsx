"use client";
import { eventsData } from "@/lib/utils";
import Heading from "../atoms/Heading";
import EventCard from "../molecules/EventCard";
import { Button } from "../atoms/button";

export default function EventsSection() {
  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <div className="container max-w-7xl mx-auto">
        <Heading title="NEWS & EVENTS" />
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
