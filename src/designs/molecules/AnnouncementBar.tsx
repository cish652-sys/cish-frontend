"use client";
import { Volume2 } from "lucide-react";
import plump from "../public/images/streamline-plump_announcement-megaphone.svg";
import { Logo } from "../atoms/Logo";

interface AnnouncementBarProps {
  messages: string[];
}

export const AnnouncementBar = ({ messages }: AnnouncementBarProps) => {
  return (
    <div className="w-full bg-white border-y border-gray-200 flex items-center px-[160px] py-6 overflow-hidden">
      <div className="flex items-center gap-2 whitespace-nowrap pr-6">
        <span className="font-semibold text-green-700 text-[16px]">Announcements</span>
        <Logo src={plump} alt="Announcement Icon" width={15} height={15} />
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {messages.map((msg, index) => (
            <span key={index} className="mx-8 text-sm md:text-base">
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
