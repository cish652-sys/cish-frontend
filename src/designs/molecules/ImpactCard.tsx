import React from "react";
import { Card } from "../atoms/card";

interface ImpactCardProps {
  number: string;
  text: string;
  highlight?: boolean;
  index?: number; // add index prop
}

const ImpactCard: React.FC<ImpactCardProps> = ({ number, text, highlight, index }) => {
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
      className={`w-[163px] h-[140px] flex flex-col justify-center items-center text-center border shadow-sm transition-colors duration-300 ${
        highlight ? "bg-green-50 shadow-md" : "bg-white"
      } ${hoverColors[index ?? 0]}`}
    >
      <span className="text-3xl font-bold text-green-800">{number}</span>
      <p className="mt-1 text-green-900 text-sm font-bold text-center leading-snug">{text}</p>
    </Card>
  );
};

export default ImpactCard;
