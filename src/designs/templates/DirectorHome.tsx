"use client";
import React from "react";
import DirectorSection from "@/designs/organisms/DirectorSection";
import director from "../public/images/Director.svg";

const HomeWithDirector: React.FC = () => {
  return (
    <main>
      <DirectorSection imageSrc={director} />
    </main>
  );
};

export default HomeWithDirector;
