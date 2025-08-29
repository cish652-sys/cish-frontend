"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
}

export const NavLink = ({ href, label, active, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm font-semibold transition-colors",
        active ? "text-green-700 border-b-2 border-green-700" : "text-black hover:text-green-700",
        className
      )}
    >
      {label}
    </Link>
  );
};
