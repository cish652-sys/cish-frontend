import React from "react";
import { Search } from "lucide-react";

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={`outline-none ${className}`} {...props} />;
};

export const ImageSearchBar = () => {
  return (
    <div className="relative flex items-center w-full md:w-[200px]">
      <Input
        placeholder="Search..."
        className="w-full h-9 px-3 pr-10 py-2 border border-gray-300  text-sm focus:ring-1 focus:ring-gray-400"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};
