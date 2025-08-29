import React from "react";
import { Card, CardContent } from "../atoms/card";
import Icon from "../atoms/ImpactCard/Icon";
import Title from "../atoms/ImpactCard/Title";

interface ImpactCardProps {
  icon: string;
  number: string;
  text: string;
  highlight?: boolean;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, number, text, highlight }) => {
  return (
    <Card
      className={`w-[288px] h-[164px] flex flex-col justify-center items-center text-center  border shadow-sm ${
        highlight ? "bg-green-50 shadow-md" : "bg-white"
      }`}
    >
      <div className="w-full ml-[14px] mt-[14px]">
        <Icon src={icon} alt={text} className="w-10 h-10" />
      </div>

      <CardContent className="flex flex-row items-start justify-start space-x-4">
        {/* Icon */}
        {/* Number + Title */}
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-green-800">{number}</span>
          <p className="mt-1 text-green-900 text-2xl font-bold text-center leading-snug">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactCard;
