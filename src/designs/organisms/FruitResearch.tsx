"use client";
import React from "react";
import Typography from "../atoms/Typography";
import Image from "next/image";

const fruitItems = [
  { id: "mango", label: "Mango", icon: "/icons/Mango.svg" },
  { id: "guava", label: "Guava", icon: "/icons/guava.svg" },
  { id: "wood-apple", label: "Wood Apple", icon: "/icons/Apple.svg" },
  { id: "black-plum", label: "Black Plum", icon: "/icons/Plum.svg" },
  { id: "gooseberry", label: "Indian Gooseberry", icon: "/icons/Gooseberry.svg" },
  { id: "banana", label: "Banana", icon: "/icons/Banana.svg" },
  { id: "avocado", label: "Avocado", icon: "/icons/Avacardo.svg" },
];

export const FruitResearch: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12 text-center container">
      <Typography variant="headingLarge">
        We are pioneers in subtropical fruit research spanning from climate <br /> resilient
        varieties to value chain research.
      </Typography>
      <div className="flex flex-wrap justify-center gap-15 mt-6">
        {fruitItems.map((fruit) => (
          <div key={fruit.id} className="flex flex-col items-center p-2 group ">
            <div className="border hover:shadow-md p-2 flex items-center justify-center w-24 h-24 group-hover:bg-green-50 group-hover:border-green-600">
              <Image
                src={fruit.icon}
                alt={fruit.label}
                width={78}
                height={78}
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-sm font-semibold uppercase text-gray-700 group-hover:text-green-700">
              {fruit.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
