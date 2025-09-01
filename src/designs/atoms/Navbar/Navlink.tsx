"use client";
import React from "react";
import Link from "next/link";
import routes from "@/routes";

interface NavLinkProps {
  children: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  hasDropdown = false,
  isActive = false,
  isHovered = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => (
  <Link
    href={routes[children] || "/"}
    onClick={onClick}
    className={`
      relative px-2 2xl:px-3 py-6 text-xs font-medium cursor-pointer transition-all duration-200
      ${
        children === "HOME" && isActive
          ? "text-[#1B5E20]"
          : isHovered || isActive
            ? "bg-[#67B96D] text-white"
            : children === "HOME"
              ? "text-[#1B5E20] hover:text-[#1B5E20]"
              : "text-gray-800 hover:bg-[#67B96D] hover:text-white"
      }
      ${hasDropdown ? "flex items-center gap-1" : ""}
      whitespace-nowrap select-none
    `}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
    {hasDropdown && (
      <svg
        className={`w-3 h-3 transition-transform duration-200 ${isHovered ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    )}

    {children === "HOME" && isActive && (
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1B5E20]"></div>
    )}
  </Link>
);
