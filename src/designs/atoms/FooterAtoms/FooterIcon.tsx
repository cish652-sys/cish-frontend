"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
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
      <Image
        src={imgSrc}
        alt={alt}
        className={cn("w-5 h-5 hover:brightness-125", className)}
        height={20}
        width={20}
      />
    </Link>
  );
}
