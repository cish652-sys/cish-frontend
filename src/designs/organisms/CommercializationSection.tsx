"use client";
import { Button } from "../atoms/button";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { TechnologyItem } from "../molecules/TechnologyItem";
import { VarietyCard } from "../molecules/VarietyCard";
import { useRef, useEffect, useState } from "react";

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
  const [currentDot, setCurrentDot] = useState(0);
  const [totalDots, setTotalDots] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const updateDots = () => {
      const containerWidth = scrollContainer.clientWidth;
      const scrollWidth = scrollContainer.scrollWidth;
      const itemWidth = 200; // Approximate width of each variety card including gap

      const visibleItems = Math.floor(containerWidth / itemWidth);
      const totalItems = varieties.length;
      const dotsNeeded = Math.max(1, Math.ceil(totalItems / visibleItems));

      setTotalDots(dotsNeeded);
    };

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const scrollWidth = scrollContainer.scrollWidth;

      if (scrollWidth <= containerWidth) {
        setCurrentDot(0);
        return;
      }

      const maxScrollLeft = scrollWidth - containerWidth;
      const scrollPercentage = scrollLeft / maxScrollLeft;
      const dotIndex = Math.round(scrollPercentage * (totalDots - 1));

      setCurrentDot(Math.max(0, Math.min(dotIndex, totalDots - 1)));
    };

    updateDots();
    handleScroll();

    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDots);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDots);
    };
  }, [varieties.length, totalDots]);

  const scrollToDot = (dotIndex: number) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const containerWidth = scrollContainer.clientWidth;
    const scrollWidth = scrollContainer.scrollWidth;
    const maxScrollLeft = scrollWidth - containerWidth;

    const targetScrollLeft = (dotIndex / (totalDots - 1)) * maxScrollLeft;

    scrollContainer.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 py-6 sm:py-8 md:py-12 bg-[#FBFAF0]">
      <div className="container max-w-7xl mx-auto flex flex-col xl:flex-row gap-6 sm:gap-8 md:gap-12 xl:items-start">
        <div className="flex-1 flex flex-col min-w-0">
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Icon
                src="/icons/codicon.svg"
                alt="Varieties"
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />
              <Typography
                variant="bodyLarge"
                weight="bold"
                className="text-sm sm:text-base md:text-lg"
              >
                Varieties for Commercialization
              </Typography>
            </div>
            <div
              ref={scrollRef}
              className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 -mx-2 px-2 sm:mx-0 sm:px-0 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {varieties.map((item, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <VarietyCard src={item.src} title={item.title} />
                </div>
              ))}
            </div>

            {totalDots > 1 && (
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalDots }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToDot(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentDot ? "bg-green-700 w-6" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="mt-4 sm:mt-6">
            <Button className="bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 md:px-8 py-2 font-semibold text-sm sm:text-base w-full sm:w-auto">
              VIEW MORE →
            </Button>
          </div>
        </div>

        {/* Right Column - Technologies */}
        <div className="flex-1 flex flex-col h-83">
          {" "}
          {/* fixed height container */}
          <div className="flex items-center gap-2 mb-6">
            <Icon src="/icons/mynaui_sparkles.svg" alt="Technologies" className="w-6 h-6" />
            <Typography variant="bodyLarge" weight="bold" className="text-green-900 uppercase">
              Technologies for Commercialization
            </Typography>
          </div>
          {/* Scrollable area */}
          <div className="flex-1 overflow-y-auto bg-white shadow-md rounded-sm max-h-64 sm:max-h-80 md:max-h-96 xl:max-h-none">
            {technologies.map((tech, idx) => (
              <TechnologyItem
                key={idx}
                title={tech.title}
                description={tech.description}
                date={tech.date}
              />
            ))}
          </div>
          <div className="mt-6">
            <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 font-semibold">
              VIEW MORE →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
