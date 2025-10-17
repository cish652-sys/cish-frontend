"use client";
import React, { useState, useEffect, useCallback } from 'react';

import useEmblaCarousel from 'embla-carousel-react';

import { type EmblaCarouselType } from 'embla-carousel';

import { useRouter } from 'next/navigation';
import { scientificStaffData } from '@/lib/utils';
import { TechInfoCard } from '../molecules/TechInfoCard';

type StaffDivision = {
  id: string;
  title: string;
  image: string;
  href: string;
};

export const StaffCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const router = useRouter();

  const updateSelectedIndex = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateSelectedIndex(emblaApi);
    emblaApi.on('select', updateSelectedIndex);

    return () => {
      emblaApi.off('select', updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  const staffItems: StaffDivision[] = scientificStaffData;

  return (
    <div className="container  embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {staffItems.map((staff) => (
            <div className="embla__slide" key={staff.id}>
              <TechInfoCard
                title={staff.title}
                image={staff.image}
                description={[]}
                showHeading={false}
                onViewMore={() => router.push(staff.href)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" embla__dots">
        {staffItems.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};