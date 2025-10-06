'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@/designs/atoms/SocialIcon"; // Ensure this path is correct
import { Event } from "@/app/Events/data"; // Ensure this path is correct

interface EventPageCardsProps {
  event: Event;
   image?: string;        // optional if some events don't have images
  date?: string;
  title?: string;
  description?: string;
  showDate?: boolean;
  showFooter?: boolean;
  showTitle?: boolean;
}

const EventPageCards: React.FC<EventPageCardsProps> = ({ 
  event,
  
 }) => {
  return (
    <Link href={`/Events/${event.id}`} className="block">
      <div className="flex bg-white shadow-sm border border-[#e0e0e0] overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="w-24 flex-shrink-0 flex flex-col items-center justify-start py-6 px-2">
          <div className="text-xl font-bold text-gray-800 leading-none">{event.month}</div>
          <div className="text-3xl font-bold text-gray-800 leading-none mt-1">{event.day}</div>
        </div>

        <div className="w-[10px] bg-[#3a643b] my-4"></div>

        <div className="flex-grow p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <Image
                src="/icons/CalendarEvent.svg"
                alt="calendar"
                width={16}
                height={16}
                className="mr-2"
              />
              <span>
                {event.date} @ {event.timeRange.split(" - ")[0]} - {event.timeRange.split(" - ")[1]}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>

            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
              {event.shortDescription}{" "}
              <span className="text-[#3a643b] font-semibold cursor-pointer hover:underline ml-1">
                View More →
              </span>
            </p>
          </div>

          <div className="flex items-center mt-auto">
            <span className="text-gray-600 text-sm font-medium mr-3">Social Media</span>
            <div className="flex space-x-2">
              {event.socialLinks.map((link, idx) => (
                <SocialIcon key={idx} href={link.href} src={link.icon} alt={`Social link ${idx}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-72 flex-shrink-0">
          <Image
            src={event.cardImage}
            alt={event.title}
            width={288} // w-72 is 288px
            height={200} // Adjust height as needed, maintain aspect ratio
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default EventPageCards;
