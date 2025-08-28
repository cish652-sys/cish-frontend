"use client";

type HeadingProps = {
  title: string;
  className?: string;
};

export default function Heading({ title, className }: HeadingProps) {
  return (
    <h2 className={`text-2xl font-bold text-green-800 mb-6 ${className}`}>
      {title}
    </h2>
  );
}
