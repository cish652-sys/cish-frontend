"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { type EmblaCarouselType } from "embla-carousel";
import { divisionVarietiesData } from "@/lib/utils";
import { DivisionVarietyCard } from "../molecules/DivisionVarietyCard";

type Variety = {
  id: string;
  title: string;
  image: string;
  description: string[];
  href: string;
};

export const VarietiesCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const updateSelectedIndex = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateSelectedIndex(emblaApi);
    emblaApi.on("select", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  const varietyItems: Variety[] = divisionVarietiesData;

  return (
    <div className="container embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {varietyItems.map((variety) => (
            <div className="embla__slide" key={variety.id}>
              <DivisionVarietyCard
                title={variety.title}
                image={variety.image}
                description={variety.description}
                href={variety.href}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" embla__dots">
        {varietyItems.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
