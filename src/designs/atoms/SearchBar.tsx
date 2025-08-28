"use client";
import { Input } from "@/designs/atoms/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-60">
      <Input
        placeholder="Search Here......"
        className="pl-4 pr-10 py-2 w-[209px] h-[39px] text-sm rounded-md border"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
    </div>
  );
};
