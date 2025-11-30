"use client";

import React, { useState, useEffect } from "react";
import EventPageCards from "@/designs/molecules/EventPageCards";
import EventFilters from "@/designs/molecules/EventFilters";
import { eventsData, Event } from "@/app/Events/data"; // Import Event type and fallback data
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Logo } from "@/designs/atoms/Logo";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Header } from "@/designs/organisms/Header";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// --- FIX 1: Update the ApiEvent interface ---
interface ApiEvent {
  id: number;
  date: string;
  title: string;
  name: string;
  images: {
    url: string;
    thumbnail: boolean;
  }[];
}
// ------------------------------------------

const transformApiData = (apiData: ApiEvent[]): Event[] => {
  return apiData.map((item) => {
    const eventDate = new Date(item.date);
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString("en-US", { month: "short" });
    const time = eventDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return {
      id: String(item.id),
      date: `${day} ${month}.`,
      day: day,
      month: month,
      timeRange: time,
      // --- FIX 2: Swap title and name ---
      title: item.name,
      shortDescription: item.title,
      fullDescription: item.title,
      // ----------------------------------
      // --- FIX 3: Access the .url property for images ---
      cardImage: item.images?.[0]?.url || "/icons/default-event.jpg",
      detailImages: item.images?.map((img) => img.url) || [],
      // ------------------------------------------------
      socialLinks: [],
    };
  });
};

const EventsPage = () => {
  const [allEvents, setAllEvents] = useState<Event[]>(eventsData);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeMonth, setActiveMonth] = useState(
    new Date().toLocaleString("en-US", { month: "short" })
  );
  const [activeView, setActiveView] = useState("Month");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://api.cish.org.in/api/news?type=newsEvent");
        if (!response.ok) throw new Error("API fetch failed");

        const apiData: ApiEvent[] = await response.json();

        if (apiData && apiData.length > 0) {
          const formattedEvents = transformApiData(apiData);
          setAllEvents(formattedEvents);
        }
      } catch (error) {
        console.error("Failed to fetch events, using fallback data.", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = allEvents.filter(
    (event) =>
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) &&
      event.month === activeMonth
  );

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "NEWS AND EVENTS" }]}
        iconProps={true}
        title="NEWS AND EVENTS"
        description={[""]}
      />
      <div className="min-h-screen bg-[#fcfbf8] text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-3xl font-bold text-green-900 mb-6">NEWS AND EVENTS</h1>

          <EventFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeMonth={activeMonth}
            setActiveMonth={setActiveMonth}
            activeView={activeView}
            setActiveView={setActiveView}
            onFindEvents={() => {}}
          />

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">{activeMonth} 2025</h2>
            <div className="space-y-6">
              {isLoading ? (
                <p className="text-center text-gray-500 py-10">Loading events...</p>
              ) : filteredEvents.length > 0 ? (
                filteredEvents.map((event) => <EventPageCards key={event.id} event={event} />)
              ) : (
                <p className="text-center text-gray-500 py-10">
                  No events found for &quot;{searchTerm}&quot; in {activeMonth}.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EventsPage;
