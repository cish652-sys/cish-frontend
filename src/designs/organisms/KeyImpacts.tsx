import React from "react";
import ImpactCard from "../molecules/ImpactCard";

const impacts = [
  { icon: "/icons/keyIcon1.svg", number: "1", text: "Farmer Empowerment" },
  {
    icon: "/icons/si_library-books-line.svg",
    number: "2",
    text: "Transparency & Accountability",
  },
  { icon: "/icons/Vector.svg", number: "3", text: "Market Linkages & Economic Growth" },
  {
    icon: "/icons/streamline-plump_deepfake-technology-1.svg",
    number: "4",
    text: "Technological & Advisory Services",
  },
  {
    icon: "/icons/streamline-plump_deepfake-technology-1.svg",
    number: "5",
    text: "Technological & Advisory Services",
  },
  {
    icon: "/icons/streamline-plump_deepfake-technology-1.svg",
    number: "6",
    text: "Technological & Advisory Services",
  },
];

const KeyImpacts: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-green-800 font-bold text-lg flex items-center gap-2 mb-8">
          🌱 Key Impacts
        </h2>

        <div className="flex justify-between gap-2 flex-wrap">
          {impacts.map((impact, idx) => (
            <ImpactCard key={idx} {...impact} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyImpacts;
