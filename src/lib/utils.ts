import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const eventsData = [
  {
    image: "/images/crop.jpg",
    date: "May 15, 2025",
    title: "ICAR DEVELOPS NEW CROP VARIETY",
    description: "Scientists at ICAR have developed a new crop variety that can withstand prolonged drought.",
  },
  {
    image: "/images/conference.jpg",
    date: "June 10, 2025",
    title: "NATIONAL CONFERENCE ON CLIMATE-SMART AGRICULTURE ANNOUNCED",
    description: "Scientists at ICAR have developed a new crop variety that can withstand prolonged drought conditions.",
  },
  {
    image: "/images/mou.jpg",
    date: "April 28, 2025",
    title: "ICAR SIGNS MOU WITH INTERNATIONAL RESEARCH ORGANIZATIONS",
    description: "Scientists at ICAR have developed a new crop variety that can withstand prolonged drought conditions.",
  },
];

