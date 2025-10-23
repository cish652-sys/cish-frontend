"use client";

import React, { useState } from "react";
import Typography from "../atoms/Typography";
import { SectionHeader } from "../organisms/SectionHeader";
import { Logo } from "../atoms/Logo";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import { Mail, Phone } from "lucide-react";

const NurseryPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [1, 2, 3, 4];

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section>

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "NURSERY" }]}
        iconProps={true}
        title="NURSERY"
        description={[""]}
      />

      <div>
        <div className="flex  container items-center pt-2 gap-3 mb-6">
          <Typography variant="sectionHeading">NURSERY</Typography>
        </div>
      </div>

      <div className="bg-[#FBFBF8] py-12">
        <div className="container mx-auto px-4">
          <Typography
            variant="paragraphSmall"
            className="text-center max-w-4xl mx-auto mb-8 text-gray-700"
          >
            You can Request The Planting Materials You Need From ICAR-CISH, Lucknow, By Using The
            Link Below. Please Send Your Request Between 1st January And 30th June Each Year.
            Requests Will Be Valid For The Following Year.
          </Typography>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="#"
              className="w-full md:w-auto bg-[#1B5E20] text-white font-semibold py-4 px-8  text-center shadow-md hover:bg-[#2e532a] transition-colors duration-200"
            >
              For Plants Bookings
            </a>
            <a
              href="#"
              download
              className="w-full md:w-auto bg-white border-2 border-[#3A6B35] text-[#3A6B35] font-semibold py-4 px-8  text-center shadow-md hover:bg-gray-50 transition-colors duration-200"
            >
              Planting Material Allocation Process (Download)
            </a>
            <a
              href="#"
              download
              className="w-full md:w-auto bg-white border-2 border-[#3A6B35] text-[#3A6B35] font-semibold py-4 px-8  text-center shadow-md hover:bg-gray-50 transition-colors duration-200"
            >
              Allotment Process For Planting Material (Download)
            </a>
          </div>

          <div className=" text-center max-w-3xl mx-auto mb-12">
            <Typography variant="paragraphSmall" className="font-semibold mb-4 text-gray-800">
              In The Absence Of The Correct Mobile Number, Email, It Will Not Be Possible To Inform
              About Plant Allotment.
            </Typography>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <Phone size={18} className="text-green-600" />
                <Typography variant="paragraphSmall">
                  Contact : Sh. B K Pushkar (M) +91 9469033415,
                </Typography>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail size={18} className="text-green-600" />
                <Typography variant="paragraphSmall">
                  Email Us At : Cishnursery@Gmail.Com
                </Typography>
              </div>
            </div>
          </div>

          <div className="w-full mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-300 h-64 "></div>
              <div className="bg-gray-300 h-64 "></div>
              <div className="bg-gray-300 h-64 "></div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3  transition-colors ${
                  activeIndex === index ? "bg-[#3A6B35]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default NurseryPage;
