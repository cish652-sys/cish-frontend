'use client';
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { eventsData } from "@/app/Events/data";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { Logo } from "@/designs/atoms/Logo";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ params }) => {
  const { id } = params;
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    notFound(); 
  }

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/Events" }, { label: "NEWS AND EVENTS" }]}
        iconProps={true}
        title= {event.title}
        description={[""]}
      />
      <div className="min-h-screen bg-[#FBFAF0] text-gray-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl flex flex-col justify-center items-center mx-auto p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            {event.title.toUpperCase()}
          </h1>
          <div className="flex items-center text-gray-600 text-lg mb-6">
            <Image
              src="/icons/CalendarEvent.svg"
              alt="calendar"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>
              {event.date} @ {event.timeRange}
            </span>
          </div>

          {event.detailImages[0] && (
            <div className="w-full mb-8">
              <Image
                src={event.detailImages[0]}
                alt={event.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            {event.fullDescription}
          </p>

          {event.detailImages.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {event.detailImages.slice(1).map((imgSrc, index) => (
                <div key={index} className="w-full">
                  <Image
                    src={imgSrc}
                    alt={`${event.title} image ${index + 2}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EventDetailPage;
