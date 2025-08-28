"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterIconProps {
  href: string;
  imgSrc: string; // required: svg/png/jpg from /public
  alt?: string;
  className?: string;
}

export function FooterIcon({ href, imgSrc, alt = "icon", className }: FooterIconProps) {
  return (
    <Link href={href} target="_blank">
      <img src={imgSrc} alt={alt} className={cn("w-5 h-5 hover:brightness-125", className)} />
    </Link>
  );
}
