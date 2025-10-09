"use client";
import React from "react";
import Image from "next/image";

const fruitItems = [
  { id: "mango", label: "Mango", icon: "/icons/mangonew.svg" },
  { id: "guava", label: "Guava", icon: "/icons/guava.svg" },
  { id: "wood-apple", label: "Bael", icon: "/icons/baelnew.svg" },
  { id: "black-plum", label: "Jamun", icon: "/icons/cherrynew.svg" },
  { id: "gooseberry", label: "Indian Gooseberry", icon: "/icons/onion.svg" },
  { id: "banana", label: "Banana", icon: "/icons/banananew.svg" },
  { id: "avocado", label: "Avocado", icon: "/icons/avocadonew.svg" },
];

export const FruitResearch: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12 text-center container">
      <p className="text-[#1B5E20] text-[25px] font-bold">
        WE ARE PIONEERS IN SUBTROPICAL FRUIT RESEARCH SPANNING FROM CLIMATE <br /> RESILIENT
        VARIETIES TO VALUE CHAIN RESEARCH.
      </p>
      <div className="flex flex-wrap justify-center gap-15 mt-6">
        {fruitItems.map((fruit) => (
          <div key={fruit.id} className="flex flex-col items-center p-2 group ">
            <div className="border hover:shadow-md p-2 flex items-center justify-center w-24 h-24 group-hover:bg-green-50 group-hover:border-green-600">
              <Image
                src={fruit.icon}
                alt={fruit.label}
                width={50}
                height={fruit.id === "avocado" ? 50 : 60}
                className={`object-contain ${fruit.id === "avocado" ? "h-[50px] w-auto" : ""}`}
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
