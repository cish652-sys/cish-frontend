"use client";
import Link from "next/link";
import { Button } from "../atoms/button";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { TechnologyItem } from "../molecules/TechnologyItem";
import { VarietyCard } from "../molecules/VarietyCard";
import { useRef, useEffect, useMemo } from "react";

interface Variety {
  src: string;
  title: string;
}

interface Technology {
  title: string;
  description: string;
  date: string;
}

interface CommercializationSectionProps {
  varieties: Variety[];
  technologies: Technology[];
}

export const CommercializationSection = ({
  varieties,
  technologies,
}: CommercializationSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const uniqueTechnologies = useMemo(() => {
    const seen = new Set();
    return technologies.filter((tech) => {
      if (seen.has(tech.title)) return false;
      seen.add(tech.title);
      return true;
    });
  }, [technologies]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const itemWidth = 200;
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % varieties.length;

      scrollContainer.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [varieties.length]);

  return (
    <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12 bg-[#FBFAF0]">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-12 xl:gap-16">
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
                {varieties.concat(varieties).map((item, idx) => (
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

          {/* Technologies Section */}
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
                <h2                   className="text-[22px] font-bold text-[#1B5E20]">
                
                  TECHNOLOGIES FOR COMMERCIALIZATION
                </h2>
              </div>

              <div className="bg-white shadow-md overflow-hidden">
                <div className="overflow-y-auto max-h-[208px]">
                  {uniqueTechnologies.map((tech, idx) => (
                    <TechnologyItem
                      key={idx}
                      title={tech.title}
                      description={tech.description}
                      date={tech.date}
                    />
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
