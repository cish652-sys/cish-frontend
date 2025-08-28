import React from "react";
import ImpactCard from "../molecules/ImpactCard";

const impacts = [
  { icon: "/icons/icon-park-outline_sapling.svg", number: "1", text: "Farmer Empowerment" },
  { icon: "/icons/si_library-books-line.svg", number: "2", text: "Transparency & Accountability", highlight: true },
  { icon: "/icons/Vector.svg", number: "3", text: "Market Linkages & Economic Growth" },
  { icon: "/icons/streamline-plump_deepfake-technology-1.svg", number: "4", text: "Technological & Advisory Services" },
];

const KeyImpacts: React.FC = () => {
  return (
    <section className="px-4 md:px-12 py-10">
      <h2 className="text-green-800 font-bold text-lg flex items-center gap-2 mb-8">
        🌱 Key Impacts
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {impacts.map((impact, idx) => (
          <ImpactCard key={idx} {...impact} />
        ))}
      </div>
    </section>
  );
};

export default KeyImpacts;
