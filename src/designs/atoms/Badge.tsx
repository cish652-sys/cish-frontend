"use client";
import React from "react";

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => (
  <span className="ml-2 text-xs font-semibold bg-green-600 text-white px-2 py-0.5 ">
    {text}
  </span>
);
