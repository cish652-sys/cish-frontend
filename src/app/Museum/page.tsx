"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

const carouselImages = [
  {
    src: "/icons/museum1.svg", // Example path
    alt: "Photo of the museum exterior",
  },
  {
    src: "/icons/museum2.svg", // Example path
    alt: "Inside the museum, Section 1",
  },
  {
    src: "/icons/museum3.svg", // Example path
    alt: "Museum artifacts on display",
  },
];

const Museum = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Museum", href: "/Museum" },
        ]}
        iconProps={true}
        title="ICAR-CISH MUSEUM"
        description={[""]}
      />

      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-4xl mx-auto flex flex-col gap-8">
          <h2 className="text-gray-700">
            The ICAR-CISH museum was opened for the public on the 39th Foundation Day of the
            institute, i.e., June 1, 2022, in the gracious presence of Sh. Dinesh Pratap Singh,
            Hon’ble Minister of State (Independent Charge) Horticulture, Agricultural Marketing,
            Agricultural Foreign Trade and Agricultural Exports, Government of Uttar Pradesh and
            Smt. Jai Devi, Hon’ble MLA from Malihabad, Lucknow. As the Chief Guest of the Foundation
            Day, the Minister addressed farmers, institute staff and invited guests. The inaugural
            function was presided over by Dr. Neelima Garg, Director, ICAR-CISH.
          </h2>
        </div>
      </section>

      <section className="bg-[#FBFBF8] py-12">
        <div className="container mx-auto px-4">
          <div className="w-full mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {carouselImages.map((image, index) => (
                <div key={index} className="h-64 rounded overflow-hidden relative">
                  <Image src={image.src} alt={image.alt} layout="fill" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            {/* Update this to map over your new array */}
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  // Note: This logic just highlights the first dot.
                  // A real carousel would need React state to track the active slide.
                  index === 0 ? "bg-[#3A6B35]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Museum Sections */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-16">
          <h2 className="text-center text-green-800 font-bold text-2xl mb-10">
            In ICAR-CISH museum, there are seven major sections.
          </h2>

          {/* Section 1 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-green-800 font-bold">SECTION 1: INSTITUTE HISTORY & MANDATES</h2>
            <p className="text-gray-700 leading-relaxed">
              This section deals with the historical timeline of establishment of the institute, its
              mandates, objectives, as well as the organizational setup. It highlights the
              foundation, development milestones, and institutional evolution of ICAR-CISH.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/museum1.svg"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden">
                <Image
                  src="/icons/1a.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-green-800 font-bold">
              SECTION 2: CROP IMPROVEMENT & BIOTECHNOLOGY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This section pertains to crop improvement and biotechnology where genetic resources of
              mandate crops, identified varieties, minor fruit diversity, and research advancements
              in biotechnology have been showcased.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/2.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden">
                <Image
                  src="/icons/2a.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-green-800 font-bold">
              SECTION 3: CROP PRODUCTION SYSTEM MANAGEMENT
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This section displays technologies developed on crop production system management
              including high density planting, canopy architecture management, rejuvenation of old
              orchards, nursery management, crop diversification, nutrient and water management,
              organic farming, protected cultivation, hydroponics and terrace gardening.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/3.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden">
                <Image
                  src="/icons/3a.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-green-800 font-bold">SECTION 4: PLANT PROTECTION</h2>
            <p className="text-gray-700 leading-relaxed">
              This section highlights plant protection technologies focusing on management of major
              pests and diseases of mango and guava, biological control techniques, insect trap
              designs and mushroom cultivation methods.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/4.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-green-800 font-bold">SECTION 5: VALUE ADDED PRODUCTS</h2>
            <p className="text-gray-700 leading-relaxed">
              This section showcases various value-added products from mango, guava, aonla, bael and
              jamun. It also demonstrates technologies for waste utilization, packaging, processing
              and harvesting tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/4.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/5a.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/5b.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden">
                <Image
                  src="/icons/5c.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-green-800 font-bold">SECTION 6: EXTENSION & OUTREACH PROGRAMMES</h2>
            <p className="text-gray-700 leading-relaxed">
              This section highlights outreach programmes including Farmers FIRST, SCSP, MG-MG and
              other developmental initiatives. Activities of Regional Station, Malda and KVK Malda
              (West Bengal) are also included.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/6.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/6a.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-green-800 font-bold">SECTION 7: MANGO GALLERY</h2>
            <p className="text-gray-700 leading-relaxed">
              The Mango Gallery displays clay models of major mango varieties from different regions
              of India, including promising hybrids developed by ICAR-CISH. The photograph of the
              250-year-old ‘Dashehari’ mother plant is a major attraction. Nutritional facts,
              varietal characteristics, greenhouse and hydroponic models, organic input systems,
              insect traps, packaging boxes and harvesting tools are also featured.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-60 rounded overflow-hidden">
                <Image
                  src="/icons/7.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/7a.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/7b.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-60 rounded overflow-hidden ">
                <Image
                  src="/icons/7c.png"
                  alt="Museum Section Icon 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Museum;
