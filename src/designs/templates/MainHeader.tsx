"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../organisms/Header";
import { AnnouncementBar } from "../molecules/AnnouncementBar";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";

interface FileInfo {
  id: number;
  fileUrl: string;
  isDirector: boolean | null;
  isActive: boolean;
}

interface ApiAnnouncement {
  id: number;
  title: string;
  contentKey: string;
}

const staticBanners = [
  { type: "video", src: "/icons/HomeVideo.mp4" },
  { type: "image", src: "/icons/Home1.JPG" },
  { type: "image", src: "/icons/Home2.JPG" },
  { type: "image", src: "/icons/Home3.JPG" },
  { type: "image", src: "/icons/Home4.JPG" },
  { type: "image", src: "/icons/Home5.JPG" },
  { type: "image", src: "/icons/Home6.JPG" },
  { type: "image", src: "/icons/Home7.JPG" },
  { type: "image", src: "/icons/Home8.JPG" },
];

function fixImageUrl(url: string): string {
  if (url.startsWith("http://13.234.154.152:9000/")) {
    const path = url.replace("http://13.234.154.152:9000/", "");
    return `https://api.nationalfarmerportal.org/nfp-portal/files/proxy?path=${encodeURIComponent(
      path
    )}`;
  }
  return url;
}

const getBannerData = async (): Promise<FileInfo[]> => {
  const response = await fetch("https://api.cish.org.in/files/getAll");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.map((item: FileInfo) => ({
    ...item,
    fileUrl: fixImageUrl(item.fileUrl),
  }));
};

const fetchAnnouncements = async (): Promise<ApiAnnouncement[]> => {
  const response = await fetch("https://api.cish.org.in/api/content/announcement");
  if (!response.ok) {
    throw new Error("Network response was not ok for announcements");
  }
  return response.json();
};

export const MainHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: apiData, isLoading: isBannersLoading } = useQuery<FileInfo[]>({
    queryKey: ["bannerFiles"],
    queryFn: getBannerData,
  });

  const {
    data: apiAnnouncements,
    isPending: isAnnouncementsPending,
    isError: isAnnouncementsError,
  } = useQuery({
    queryKey: ["announcements-bar"],
    queryFn: fetchAnnouncements,
  });

  const banners = useMemo(() => {
    if (!apiData) return staticBanners;

    const activeBanners = apiData
      .filter((item) => item.isDirector === null && item.isActive === true)
      .sort((a, b) => b.id - a.id);
    const firstBanner =
      activeBanners.length > 0 ? { type: "image", src: activeBanners[0].fileUrl } : null;
    const carouselBanners = apiData
      .filter((item) => item.isDirector === null && item.isActive === false)
      .sort((a, b) => b.id - a.id)
      .map((item) => ({ type: "image", src: item.fileUrl }));

    const dynamicBanners = [];
    if (firstBanner) dynamicBanners.push(firstBanner);
    dynamicBanners.push(...carouselBanners);

    return dynamicBanners.length > 0 ? dynamicBanners : staticBanners;
  }, [apiData]);

  // Memoize announcement data processing
  const announcementMessages = useMemo(() => {
    if (isAnnouncementsPending) {
      return ["Loading announcements..."];
    }
    if (isAnnouncementsError || !apiAnnouncements || apiAnnouncements.length === 0) {
      return [
        "Central Institute For Subtropical Horticulture Institute",
        "Upcoming Seminar on Sustainable Horticulture Practices",
        {
          text: "Viksit Krishi Sankalp Abhiyan",
          link: "https://cish.in/vksa.php",
        },
      ];
    }
    return apiAnnouncements.map((item) => item.title);
  }, [apiAnnouncements, isAnnouncementsPending, isAnnouncementsError]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    const currentItem = banners[currentIndex];
    if (currentItem.type === "image") {
      const timer = setTimeout(goToNext, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, goToNext, banners]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <main className="w-full">
      <Header />
      <ResponsiveNavbar />

      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden">
          {isBannersLoading ? (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              Loading Banners...
            </div>
          ) : (
            <AnimatePresence initial={false} mode="sync">
              {banners[currentIndex].type === "video" ? (
                <motion.video
                  key={currentIndex}
                  src={banners[currentIndex].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              ) : (
                <motion.img
                  key={currentIndex}
                  src={banners[currentIndex].src}
                  alt={`Website Banner ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 100vw"
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          )}

          {!isBannersLoading && (
            <>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={goToPrevious}
                  className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
                {banners.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentIndex === slideIndex ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <AnnouncementBar messages={announcementMessages} />
    </main>
  );
};
