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
    text: " Sustainable production and consumption.",
  },
  {
    icon: "/icons/E_SDG_Icons-03-removebg-preview.svg",
    number: "3",
    text: "Good Health & well being",
  },
];

const KeyImpacts: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center gap-2">
          <Icon src="/icons/registration-paper 1.svg" alt="Trending" className="w-0 h-0" />
          <Typography variant="sectionHeading"> Key Impacts</Typography>
        </div>
        <div className="flex justify-between gap-2 flex-wrap mt-6 pb-12">
          {impacts.map((impact, idx) => (
            <ImpactCard key={idx} {...impact} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyImpacts;
