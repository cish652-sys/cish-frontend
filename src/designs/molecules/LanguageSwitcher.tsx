"use client";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="h-5 w-5 text-gray-700" />
      <span className="text-sm">A</span>
    </div>
  );
};
