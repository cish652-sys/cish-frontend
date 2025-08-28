import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const eventsData = [
  {
    image: "/icons/Event 1.svg",
    date: "May 15, 2025",
    title: "ICAR DEVELOPS NEW CROP VARIETY",
    description:
      "Scientists at ICAR have developed a new crop variety that can withstand prolonged drought.",
  },
  {
    image: "/icons/Event 2.svg",
    date: "June 10, 2025",
    title: "NATIONAL CONFERENCE ON CLIMATE-SMART AGRICULTURE ANNOUNCED",
    description:
      "Scientists at ICAR have developed a new crop variety that can withstand prolonged drought conditions.",
  },
  {
    image: "/icons/Event 3.svg",
    date: "April 28, 2025",
    title: "ICAR SIGNS MOU WITH INTERNATIONAL RESEARCH ORGANIZATIONS",
    description:
      "Scientists at ICAR have developed a new crop variety that can withstand prolonged drought conditions.",
  },
];

export const rearchData = [
  {
    image: "/icons/Event 1.svg",
    date: "May 15, 2025",
    title: "ICAR DEVELOPS NEW CROP VARIETY",
    description: "The Accelerated Crop Improvement Program leads the development of ICRISAT’s efforts to improve dryland crop varieties for Africa, Asia, and beyond. dryland crop varieties for Africa, Asia, and beyond.",
  },
  {
    image: "/icons/Event 2.svg",
    date: "June 10, 2025",
    title: "NATIONAL CONFERENCE ON CLIMATE-SMART AGRICULTURE ANNOUNCED",
    description: "The Accelerated Crop Improvement Program leads the development of ICRISAT’s efforts to improve dryland crop varieties for Africa, Asia, and beyond. dryland crop varieties for Africa, Asia, and beyond.",
  },
  {
    image: "/icons/Event 3.svg",
    date: "April 28, 2025",
    title: "ICAR SIGNS MOU WITH INTERNATIONAL RESEARCH ORGANIZATIONS",
    description: "The Accelerated Crop Improvement Program leads the development of ICRISAT’s efforts to improve dryland crop varieties for Africa, Asia, and beyond. dryland crop varieties for Africa, Asia, and beyond.",
  },
   {
    image: "/icons/Event 3.svg",
    date: "April 28, 2025",
    title: "ICAR SIGNS MOU WITH INTERNATIONAL RESEARCH ORGANIZATIONS",
    description: "The Accelerated Crop Improvement Program leads the development of ICRISAT’s efforts to improve dryland crop varieties for Africa, Asia, and beyond. dryland crop varieties for Africa, Asia, and beyond.",
  },
];

