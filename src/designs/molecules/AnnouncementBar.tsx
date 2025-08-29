"use client";
import { Volume2 } from "lucide-react";
import plump from "../public/images/streamline-plump_announcement-megaphone.svg";
import { Logo } from "../atoms/Logo";

interface AnnouncementBarProps {
  messages: string[];
}

export const AnnouncementBar = ({ messages }: AnnouncementBarProps) => {
  return (
    <div className="w-full bg-white border-y border-gray-200">
      <div className="container flex items-center py-4 overflow-hidden">
        <div className="flex items-center gap-2 whitespace-nowrap pr-6">
          <span className="font-semibold text-green-700 text-sm md:text-base">Announcements</span>
          <Logo src={plump} alt="Announcement Icon" width={18} height={18} />
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {messages.map((msg, index) => (
              <span key={index} className="mx-8 text-xs sm:text-sm md:text-base">
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
