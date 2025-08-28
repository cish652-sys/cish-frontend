"use client";

import { FruitCard } from "../atoms/FruitCard";

type Fruit = {
  name: string;
  icon: string;
};

type FruitGridProps = {
  fruits: Fruit[];
  activeFruit?: string;
};

export const FruitGrid: React.FC<FruitGridProps> = ({ fruits, activeFruit }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6">
      {fruits.map((fruit) => (
        <FruitCard
          key={fruit.name}
          name={fruit.name}
          icon={fruit.icon}
          isActive={activeFruit === fruit.name}
        />
      ))}
    </div>
  );
};
