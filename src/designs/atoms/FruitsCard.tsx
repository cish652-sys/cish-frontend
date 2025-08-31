// src/components/molecules/FruitCard.tsx
"use client";

import { Card, CardContent } from "./card";
import Icon from "./ImpactCard/Icon";
import Typography from "./Typography";


interface FruitCardProps {
  icon: string; // svg path
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const FruitsCard: React.FC<FruitCardProps> = ({ icon, label, active, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-6 cursor-pointer border rounded-xl transition 
        ${active ? "bg-green-100 border-green-600 shadow-md" : "hover:bg-gray-50"}`}
    >
      <CardContent className="flex flex-col items-center space-y-3 p-0">
        <Icon src={icon} alt={label} className="w-12 h-12 text-green-700" />
        <Typography
          variant="bodySmall"
          weight="bold"
          className={`uppercase ${active ? "text-green-700" : "text-gray-800"}`}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};
