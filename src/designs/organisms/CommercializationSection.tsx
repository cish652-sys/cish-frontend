"use client";
import Link from "next/link";
import { Button } from "../atoms/button";
import Icon from "../atoms/ImpactCard/Icon";
import { TechnologyItem } from "../molecules/TechnologyItem";
import { VarietyCard } from "../molecules/VarietyCard";
import { useRef, useEffect, useMemo, useState } from "react";

// Interface for the data expected by VarietyCard
interface Variety {
  src: string;
  title: string;
}

// Interface for the raw API response for Varieties (only fields we need)
interface ApiVarietyResponse {
  title: string;
  image: string;
}

// Interface for the data expected by TechnologyItem
interface Technology {
  title: string;
  description: string;
  date: string;
}

// Interface for the raw API response for Technologies (only fields we need)
interface ApiTechnologyResponse {
  title: string;
  details: string; // This will map to 'description'
  date: string;
}

interface CommercializationSectionProps {
  // These props now serve as the FALLBACK data
  varieties: Variety[];
  technologies: Technology[];
}

export const CommercializationSection = ({
  varieties: fallbackVarieties,
  technologies: fallbackTechnologies, // Renamed prop for clarity
}: CommercializationSectionProps) => {
  // --- State Initialization ---
  // Initialize state with the fallback data.
  // This data will be shown by default, or if API calls fail.
  const [displayedVarieties, setDisplayedVarieties] = useState<Variety[]>(fallbackVarieties);
  const [displayedTechnologies, setDisplayedTechnologies] =
    useState<Technology[]>(fallbackTechnologies);

  const scrollRef = useRef<HTMLDivElement>(null);

  // --- Data Fetching Effect (Varieties) ---
  useEffect(() => {
    const fetchVarieties = async () => {
      try {
        const response = await fetch("https://api.cish.org.in/api/innovation?key=varities");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiVarietyResponse[] = await response.json();

        if (data && data.length > 0) {
          const formattedVarieties = data.map((item) => ({
            src: item.image,
            title: item.title,
          }));
          setDisplayedVarieties(formattedVarieties);
        }
      } catch (error) {
        console.error("Failed to fetch varieties, using fallback data:", error);
      }
    };

    fetchVarieties();
  }, [fallbackVarieties]); // Depend on fallback in case it's needed

  // --- Data Fetching Effect (Technologies) ---
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("https://api.cish.org.in/api/innovation?key=technology");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiTechnologyResponse[] = await response.json();

        // Check if the API returned valid, non-empty data
        if (data && data.length > 0) {
          // Map API data (details, title, date) to component state (description, title, date)
          const formattedTechnologies = data.map((item) => ({
            title: item.title,
            description: item.details, // Map 'details' from API to 'description'
            date: item.date,
          }));

          // Set the state to the NEW data from the API
          setDisplayedTechnologies(formattedTechnologies);
        }
        // If data is empty, 'displayedTechnologies' will remain as 'fallbackTechnologies'
      } catch (error) {
        console.error("Failed to fetch technologies, using fallback data:", error);
        // On error, 'displayedTechnologies' remains the 'fallbackTechnologies'
      }
    };

    fetchTechnologies();
  }, [fallbackTechnologies]); // Depend on fallback in case it's needed

  // --- Memoization for Technologies ---
  // This now uses the 'displayedTechnologies' state
  const uniqueTechnologies = useMemo(() => {
    const seen = new Set();
    return displayedTechnologies.filter((tech) => {
      if (seen.has(tech.title)) return false;
      seen.add(tech.title);
      return true;
    });
  }, [displayedTechnologies]); // Dependency is now the state variable

  // --- Scrolling Effect (Varieties) ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || displayedVarieties.length === 0) return;

    const itemWidth = 200;
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % displayedVarieties.length;

      scrollContainer.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [displayedVarieties.length]);

  return (
    <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12 bg-[#FBFAF0]">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-12 xl:gap-16">
          {/* --- Varieties Section --- */}
          <div className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Icon
                  src="/icons/task-checklist 1.svg"
                  alt="Varieties"
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                />
                <h2 className="text-[22px] font-bold text-[#1B5E20]">
                  VARIETIES FOR COMMERCIALIZATION
                </h2>
              </div>

              <div
                ref={scrollRef}
                className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 -mx-2 px-2 sm:mx-0 sm:px-0 scrollbar-hide mb-4 scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {displayedVarieties.length > 0 &&
                  displayedVarieties.concat(displayedVarieties).map((item, idx) => (
                    <div key={idx} className="flex-shrink-0">
                      <VarietyCard src={item.src} title={item.title} />
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-auto">
              <Link href="/varieties">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 md:px-8 py-2 font-semibold text-sm sm:text-base w-full sm:w-auto">
                  VIEW MORE →
                </Button>
              </Link>
            </div>
          </div>

          {/* --- Technologies Section --- */}
          <div className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Icon
                  width={25}
                  height={25}
                  src="/icons/microscope.svg"
                  alt="Technologies"
                  className="w-[25px] h-[25px] sm:w-6 sm:h-6 flex-shrink-0"
                />
                <h2 className="text-[22px] font-bold text-[#1B5E20]">
                  TECHNOLOGIES FOR COMMERCIALIZATION
                </h2>
              </div>

              <div className="bg-white shadow-md overflow-hidden">
                <div className="overflow-y-auto max-h-[208px]">
                  {uniqueTechnologies.map((tech, idx) => (
                    <TechnologyItem key={idx} title={tech.title} description={""} date={""} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <Link href="/technologies">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 md:px-8 py-2 font-semibold text-sm sm:text-base w-full sm:w-auto">
                  VIEW MORE →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
