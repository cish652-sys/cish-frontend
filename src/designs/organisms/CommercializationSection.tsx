"use client";

import { Button } from "../atoms/button";
import Icon from "../atoms/ImpactCard/Icon";
import Typography from "../atoms/Typography";
import { TechnologyItem } from "../molecules/TechnologyItem";
import { VarietyCard } from "../molecules/VarietyCard";

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
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
      <div className="container flex flex-col lg:flex-row gap-12 lg:items-start">
        {/* Left Column - Varieties */}
        <div className="flex-1 flex flex-col">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Icon src="/icons/codicon.svg" alt="Varieties" className="w-6 h-6" />
              <Typography variant="bodyLarge" weight="bold">
                Varieties for Commercialization
              </Typography>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {varieties.map((item, idx) => (
                <VarietyCard key={idx} src={item.src} title={item.title} />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 font-semibold">
              VIEW MORE →
            </Button>
          </div>
        </div>

        {/* Right Column - Technologies */}
        <div className="flex-1 flex flex-col h-83"> {/* fixed height container */}
          <div className="flex items-center gap-2 mb-6">
            <Icon src="/icons/mynaui_sparkles.svg" alt="Technologies" className="w-6 h-6" />
            <Typography variant="bodyLarge" weight="bold" className="text-green-900 uppercase">
              Technologies for Commercialization
            </Typography>
          </div>

          {/* Scrollable area */}
          <div className="flex-1 overflow-y-auto bg-white shadow-md">
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

