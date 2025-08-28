"use client";

import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/designs/atoms/menubar";
import Link from "next/link";
import type { LinkItem } from "@/config/navigation";

interface MenuDropdownProps {
  label: string;
  links: LinkItem[];
}

export const MenuDropdown = ({ label, links }: MenuDropdownProps) => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="px-3 py-2 text-sm font-semibold hover:text-green-700">
        {label}
      </MenubarTrigger>

      {/* Anchored to trigger; align under hovered item */}
      <MenubarContent
        align="start"
        sideOffset={8}
        className="
          min-w-[220px] rounded-md border border-white/10
          bg-black/80 text-white backdrop-blur-md
          shadow-lg focus:outline-none
          z-[60]
        "
      >
        <div className="flex flex-col py-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm rounded-md hover:bg-white/10 focus:bg-white/10 outline-none transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </MenubarContent>
    </MenubarMenu>
  );
};
