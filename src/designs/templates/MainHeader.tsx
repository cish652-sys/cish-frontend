"use client";

import { useState, useEffect, useCallback } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../organisms/Header";
import { AnnouncementBar } from "../molecules/AnnouncementBar";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";

const banners = [
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

export const MainHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, []); 

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  }, []);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    const currentItem = banners[currentIndex];
    if (currentItem.type === "image") {
      const timer = setTimeout(goToNext, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, goToNext]);

  return (
    <main className="w-full">
      <Header />
      <ResponsiveNavbar />

      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            {banners[currentIndex].type === "video" ? (
              <motion.video
                key={currentIndex}
                src={banners[currentIndex].src}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                onEnded={goToNext}
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={goToPrevious}
              className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            {banners.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <AnnouncementBar
        messages={[
          "Central Institute For Subtropical Horticulture Institute",
          "Upcoming Seminar on Sustainable Horticulture Practices",
          {
            text: "Viksit Krishi Sankalp Abhiyan",
            link: "https://cish.in/vksa.php",
          },
        ]}
      />
    </main>
  );
};