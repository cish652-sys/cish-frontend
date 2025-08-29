"use client";

import Link from "next/link";

export interface DropdownMenuProps {
  label: string;
  links?: { href: string; label: string }[];
}

export const DropdownMenu = ({ label, links = [] }: DropdownMenuProps) => {
  return (
    <div className="relative group">
      {/* Label */}
      <button className="px-3 py-2 text-sm font-medium">{label}</button>

      {/* Dropdown on hover */}
      <div
        className="
          absolute left-0 top-full mt-1 hidden 
          min-w-[200px] rounded-lg 
          bg-black/80 text-white 
          shadow-lg backdrop-blur-md z-50
          group-hover:block
        "
      >
        <div className="flex flex-col p-2">
          {links?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
