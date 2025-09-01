import React from "react";
import { Search } from "lucide-react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={`outline-none ${className}`} {...props} />;
};

export const SearchBar = () => {
  return (
    <div className="flex items-stretch w-[209px] rounded-t-[10px] border-x border-t border-[#C7C7C7] border-b-2 border-b-[#162F6A] overflow-hidden">
      <Input
        placeholder="Search Here..."
        className="flex-1 bg-transparent px-3 py-2 text-gray-700 placeholder-gray-500 text-sm border-0 min-w-0"
      />

      <div className="flex items-center justify-center w-12 bg-white border-l border-gray-300 flex-shrink-0">
        <Search className="h-5 w-5 text-[#8A8989] stroke-2" />
      </div>
    </div>
  );
};
