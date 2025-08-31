"use client";
import React, { useState } from "react";

interface NavLinkProps {
  children: React.ReactNode;
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
  <div
    className={`
      relative px-3 py-2 text-sm font-medium cursor-pointer transition-all duration-200
      ${isHovered || isActive ? "bg-[#67B96D] text-white" : "text-gray-800 hover:bg-[#67B96D] hover:text-black"}
      ${hasDropdown ? "flex items-center gap-1" : ""}
      whitespace-nowrap select-none
    `}
    onClick={onClick}
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
  </div>
);
