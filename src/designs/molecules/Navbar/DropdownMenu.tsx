"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface DropdownMenuProps {
  items: string[];
  isVisible: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  isVisible,
  onMouseEnter,
  onMouseLeave,
}) => {
  const router = useRouter();

  return (
    <div
      className={`
        absolute top-full left-0 min-w-[286px] z-50
        transition-all duration-300 ease-out
        ${
          isVisible
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-black/70 shadow-2xl overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-3 text-sm text-white hover:bg-[#67B96D] cursor-pointer transition-colors duration-150"
            onClick={() => router.push("/")} // ✅ Always go to homepage for now
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
