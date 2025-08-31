"use client";

import { Header } from "../organisms/Header";
import banner from "../public/images/banner.svg";
import { Logo } from "../atoms/Logo";
import { AnnouncementBar } from "../molecules/AnnouncementBar";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";

export const MainHeader = () => {
  return (
    <main className="w-full">
      <Header />
      <ResponsiveNavbar />

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
