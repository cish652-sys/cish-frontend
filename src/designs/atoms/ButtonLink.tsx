"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type ButtonLinkProps = {
  label: string;
  onClick?: () => void;
  href?: string;
};

export default function ButtonLink({ label, onClick, href }: ButtonLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (href) router.push(href); // navigate programmatically
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center text-green-700 font-normal text-[16px] leading-[100%] tracking-normal capitalize font-[Noto Sans] hover:underline mb-2"
    >
      {label}
      <ArrowRight className="w-4 h-4 ml-1" />
    </button>
  );
}
