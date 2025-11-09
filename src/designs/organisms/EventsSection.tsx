"use client";
import { eventsData } from "@/lib/utils"; // Kept for fallback
import EventCard from "../molecules/EventCard";
import { Button } from "../atoms/button";
import Image from "next/image";
import Typography from "../atoms/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";

// --- FIX 1: Correct the ApiEvent type ---
type ApiEvent = {
  id: number;
  name: string;
  date: string;
  title: string;
  type: string;
  images: {
    url: string;
    thumbnail: boolean;
  }[];
  // The 'url' property at the root was incorrect and is removed.
};
// ---------------------------------------

// Define the shape of the event object your EventCard expects
interface DisplayEvent {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
}

// A default empty array for initialization
const defaultEvents: DisplayEvent[] = [];

export default function EventsSection() {
  // Use the DisplayEvent type for state. Initialize empty.
  const [events, setEvents] = useState<DisplayEvent[]>(defaultEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://api.cish.org.in/api/news?type=newsEvent");
        if (!response.ok) throw new Error("API fetch failed");

        const data: ApiEvent[] = await response.json();

        if (data && data.length > 0) {
          const sortedData = data.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

          const transformedEvents: DisplayEvent[] = sortedData.map((event) => {
            const thumbnail = event.images?.find((img) => img.thumbnail === true);
            const imageUrl = thumbnail?.url || event.images?.[0]?.url || "/icons/default-event.jpg";

            return {
              id: event.id,
              image: imageUrl,
              date: new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              title: event.name,
              description: event.title,
            };
          });

          setEvents(transformedEvents);
        } else {
          // ✅ fallback if API returns empty
          setEvents(eventsData);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        // ✅ fallback if fetch fails entirely
        setEvents(eventsData);
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

        {/* --- FIX 3: Handle no events --- */}
        {events.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-600">No events found.</p>
          </div>
        ) : (
          <div className="grid gap-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {events.map((item) => (
              <EventCard
                key={item.id} // Use the event ID as the key
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
        )}
        {/* ------------------------------- */}

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
