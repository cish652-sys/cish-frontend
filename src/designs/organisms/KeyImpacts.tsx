"use client";

import React from "react";
import ImpactCard from "../molecules/ImpactCard";
import Typography from "../atoms/Typography";
import Icon from "../atoms/ImpactCard/Icon";

const impacts = [
  { icon: "icons/E_SDG_Icons-02-removebg-preview.svg", number: "2", text: "ZERO HUNGER" },
  {
    icon: "icons/E_SDG_Icons-13-removebg-preview.svg",
    number: "13",
    text: "climate action",
  },
  {
    icon: "/icons/E_SDG_Icons-09-removebg-preview.svg",
    number: "9",
    text: "Industry, Innovation and Infrastructure",
  },
  {
    icon: "/icons/E_SDG_Icons-15-removebg-preview.svg",
    number: "15",
    text: "Life on land",
  },
  {
    icon: "/icons/E_SDG_Icons-12-removebg-preview 2.svg",
    number: "12",
    text: " Sustainable production and consumption.",
  },
  {
    icon: "/icons/E_SDG_Icons-03-removebg-preview.svg",
    number: "3",
    text: "Good Health & well being",
  },
];

const KeyImpacts: React.FC = () => {
  // Duplicate the impacts array for seamless infinite scroll
  const duplicatedImpacts = [...impacts, ...impacts];

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <Icon src="/icons/registration-paper 1.svg" alt="Trending" className="w-0 h-0" />
          <Typography variant="sectionHeading">Key Impacts</Typography>
        </div>

        {/* Infinite Scroll Container */}
        <div className="overflow-hidden relative">
          <div
            className="flex gap-4 animate-infinite-scroll"
            style={{
              width: `${duplicatedImpacts.length * 180}px`, // 163px card width + 17px gap
            }}
          >
            {duplicatedImpacts.map((impact, idx) => (
              <div key={`${impact.number}-${idx}`} className="flex-shrink-0">
                <ImpactCard {...impact} />
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for infinite scroll animation */}
        <style jsx>{`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${impacts.length * 180}px);
            }
          }

          .animate-infinite-scroll {
            animation: infinite-scroll 20s linear infinite;
          }

          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default KeyImpacts;
