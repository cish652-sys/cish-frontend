"use client";

import React from "react";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { SectionHeader } from "@/designs/organisms/SectionHeader";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";

// data (exact wording you provided)
const auditoriumFacilities = [
  {
    title: "Seating capacity",
    detail: "270 persons (push back type Godrej seats)",
  },
  {
    title: "Stage",
    detail: "Wooden floor. Motorized curtains on front and rear side.",
  },
  {
    title: "Audio visual facility",
    detail: `5000 lumens projector with desktop computer / lap top facility. Full length screen folding type.
Stage mikes – 6 nos.
Cordless mike – 1 no.
Collar mike – 2 nos.
Stage light (spot and multi color) for cultural programmes.`,
  },
  {
    title: "Air-conditioned VIP Dining lounge",
    detail: "24 persons.",
  },
  {
    title: "Air-conditioned lounge",
    detail: "250 persons.",
  },
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
            Centrally air-conditioned hall, lounge, VIP cafeteria with capacity of hall for 270
            persons. 9+2 persons may utilize stage . Fire protection system (smoke detectors, laser
            beam sensor and fire extinguishers) available out side and inside the hall. Stage light
            facility is available with power backup of 125 KVA generator with 24 hrs power supply.
          </h2>
        </div>
      </section>

      {/* Facilities Table (Matching Library Style) */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        <div className="container max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-green-800 font-bold">FACILITIES AVAILABLE</h2>

          <div className="overflow-x-auto shadow-lg border border-gray-300">
            <table className="w-full border border-gray-300">
              <tbody>
                {auditoriumFacilities.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-lime-100" : "bg-lime-50"}>
                    {/* Left title column */}
                    <td className="font-semibold text-gray-800 border border-gray-300 p-3 w-1/3">
                      {item.title}
                    </td>

                    {/* Right detail column */}
                    <td className="text-gray-700 border border-gray-300 p-3 whitespace-pre-line">
                      {item.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-4">
            <strong>Charges:</strong> ICAR-CISH has an auditorium with a capacity to accommodate 270
            persons with audio-visual projection and address systems. It is available for conference
            on approved charge basis (Rs 25,000/- per day).
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Auditorium;
