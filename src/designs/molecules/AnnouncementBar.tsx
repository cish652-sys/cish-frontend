"use client";
import plump from "../public/images/streamline-plump_announcement-megaphone.svg";
import { Logo } from "../atoms/Logo";
import Typography from "../atoms/Typography";

interface AnnouncementBarProps {
  messages: string[];
}

export const AnnouncementBar = ({ messages }: AnnouncementBarProps) => {
  return (
    <div className="w-full bg-white border-gray-200">
      <div className="container flex items-center py-4 overflow-hidden">
        <div className="flex items-center gap-2 whitespace-nowrap pr-6">
          <Typography variant="headingSmall">Announcements</Typography>
          <Logo src={plump} alt="Announcement Icon" width={24} height={24} />
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {messages.map((msg, index) => (
              <span
                key={index}
                className="mx-8 font-normal text-[16px] leading-[100%] tracking-[0] capitalize"
                style={{ fontFamily: "Noto Sans" }}
              >
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
