"use client";

import { FruitGrid } from "../molecules/FruitGrid";

const fruits = [
  { name: "Mango", icon: "../public/images/mango.svg" },
  { name: "Guava", icon: "/fruits/guava.svg" },
  { name: "Wood Apple", icon: "/fruits/woodapple.svg" },
  { name: "Black Plum", icon: "/fruits/blackplum.svg" },
  { name: "Indian Gooseberry", icon: "/fruits/gooseberry.svg" },
  { name: "Banana", icon: "/fruits/banana.svg" },
  { name: "Avocado", icon: "/fruits/avocado.svg" },
];

export const FruitsSection = () => {
  return (
    <section className="py-10 bg-[#fafaf4]">
      <h2 className="text-center text-lg md:text-xl font-bold text-green-800 mb-6">
        WE ARE PIONEERS IN SUBTROPICAL FRUIT RESEARCH SPANNING FROM CLIMATE
        RESILIENT VARIETIES TO VALUE CHAIN RESEARCH.
      </h2>
      <FruitGrid fruits={fruits} activeFruit="Mango" />
    </section>
  );
};
