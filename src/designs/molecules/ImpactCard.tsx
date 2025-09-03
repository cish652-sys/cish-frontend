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
  const hoverColors = [
    "hover:bg-[#DDA73A]",
    "hover:bg-[#407F46] hover:text-white",
    "hover:bg-[#F26A2D]",
    "hover:bg-[#59BA48]",
    "hover:bg-[#BF8D2C]",
    "hover:bg-[#4CA146]",
  ];

  return (
    <Card
      className={`w-[163px] h-[140px] border shadow-sm transition-colors duration-300 flex flex-col items-center justify-between py-3
    ${highlight ? "bg-green-50 shadow-md" : "bg-white"} ${hoverColors[index ?? 0]}`}
    >
      {/* Number + Text (Top aligned on same vertical line) */}
      <div className="flex items-baseline justify-center gap-1 text-left w-full ml-4 pr-5 ">
        <Typography variant="contentTitle" className="leading-tight">
          {number}
        </Typography>
        <Typography variant="cardHeading" className="leading-tight uppercase">
          {text}
        </Typography>
      </div>

      {/* Icon (Bottom Part) */}
      <div className="flex items-center justify-center mt-2">
        <Image src={icon} alt="image" width={48} height={48} />
      </div>
    </Card>
  );
};

export default ImpactCard;
