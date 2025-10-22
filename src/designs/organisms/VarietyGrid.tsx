"use client";

import { DivisionVarietyCard } from "../molecules/DivisionVarietyCard";
import { cn } from "@/lib/utils"; // Make sure to import cn

export interface VarietyItem {
  id: string;
  title: string;
  description: string[];
  image?: string;
  href?: string;
}

interface VarietyGridProps {
  items: VarietyItem[];
  cols?: number;
}

export const VarietyGrid: React.FC<VarietyGridProps> = ({
  items,
  cols = 4, 
}) => {
  const gridColsClass = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[cols] || "lg:grid-cols-4"; 

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-6",
        gridColsClass 
      )}
    >
      {items.map((item) => (
        <DivisionVarietyCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          href={item.href}
        />
      ))}
    </div>
  );
};