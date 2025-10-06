"use client";

import React from "react";

// Define the props the component will accept from its parent
interface EventFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  activeMonth: string;
  setActiveMonth: (month: string) => void;
  activeView: string;
  setActiveView: (view: string) => void;
  onFindEvents: () => void; // A function to handle the search click
}

const EventFilters: React.FC<EventFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  activeMonth,
  setActiveMonth,
  activeView,
  setActiveView,
  onFindEvents,
}) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const views = ["List", "Month", "Day"];

  return (
    <div className="w-full">
      {/* Search Bar and View Toggles */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input and Button Container */}
        <div className="flex flex-grow w-full items-center border border-[#a8b09a] bg-white">
          <input
            type="text"
            placeholder="Search For Events"
            className="w-full flex-grow bg-transparent px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={onFindEvents}
            className="flex items-center gap-2 bg-[#3a643b] text-white px-4 py-2 flex-shrink-0 hover:bg-opacity-90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Find Events
          </button>
        </div>

        {/* List, Month, Day Toggles */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {views.map((view) => (
            <button key={view} onClick={() => setActiveView(view)} className="relative py-1">
              {view}
              {activeView === view && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#3a643b]"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Month Selector */}
      <nav className="flex items-center justify-between mt-6">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setActiveMonth(month)}
            className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out border-r border-gray-200 last:border-r-0
              ${
                activeMonth === month
                  ? "bg-[#3a643b] text-white shadow-md"
                  : "bg-white text-gray-800 hover:bg-gray-50"
              }`}
          >
            {month}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default EventFilters;
