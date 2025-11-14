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

// --- TYPE FIX START ---

// Interface for the data we use INSIDE the component
interface Technology {
  title: string;
  description: string;
  date: string;
  isTrending: boolean;
  createdAt: string; // --- MODIFIED --- Added createdAt
}

// Interface for the data passed as a PROP (isTrending is optional)
interface FallbackTechnology {
  title: string;
  description: string;
  date: string;
  isTrending?: boolean;
  createdAt?: string; // --- MODIFIED --- Added optional createdAt
}

// Interface for the raw API response for Technologies (only fields we need)
interface ApiTechnologyResponse {
  title: string;
  details: string; // This will map to 'description'
  date: string;
  isTrending: boolean;
  createdAt: string; // --- MODIFIED --- Added createdAt
}

interface CommercializationSectionProps {
  // These props now serve as the FALLBACK data
  varieties: Variety[];
  technologies: FallbackTechnology[]; // <-- Use the optional type for the prop
}

// --- TYPE FIX END ---

export const CommercializationSection = ({
  varieties: fallbackVarieties,
  technologies: fallbackTechnologies, // This is now 'FallbackTechnology[]'
}: CommercializationSectionProps) => {
  // --- State Initialization ---
  const [displayedVarieties, setDisplayedVarieties] = useState<Variety[]>(fallbackVarieties);
  
  // Convert the 'FallbackTechnology[]' prop to the internal 'Technology[]' state
  const [displayedTechnologies, setDisplayedTechnologies] =
    useState<Technology[]>(
      fallbackTechnologies.map(t => ({
        ...t,
        isTrending: t.isTrending || false,
        // --- MODIFIED --- Add a default 'createdAt' for fallback data (epoch time 0)
        createdAt: t.createdAt || new Date(0).toISOString(), 
      }))
    );

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
  }, [fallbackVarieties]);

  // --- Data Fetching Effect (Technologies) ---
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("https://api.cish.org.in/api/innovation?key=technology");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiTechnologyResponse[] = await response.json();

        if (data && data.length > 0) {
          // Map API data
          const formattedTechnologies = data.map((item) => ({
            title: item.title,
            description: item.details,
            date: item.date,
            isTrending: item.isTrending,
            createdAt: item.createdAt, // --- MODIFIED --- Pass createdAt
          }));

          // Sort the technologies
          const sortedTechnologies = formattedTechnologies.sort((a, b) => {
            // Rule 1: Prioritize 'isTrending: true'
            if (a.isTrending && !b.isTrending) return -1;
            if (!a.isTrending && b.isTrending) return 1;

            // --- MODIFIED ---
            // Rule 2: If 'isTrending' is the same, sort by createdAt (oldest first)
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            
            if (isNaN(dateA)) return 1; // Handle invalid dates
            if (isNaN(dateB)) return -1;
            
            // return dateB - dateA; // This was Newest to Oldest
            return dateA - dateB; // This is Oldest to Newest
          });

          setDisplayedTechnologies(sortedTechnologies);
        }
      } catch (error) {
        console.error("Failed to fetch technologies, using fallback data:", error);
      }
    };

    fetchTechnologies();
  }, []); // Removed 'fallbackTechnologies' as it's now just an initial value

  // --- Memoization for Technologies ---
  const uniqueTechnologies = useMemo(() => {
    const seen = new Set();
    // 'displayedTechnologies' is already of type 'Technology[]'
    return displayedTechnologies.filter((tech) => {
      if (seen.has(tech.title)) return false;
      seen.add(tech.title);
      return true;
    });
  }, [displayedTechnologies]);

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
                    <Link
                      href="/varieties"
                      key={idx}
                      className="flex-shrink-0"
                    >
                      <VarietyCard src={item.src} title={item.title} />
                    </Link>
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
                    <Link href="/technologies" key={idx}>
                      <TechnologyItem
                        title={tech.title}
                        description={""}
                        date={""}
                      />
                    </Link>
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