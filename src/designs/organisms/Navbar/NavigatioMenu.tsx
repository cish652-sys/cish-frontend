"use client";

import React, { useState, useRef, useEffect } from "react";
// Removed 'next/link' as it's not available in this environment. Using standard <a> tags.

// Custom NavLink component placeholder (modified to use <a> tags)
const NavLink = ({
  href,
  children,
  hasDropdown,
  isActive,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  hasDropdown: boolean;
  isActive: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  const baseClasses =
    "relative flex items-center h-16 px-4 text-sm font-medium transition-colors duration-200 cursor-pointer";
  const activeClasses =
    isActive || isHovered
      ? "text-[#67B96D]" // Green color for active/hover
      : "text-gray-700 hover:text-[#67B96D]";
  const arrowClasses = "ml-1.5 transition-transform duration-200";
  const arrowDirection = isHovered ? "rotate-180" : "";

  // Use an 'a' tag if href is provided, otherwise use a 'span'
  const Tag = href ? "a" : "span";

  return (
    <Tag
      href={href || undefined} // href is only set if it exists
      className={`${baseClasses} ${activeClasses}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
      {hasDropdown && (
        <svg
          className={`w-4 h-4 ${arrowClasses} ${arrowDirection}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </Tag>
  );
};
// End of placeholder NavLink

const routes: Record<string, string> = {
  HOME: "/",
  "ABOUT US": "/",
  RESEARCH: "https://cish.in/cib_n.php",
  PUBLICATIONS: "/",
  TECHNOLOGIES: "/technologies",
  VARIETIES: "",
  "FOR FARMERS": "/",
  NURSERY: "/Nursery",
  MEDIA: "/",
  "CONTACT US": "/ContactUs",

  // ABOUT US dropdown
  "About Institute": "/AboutUs",
  "Field Gene Bank": "/FieldGeneBank",
  Divisions: "/Division",
  PME: "#",
  "ITMu/IPR Cells": "/Itmu",
  "Agri Business Incubation Center": "/Abi",
  AKMU: "#",
  "Regional Research Station": "/RRS_Malda",
  "Krishi Vigyan Kendra": "/Kvk_Malda",
  "Cadres Strength": "/CadreStrength",
  Staff: "/staff",
  // "Citizen Charter": "/about/citizen-charter",
  "Citizen Charter": "/citizenCharter", // ← Keep this one
  Photos: "/Gallery?tab=photos",
  Videos: "/Gallery?tab=videos",
  Events: "/Gallery?tab=events", // Added Events to routes

  // RESEARCH dropdown
  "Institute/External Projects": "/ResearchFunded",
  Collaborations: "/Collaboration",

  // PUBLICATIONS dropdown
  "Annual Reports": "/AnnualReport",
  "Research Publications": "#",
  "Newsletter (Subscription)": "/Newsletter",
  "Udyan Rashmi (Subscription)": "/UdyanRashmi",
  "CISH Publications (Paid & Free)": "/CishPublications",
  "Vision 2050": "/vision2050",

  // VARIETIES dropdown
  "Climate Resilient": "/ClimateResilient",
  "Nutraceutical Rich": "/Nutraceutical",
  "All Varieties": "/varieties",

  // FOR FARMERS dropdown
  "Agro Advisory": "/AgroAdvisory",
  "CISH Farmer Portal (CFP)": "https://www.nationalfarmerportal.org/?lang=en",
  "Plant Bookings": "#",
  "Success Stories (of Farmers)": "/SuccessStories",
  "Farmer Friendly Technologies": "#",
};

interface NavItem {
  label: string;
  dropdownItems?: string[];
}

const ResponsiveNavbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [hoveredItem, setHoveredItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- New state for handling "stick on scroll" ---
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef<HTMLElement>(null); // Ref for the <nav> element

  // --- New useEffect to get initial nav position and add scroll listener ---
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // 1. Store the initial top position of the navbar
    const navTop = nav.offsetTop;

    const handleScroll = () => {
      // 2. On scroll, compare window's scroll position to the nav's initial top position
      if (window.scrollY > navTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // 3. Add the scroll listener
    window.addEventListener("scroll", handleScroll);

    // 4. Clean up the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

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
      dropdownItems: ["Institute/External Projects", "Collaborations"],
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
      dropdownItems: ["All Varieties", "Climate Resilient", "Nutraceutical Rich"],
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
    // The <a> tag will handle the actual navigation
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
        className="absolute top-full left-0 mt-1 w-64 bg-black/60 border border-white/10 shadow-lg z-50  overflow-hidden"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="py-1">
          {items.map((item) => (
            <a
              key={item}
              href={routes[item] || "#"}
              className="block px-4 py-2 text-sm text-white/90 hover:bg-[#67B96D] hover:text-white transition-colors duration-150"
              onClick={() => {
                console.log(`Desktop navigation: ${item} -> ${routes[item]}`);
                setHoveredItem("");
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  };

  // Function to render a nav item (to avoid repetition)
  const renderNavItem = (item: NavItem, isMobile: boolean) => {
    const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;
    const isActive = activeItem === item.label;
    const isHovered = hoveredItem === item.label;
    const path = routes[item.label] || "#";

    // Non-dropdown items
    if (
      !hasDropdown ||
      item.label === "TECHNOLOGIES" ||
      item.label === "NURSERY" ||
      item.label === "CONTACT US" ||
      item.label === "HOME"
    ) {
      if (isMobile) {
        return (
          <a
            key={item.label}
            href={path}
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
          </a>
        );
      } else {
        return (
          <NavLink
            key={item.label}
            href={path}
            hasDropdown={false}
            isActive={isActive}
            isHovered={isHovered}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveItem(item.label)}
          >
            {item.label}
          </NavLink>
        );
      }
    }

    // Dropdown items
    if (isMobile) {
      const isExpanded = expandedMobileItem === item.label;
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
                ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="bg-white/50 max-h-[500px] overflow-y-auto pl-4">
                {item.dropdownItems.map((subItem) => (
                  <a
                    key={subItem}
                    href={routes[subItem] || "#"}
                    onClick={() => handleMobileSubItemClick(subItem)}
                  >
                    <div className="pl-8 pr-4 py-3 text-sm text-gray-600 hover:bg-[#67B96D] hover:text-white cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0 ">
                      {subItem}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    } else {
      // Desktop Dropdown
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
    }
  };

  return (
    // 1. Add the ref to the outermost <nav> element to measure its position.
    <nav className="relative" ref={navRef}>
      {/* 2. SPACER DIV. This div is invisible but takes up space (h-16) */}
      {/* ONLY when `isFixed` is true. This prevents the page content */}
      {/* from "jumping" up when the navbar becomes fixed. */}
      <div className={isFixed ? "h-16" : ""}></div>

      {/* 3. This div is the ACTUAL header bar. */}
      {/* We use `isFixed` to toggle between `fixed` (when scrolled past) */}
      {/* and `relative` (in its normal document flow). */}
      <div
        className={`
          ${isFixed ? "fixed top-0 left-0 right-0 z-30" : "relative"}
          bg-white shadow-sm border-b border-gray-200
        `}
      >
        <div className="max-w-full mx-auto px-4">
          {/* Desktop Nav */}
          <div className="container hidden lg:flex items-center justify-center justify-evenly">
            {navigationItems.map((item) => renderNavItem(item, false))}
          </div>

          {/* Mobile navbar (Hamburger Button) */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67B96D] "
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200`}
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
            <div className="w-8"></div>
          </div>
        </div>
      </div>

      <div
        className={`
          max-w-full mx-auto px-4
          lg:hidden
          ${isFixed ? "fixed top-16 left-0 right-0 z-20" : "relative"}
        `}
      >
        <div
          className={`
            lg:hidden transition-all duration-300 ease-in-out
            ${
              isMobileMenuOpen
                ? "max-h-[80vh] opacity-100 pointer-events-auto" // Use max-h-[80vh] for scrollable menu
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="bg-white max-h-[80vh] overflow-y-auto  shadow-lg p-2 space-y-1">
            {navigationItems.map((item) => renderNavItem(item, true))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
