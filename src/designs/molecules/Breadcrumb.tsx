// src/components/molecules/Breadcrumb.tsx
"use client";

import Link from "next/link";
import Typography from "../atoms/Typography";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-1 text-sm">
      {items.map((item, index) => (
        <span key={index} className="flex items-center space-x-1">
          {item.href ? (
            <Link href={item.href} className="text-muted-foreground hover:underline">
              <Typography variant="headingSmall">{item.label}</Typography>
            </Link>
          ) : (
            <Typography variant="headingSmall">{item.label}</Typography>
          )}
          {index < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
};
