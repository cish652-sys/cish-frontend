"use client";
import { Input } from "@/designs/atoms/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex w-[209px]">
      <Input
        placeholder="Search Here......"
        className="rounded-t-md rounded-b-none border-b-2 border-[#162F6A] h-[39px] px-3 text-sm"
      />

      <div className="flex items-center justify-center w-10 border-b-2 border-[#162F6A] rounded-t-md rounded-b-none bg-white">
        <Search className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};
