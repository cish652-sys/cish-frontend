'use client';

import React, { useState } from 'react';
import EventPageCards from '@/designs/molecules/EventPageCards';
import EventFilters from '@/designs/molecules/EventFilters';
import { eventsData } from '@/app/Events/data'; 
import { SectionHeader } from '@/designs/organisms/SectionHeader';
import { Logo } from '@/designs/atoms/Logo';
import ResponsiveNavbar from '@/designs/organisms/Navbar/NavigatioMenu';
import { Header } from '@/designs/organisms/Header';
import { Footer } from '@/designs/organisms/FooterOrganisms/Footer';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMonth, setActiveMonth] = useState('Aug'); 
  const [activeView, setActiveView] = useState('Month'); 

  const filteredEvents = eventsData.filter(event =>
    (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) &&
    event.month === activeMonth
  );

  const handleFindEvents = () => {
    console.log("Searching for:", searchTerm);
  };

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
          onFindEvents={handleFindEvents}
        />

        <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">{activeMonth} 2025</h2>
            <div className="space-y-6">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <EventPageCards key={event.id} event={event} />
                ))
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