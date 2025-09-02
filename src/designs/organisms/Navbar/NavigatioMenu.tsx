"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { NavLink } from "@/designs/atoms/Navbar/Navlink";
import { DropdownMenu } from "@/designs/molecules/Navbar/DropdownMenu";

interface NavItem {
  label: string;
  dropdownItems?: string[];
}

const ResponsiveNavbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("HOME");
  const [hoveredItem, setHoveredItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigationItems: NavItem[] = [
    { label: "HOME" },
    {
      label: "ABOUT US",
      dropdownItems: [
        "Institute",
        "Field Gene Bank",
        "Divisions (Full details, staff information, etc.)",
        "PME",
        "ITMu/IPR Cells",
        "Agri Business Incubation Center (ABI)",
        "AKMU",
        "Regional Research Station",
        "Krishi Vigyan Kendra",
        "Cadres Strength",
        "Staff",
        "Citizen Charter",
      ],
    },
    {
      label: "RESEARCH",
      dropdownItems: ["Institute Funded Project", "Externally Funded Projects", "Collaborations"],
    },
    {
      label: "PUBLICATIONS",
      dropdownItems: [
        "Annual Reports",
        "Research Publications",
        "Newsletter (Subscription)",
        "Udyan Rashmi (Subscription)",
        "CISH Publications (Paid & Free)",
        "Vision 2050 ",
      ],
    },
    { label: "TECHNOLOGIES" },
    {
      label: "VARIETIES",
      dropdownItems: ["Climate Resilient", "Nutraceutical Rich"],
    },
    {
      label: "FOR FARMERS",
      dropdownItems: [
        "Agro Advisory",
        "National Farmer Portal (NFP)",
        "Plant Bookings",
        "Success Stories (of Farmers)",
        "Farmer Friendly Technologies",
      ],
    },
    { label: "NURSERY" },
    { label: "MEDIA" },
    { label: "CONTACT US" },
  ];

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const item = navigationItems.find((nav) => nav.label === label);
    if (item?.dropdownItems && item.dropdownItems.length > 0) {
      setHoveredItem(label);
    } else {
      setHoveredItem("");
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem("");
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem("");
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setExpandedMobileItem("");
  };

  const handleMobileItemClick = (label: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      setExpandedMobileItem(expandedMobileItem === label ? "" : label);
    } else {
      setActiveItem(label);
      setIsMobileMenuOpen(false);
      setExpandedMobileItem("");
    }
  };

  const handleMobileSubItemClick = (item: string) => {
    console.log(`Clicked: ${item}`);
    setIsMobileMenuOpen(false);
    setExpandedMobileItem("");
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-full mx-auto px-4">
        <div className="container hidden lg:flex items-center justify-center justify-evenly">
          {navigationItems.map((item) => {
            const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;
            const isHovered = hoveredItem === item.label;
            const isActive = activeItem === item.label;

            if (item.label === "TECHNOLOGIES" || item.label === "VARIETIES") {
              return (
                <Link
                  key={item.label}
                  href={`/${item.label.toLowerCase()}`}
                  onClick={() => setActiveItem(item.label)}
                >
                  <NavLink
                    hasDropdown={false}
                    isActive={isActive}
                    isHovered={isHovered}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                  </NavLink>
                </Link>
              );
            }

            // Default items
            return (
              <div key={item.label} className="relative">
                <NavLink
                  hasDropdown={hasDropdown}
                  isActive={isActive}
                  isHovered={isHovered}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.label}
                </NavLink>

                {hasDropdown && item.dropdownItems && (
                  <DropdownMenu
                    items={item.dropdownItems}
                    isVisible={isHovered}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* ✅ Mobile nav toggle */}
        <div className="lg:hidden overflow-y-auto flex items-center justify-between h-16">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67B96D]"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* ✅ Mobile dropdown */}
        <div
          className={`
            lg:hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? " opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-gray-50 mt-2 max-h-full overflow-y-auto">
            {navigationItems.map((item) => {
              const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;
              const isExpanded = expandedMobileItem === item.label;
              const isActive = activeItem === item.label;

              // ✅ TECHNOLOGIES + VARIETIES as links
              if (item.label === "TECHNOLOGIES" || item.label === "VARIETIES") {
                return (
                  <Link
                    key={item.label}
                    href={`/${item.label.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div
                      className={`
                        flex items-center justify-between px-6 cursor-pointer transition-colors duration-200
                        ${isActive ? "bg-[#67B96D] text-white" : "text-gray-700 hover:bg-[#67B96D] hover:text-white"}
                      `}
                    >
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                );
              }

              // Default
              return (
                <div key={item.label} className="border-b border-gray-200 last:border-b-0">
                  <div
                    className={`
                      flex items-center justify-between px-4 py-4 cursor-pointer transition-colors duration-200
                      ${
                        isActive && !hasDropdown
                          ? "bg-[#67B96D] text-white"
                          : "text-gray-700 hover:bg-[#67B96D] hover:text-white"
                      }
                    `}
                    onClick={() => handleMobileItemClick(item.label, hasDropdown || false)}
                  >
                    <span className="font-medium">{item.label}</span>
                    {hasDropdown && (
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>

                  {hasDropdown && item.dropdownItems && (
                    <div
                      className={`
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <div className="bg-white/50 max-h-[300px] overflow-y-auto">
                        {item.dropdownItems.map((subItem) => (
                          <div
                            key={subItem}
                            className="pl-8 pr-4 py-3 text-sm text-gray-600 hover:bg-[#67B96D] hover:text-white cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                            onClick={() => handleMobileSubItemClick(subItem)}
                          >
                            {subItem}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
