"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FooterLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function FooterLink({ href, label, className }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-lg font-bold text-white hover:text-yellow-400 flex items-center gap-2",
        className
      )}
    >
      <Image
        src="/icons/arrow.svg"
        alt="arrow icon"
        width={16}
        height={16}
        className="inline-block"
      />
      {label}
    </Link>
  );
}
