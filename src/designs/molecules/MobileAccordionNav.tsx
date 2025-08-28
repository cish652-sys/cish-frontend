"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/designs/atoms/accordion";
import Link from "next/link";
import type { NavItem } from "@/config/navigation";

interface MobileAccordionNavProps {
  items: NavItem[];
}

export const MobileAccordionNav = ({ items }: MobileAccordionNavProps) => {
  return (
    <div className="md:hidden w-full">
      <Accordion type="multiple" className="w-full">
        {items.map((item, idx) =>
          item.type === "link" ? (
            <div key={item.href} className="border-b">
              <Link
                href={item.href}
                className="block px-4 py-3 text-sm font-semibold hover:bg-black/5"
              >
                {item.label}
              </Link>
            </div>
          ) : (
            <AccordionItem key={idx} value={`acc-${idx}`} className="border-b">
              <AccordionTrigger className="px-4 py-3 text-sm font-semibold">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="px-2 pb-2">
                <div className="rounded-md border border-white/10 bg-black/80 text-white backdrop-blur-md">
                  {item.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
};
