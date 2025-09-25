"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../organisms/Header";
import { AnnouncementBar } from "../molecules/AnnouncementBar";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import banner2 from "../public/images/banner2.svg";
import banner3 from "../public/images/banner3.svg";
import banner4 from "../public/images/banner4.svg";
import banner5 from "../public/images/banner5.jpg";

export const MainHeader = () => {
  const banners = [banner2, banner3, banner4, banner5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <main className="w-full">
      <Header />
      <ResponsiveNavbar />

      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={currentIndex}
              src={banners[currentIndex].src}
              alt={`Website Banner ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 100vw,
                     100vw"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
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
