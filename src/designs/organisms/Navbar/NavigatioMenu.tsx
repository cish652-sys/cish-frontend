"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { NavLink } from "@/designs/atoms/Navbar/Navlink";

const routes: Record<string, string> = {
  HOME: "/",
  "ABOUT US": "/",
  RESEARCH: "https://cish.in/cib_n.php",
  PUBLICATIONS: "/",
  TECHNOLOGIES: "/technologies",
  VARIETIES: "/varieties",
  "FOR FARMERS": "/",
  NURSERY: "https://cish.in/nursery_n.php",
  MEDIA: "/",
  "CONTACT US": "https://cish.in/contact_us.php",

  // ABOUT US dropdown
  "About Institute": "/AboutUs",
  "Field Gene Bank": "/FieldGeneBank",
  Divisions: "/Division",
  PME: "/staffs",
  "ITMu/IPR Cells": "/Itmu",
  "Agri Business Incubation Center": "/Abi",
  AKMU: "/about/akmu",
  "Regional Research Station": "https://cish.in/malda_n.php",
  "Krishi Vigyan Kendra": "https://cish.in/krishi-portal.php",
  "Cadres Strength": "/about/cadres-strength",
  Staff: "/staff",
  // "Citizen Charter": "/about/citizen-charter",
  "Citizen Charter": "/citizenCharter", // ← Keep this one
  Photos: "/Gallery",
  Videos: "/Gallery",

  // RESEARCH dropdown
  "Institute Funded Project": "/research/institute-funded",
  "Externally Funded Projects": "/ResearchFunded",
  Collaborations: "https://cish.in/collaboration_n.php",

  // PUBLICATIONS dropdown
  "Annual Reports": "https://cish.in/Annual.php",
  "Research Publications": "/publications/research",
  "Newsletter (Subscription)": "/publications/newsletter",
  "Udyan Rashmi (Subscription)": "/UdyanRashmi",
  "CISH Publications (Paid & Free)": "https://cish.in/cish-publication.php",
  "Vision 2050": "/vision2050",

  // VARIETIES dropdown
  "Climate Resilient": "/ClimateResilient",
  "Nutraceutical Rich": "/Nutraceutical",
  Varieties: "/varieties",

  // FOR FARMERS dropdown
  "Agro Advisory": "/AgroAdvisory",
  "CISH Farmer Portal (CFP)": "https://www.nationalfarmerportal.org/?lang=en",
  "Plant Bookings": "/farmers/plant-bookings",
  "Success Stories (of Farmers)": "https://cish.in/success-stories.php",
  "Farmer Friendly Technologies": "/farmers/technologies",
};

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
        "About Institute",
        "Field Gene Bank",
        "Divisions",
        "PME",
        "ITMu/IPR Cells",
        "Agri Business Incubation Center",
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
        "Vision 2050",
      ],
    },
    { label: "TECHNOLOGIES" },
    {
      label: "VARIETIES",
      dropdownItems: ["Varieties", "Climate Resilient", "Nutraceutical Rich"],
    },
    {
      label: "FOR FARMERS",
      dropdownItems: [
        "Agro Advisory",
        "CISH Farmer Portal (CFP)",
        "Plant Bookings",
        "Success Stories (of Farmers)",
        "Farmer Friendly Technologies",
      ],
    },
    { label: "NURSERY" },
    {
      label: "MEDIA",
      dropdownItems: ["Photos", "Videos", "Events"],
    },
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
    console.log(`Navigating to: ${item} -> ${routes[item]}`);
    setIsMobileMenuOpen(false);
    setExpandedMobileItem("");
    // The Link component will handle the actual navigation
  };

  const EnhancedDropdownMenu: React.FC<{
    items: string[];
    isVisible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }> = ({ items, isVisible, onMouseEnter, onMouseLeave }) => {
    if (!isVisible) return null;

    return (
      <div
        className="absolute top-full left-0 mt-1 w-64 bg-black/60  border border-white/10 shadow-lg z-50"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="py-1">
          {items.map((item) => (
            <Link
              key={item}
              href={routes[item] || "#"}
              className="block px-4 py-2 text-sm text-white/90 hover:bg-[#67B96D] hover:text-white transition-colors duration-150"
              onClick={() => {
                console.log(`Desktop navigation: ${item} -> ${routes[item]}`);
                setHoveredItem("");
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-full mx-auto px-4">
        <div className="container hidden lg:flex items-center justify-center justify-evenly">
          {navigationItems.map((item) => {
            const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;
            const isHovered = hoveredItem === item.label;
            const isActive = activeItem === item.label;

            if (
              item.label === "TECHNOLOGIES" ||
              item.label === "NURSERY" ||
              // item.label === "MEDIA" ||
              item.label === "CONTACT US" ||
              item.label === "HOME"
            ) {
              return (
                <NavLink
                  key={item.label} // Move the key here
                  hasDropdown={false}
                  isActive={isActive}
                  isHovered={isHovered}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setActiveItem(item.label)} // Pass the onClick here
                >
                  {item.label}
                </NavLink>
              );
            }

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
                  <EnhancedDropdownMenu
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

        {/* Mobile navbr*/}
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

        {/* Mobile dropdown */}
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

              if (
                item.label === "TECHNOLOGIES" ||
                item.label === "NURSERY" ||
                // item.label === "MEDIA" ||
                item.label === "CONTACT US" ||
                item.label === "HOME"
              ) {
                return (
                  <Link
                    key={item.label}
                    href={routes[item.label] || "#"}
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div
                      className={`
                        flex items-center justify-between px-6 pl-[15px] py-4 cursor-pointer transition-colors duration-200
                        ${isActive ? "bg-[#67B96D] text-white" : "text-gray-700 hover:bg-[#67B96D] hover:text-white"}
                      `}
                    >
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                );
              }

              // Items with dropdowns
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
                          <Link
                            key={subItem}
                            href={routes[subItem] || "#"}
                            onClick={() => handleMobileSubItemClick(subItem)}
                          >
                            <div className="pl-8 pr-4 py-3 text-sm text-gray-600 hover:bg-[#67B96D] hover:text-white cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0">
                              {subItem}
                            </div>
                          </Link>
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
