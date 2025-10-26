"use client";

import React, { useState } from "react";
import Typography from "../atoms/Typography";
import { SectionHeader } from "../organisms/SectionHeader";
import { Logo } from "../atoms/Logo";
import ResponsiveNavbar from "../organisms/Navbar/NavigatioMenu";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/FooterOrganisms/Footer";
import { Mail, Phone } from "lucide-react";
import ImageCarousel from "../atoms/ImageCarousel";

const NurseryPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [1, 2, 3, 4];

  // Add your nursery images here - just provide the paths
  const nurseryImages = [
    "/icons/n1.jpg",
    "/icons/n2.jpg",
    "/icons/n3.jpg",
    "/icons/n4.jpg",
    "/icons/n5.jpg",
    "/icons/n6.jpg",
    "/icons/n7.jpg",
    "/icons/n8.jpg",
    "/icons/n9.jpg",
    "/icons/n10.jpg",
    "/icons/n11.jpg",
    "/icons/n12.jpg",
    "/icons/n13.jpg",
    "/icons/n14.jpg",
    "/icons/n15.jpg",
    "/icons/n16.jpg",
    "/icons/n17.jpg",
  ];

  return (
    <main>
      <Header />
      <ResponsiveNavbar />
      {/* <section className="relative w-full">
        <Logo src="/icons/bannerblank.svg" alt="Website Banner" responsive />
      </section> */}

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
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-8">
          <h2 className="text-gray-700">
            ICAR-CISH have world class scientific nursery (located at state highway -25 at
            Rehmankhera, Kakori, Lucknow) facility with 3/3-star rating and recognized by National
            Horticultural Board (NHB). The area of nursery maintained, span over 15.5 ha. area. The
            nursery produces genetically pure and disease-free quality planting material of
            different varieties of horticultural crops viz., mango, guava, aonla, bael, litchi,
            lemon, jamun, grape and banana for the farmers, gardeners, private and public
            organizations.
          </h2>
        </div>
      </section>

      {/* Nursery Image Gallery Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <Typography variant="sectionHeading" className="mb-2">
              Our Nursery Gallery
            </Typography>
            <p className="text-gray-600">
              Explore our world-class nursery facilities and quality planting materials
            </p>
          </div>
          <ImageCarousel
            images={nurseryImages}
            autoPlayInterval={4000}
            showThumbnails={true}
            aspectRatio="video"
          />
        </div>
      </section>

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-8">
          <h2 className="text-gray-700 font-semibold leading-relaxed">
            You can request the planting materials you need from ICAR-CISH, Lucknow, by using the
            link below. Please send your request between 1st January and 30th June each year.
            Requests will be valid for the following year.
            <br />
            <br />
            {/* आप नीचे दिए गए लिंक का उपयोग करके आईसीएआर-सीआईएसएच, लखनऊ से अपनी आवश्यक रोपण सामग्री का
            अनुरोध कर सकते हैं। कृपया प्रत्येक वर्ष 1 जनवरी से 30 जून के बीच अपना अनुरोध भेजें।
            प्रतिवर्ष 30 जून तक दिये गये मांगपत्र उसी वर्ष के लिए मान्य होंगे।{" "} */}
          </h2>
        </div>
      </section>
      <div className="bg-[#FBFBF8] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="#"
              className="w-full md:w-auto text-[#1B5E20] border-2 border-[#1B5E20] font-semibold py-4 px-8 text-center shadow-md hover:bg-[#1B5E20] hover:text-white transition-colors duration-200"
            >
              For Plants Bookings
            </a>
            <a
              href="#"
              download
              className="w-full md:w-auto text-[#1B5E20] border-2 border-[#1B5E20] font-semibold py-4 px-8 text-center shadow-md hover:bg-[#1B5E20] hover:text-white transition-colors duration-200"
            >
              Planting Material Allocation Process (Download)
            </a>
            <a
              href="#"
              download
              className="w-full md:w-auto text-[#1B5E20] border-2 border-[#1B5E20] font-semibold py-4 px-8 text-center shadow-md hover:bg-[#1B5E20] hover:text-white transition-colors duration-200"
            >
              Allotment Process For Planting Material (Download)
            </a>
          </div>

          <div className=" text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-gray-700">
              In The Absence Of The Correct Mobile Number, Email, It Will Not Be Possible To Inform
              About Plant Allotment.
            </h2>
            <br />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-gray-700">
              {/* Phone */}
              <div className="flex items-center justify-center gap-2">
                <Phone size={18} className="text-green-600" />
                <Typography variant="paragraphSmall">
                  Contact : Sh. B K Pushkar (M)&nbsp;
                  <a
                    href="tel:+919469033415"
                    className="text-green-700 font-semibold hover:underline"
                  >
                    +91 9469033415
                  </a>
                </Typography>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center gap-2">
                <Mail size={18} className="text-green-600" />
                <Typography variant="paragraphSmall">
                  Email Us At :&nbsp;
                  <a
                    href="mailto:cishnursery@gmail.com"
                    className="text-green-700 font-semibold hover:underline normal-case"
                  >
                    cishnursery@gmail.com
                  </a>
                </Typography>
              </div>
            </div>
          </div>

          {/* <div className="w-full mb-6">
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
          </div> */}
        </div>
        
      </div>

      <Footer />
    </main>
  );
};

export default NurseryPage;
