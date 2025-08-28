"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex-1 py-2 text-center font-medium border-b-2 transition-all",
      active
        ? "bg-green-800 text-white border-green-800"
        : "bg-white text-green-800 border-transparent hover:bg-green-50"
    )}
  >
    {label}
  </button>
);
