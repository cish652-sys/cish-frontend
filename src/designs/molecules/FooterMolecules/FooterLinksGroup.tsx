"use client";

import { FooterLink } from "@/designs/atoms/FooterAtoms/FooterLink";

interface FooterLinksGroupProps {
  title: string;
  links: { label: string; href: string }[];
}

export function FooterLinksGroup({ title, links }: FooterLinksGroupProps) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link, i) => (
          <FooterLink key={i} href={link.href} label={link.label} />
        ))}
      </ul>
    </div>
  );
}
