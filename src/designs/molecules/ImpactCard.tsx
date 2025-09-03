import React from "react";
import { Card } from "../atoms/card";
import Typography from "../atoms/Typography";
import Image from "next/image";

interface ImpactCardProps {
  icon: string;
  number: string;
  text: string;
  highlight?: boolean;
  index?: number; // add index prop
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, number, text, highlight, index }) => {
  const staticColors = [
    "bg-[#DDA73A] text-white",
    "bg-[#407F46] text-white",
    "bg-[#F26A2D] text-white",
    "bg-[#59BA48] text-white",
    "bg-[#BF8D2C] text-white",
    "bg-[#4CA146] text-white",
  ];

  return (
    <Card
      className={`w-[163px] h-[140px] border shadow-sm transition-colors duration-300 flex flex-col items-center justify-between py-3
      ${highlight ? "bg-green-50 shadow-md" : staticColors[index ?? 0]}`}
    >
      {/* Number + Text (Top aligned on same vertical line) */}
      <div className=" flex items-baseline justify-center gap-1 text-left w-full ml-4 pr-5 ">
        <Typography  variant="contentTitle" className="leading-tight !text-white">
          {number}
        </Typography>
        <Typography variant="cardHeading" className="leading-tight !text-white uppercase">
          {text}
        </Typography>
      </div>

      {/* Icon (Bottom Part) */}
      <div className="flex items-center justify-center mt-2 ">
        <Image src={icon} alt="image" width={48} height={48} className="!text-white"/>
      </div>
    </Card>
  );
};

export default ImpactCard;
