"use client";
import { eventsData } from "@/lib/utils";
import EventCard from "../molecules/EventCard";
import { Button } from "../atoms/button";
import Image from "next/image";
import Typography from "../atoms/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";

type ApiEvent = {
  id: number;
  name: string;
  date: string;
  title: string;
  type: string;
  images: Array<{
    url: string;
    thumbnail: boolean;
  }>;
};

// Define the transformed event type
type TransformedEvent = {
  id: number | string;
  image: string;
  date: string;
  title: string;
  description: string;
};

// ✅ Helper function to fix MinIO URLs
const fixImageUrl = (url: string | null | undefined): string => {
  if (!url) return "/icons/default-event.jpg";

  if (url.startsWith("http://13.234.154.152:9000/")) {
    const path = url.replace("http://13.234.154.152:9000/", "");
    return `https://api.cish.org.in/files/proxy?path=${encodeURIComponent(path)}`;
  }

  return url;
};

// ✅ Transform dummy data to include id
const transformDummyData = (): TransformedEvent[] => {
  return eventsData.map((event, index) => ({
    id: `dummy-${index}`, // Generate IDs for dummy data
    image: event.image,
    date: event.date,
    title: event.title,
    description: event.description,
  }));
};

export default function EventsSection() {
  const [events, setEvents] = useState<TransformedEvent[]>(transformDummyData()); // ✅ Use transformed dummy data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://api.cish.org.in/api/news?type=newsEvent");
        const data: ApiEvent[] = await response.json();

        if (data && data.length > 0) {
          // Sort events by date in descending order (most recent first)
          const sortedData = data.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });

          // Transform API data to match EventCard props
          const transformedEvents: TransformedEvent[] = sortedData.map((event) => ({
            id: event.id,
            image:
              event.images && event.images.length > 0 && event.images[0]?.url
                ? fixImageUrl(event.images[0].url)
                : "/icons/default-event.jpg",
            date: new Date(event.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            title: event.title,
            description: event.name,
          }));

          setEvents(transformedEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        // ✅ On error, keep the dummy data (already set in useState)
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/icons/newspaper 1.svg" alt="image" width={24} height={24} />
            <Typography variant="sectionHeading">NEWS & EVENTS</Typography>
          </div>
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-600">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6 md:px-16" style={{ backgroundColor: "#FBFAF0" }}>
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Image src="/icons/newspaper 1.svg" alt="image" width={24} height={24} />
          <Typography variant="sectionHeading">NEWS & EVENTS</Typography>
        </div>
        <div className="grid gap-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {events.map((item, index) => (
            <EventCard
              key={item.id || index}
              id={item.id}
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
          <Link href="/Events">
            <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 font-semibold">
              VIEW MORE →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}