"use client";

import React from "react";
import plump from "../public/images/streamline-plump_announcement-megaphone.svg";
import { Logo } from "../atoms/Logo";

interface AnnouncementItem {
  text: string;
  link?: string;
}

interface AnnouncementBarProps {
  messages: (string | AnnouncementItem)[];
}

export const AnnouncementBar = ({ messages }: AnnouncementBarProps) => {
  const normalizedMessages: AnnouncementItem[] = messages.map((msg) =>
    typeof msg === "string" ? { text: msg } : msg
  );

  const renderMessage = (msg: AnnouncementItem, key: React.Key) => {
    const baseClasses = "mx-8 font-normal text-[16px] leading-[100%] tracking-[0] capitalize";
    const fontStyle = { fontFamily: "Noto Sans" };

    if (msg.link) {
      return (
        <a
          key={key}
          href={msg.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} text-green-600 hover:text-green-700 no-underline hover:underline transition-colors cursor-pointer`}
          style={fontStyle}
        >
          {msg.text}
        </a>
      );
    }

    return (
      <span key={key} className={baseClasses} style={fontStyle}>
        {msg.text}
      </span>
    );
  };

  return (
    <div className="w-full bg-[#FBFAF0] border-gray-200">
      <div className="container flex items-center py-4 overflow-hidden">
        <div className="flex items-center gap-2 whitespace-nowrap pr-6">
          <h2 className="text-[#1B5E20] font-semibold">ANNOUNCEMENTS</h2>
          <Logo src={plump} alt="Announcement Icon" width={24} height={24} />
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {normalizedMessages.map((msg, index) => renderMessage(msg, index))}
            {normalizedMessages.map((msg, index) => renderMessage(msg, `dup-${index}`))}
          </div>
        </div>
      </div>
    </div>
  );
};
