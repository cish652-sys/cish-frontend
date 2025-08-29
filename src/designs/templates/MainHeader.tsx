"use client";

import { Images } from "lucide-react";
import { Header } from "../organisms/Header";
import { Navbar } from "../organisms/Navbar";
import banner from "../public/images/banner.svg";
import { Logo } from "../atoms/Logo";
import { AnnouncementBar } from "../molecules/AnnouncementBar";

export const MainHeader = () => {
  return (
    <main className="w-full">
      <Header />
      <Navbar />
      <section className="relative w-full">
        <Logo src={banner} alt="Website Banner" responsive />
      </section>

      <AnnouncementBar
        messages={[
          "Central Institute For Subtropical Horticulture Institute",
          "New Research Paper Published on Mango Cultivation",
          "Upcoming Seminar on Sustainable Horticulture Practices",
        ]}
      />
    </main>
  );
};
