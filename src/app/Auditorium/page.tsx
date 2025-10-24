"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

const auditoriumFacilities = [
  { sr: 1, facility: "Seating capacity 270 persons (push back type Godrej seats)" },
  { sr: 2, facility: "Stage wooden flooring with motorized curtains (front and rear)" },
  { sr: 3, facility: "Audio visual facility" },
  {
    sr: 4,
    facility:
      "5000 lumens projector with desktop / laptop connectivity and full length folding screen",
  },
  { sr: 5, facility: "Stage microphones – 6 nos." },
  { sr: 6, facility: "Cordless microphone – 1 no." },
  { sr: 7, facility: "Collar microphone – 2 nos." },
  { sr: 8, facility: "Stage lights (spot + multi-color) for cultural programs" },
  { sr: 9, facility: "Air-conditioned VIP Dining Lounge (24 persons)" },
  { sr: 10, facility: "Air-conditioned general lounge (250 persons)" },
];

const Auditorium = () => {
  return (
    <main>
      <Header />
      <ResponsiveNavbar />

      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "CISH Auditorium" }]}
        iconProps={true}
        title="CISH AUDITORIUM"
        description={[""]}
      />

      {/* Description */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="container max-w-5xl mx-auto flex flex-col gap-6">
          <h2 className="text-gray-700 leading-relaxed">
            The Institute has a centrally air-conditioned auditorium hall with a seating capacity of
            270 persons. The stage can accommodate 9+2 persons and is equipped with motorized
            curtains, stage lighting, smoke detectors, laser beam sensors, fire extinguishers, and
            power backup through a 125 KVA generator. The auditorium is equipped with high-quality
            audio-visual systems including a 5000 lumens projector, microphones, laptop
            connectivity, and a full-length folding display screen. Lounge facilities include an
            air-conditioned VIP dining lounge (24 persons) and a general lounge (250 persons). The
            auditorium is available for conferences and events on an approved charge basis of
            ₹25,000/- per day.
          </h2>
        </div>
      </section>

      {/* Facilities Table (Matching Library Style) */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">FACILITIES AVAILABLE</h2>

          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border-collapse table-fixed">
              <thead className="bg-lime-200">
                <tr>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Sr. No.
                  </th>
                  <th className="p-3 text-left font-semibold text-gray-800 border-b border-gray-300">
                    Facility Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {auditoriumFacilities.map((item, index) => (
                  <tr key={item.sr} className={index % 2 === 0 ? "bg-white" : "bg-lime-50"}>
                    <td className="p-3 border-t border-gray-300 text-gray-700 w-24">{item.sr}</td>

                    <td className="p-3 border-t border-gray-300 text-gray-700 w-full">
                      {item.facility}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-4">
            <strong>Charges:</strong> ₹25,000/- per day (for approved conferences & events).
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Auditorium;
