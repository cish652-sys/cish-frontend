"use client";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  label: string;
  onClick?: () => void;
};

export default function ButtonLink({ label, onClick }: ButtonLinkProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-green-700 font-normal text-[16px] leading-[100%] tracking-normal capitalize font-[Noto Sans] hover:underline mb-2"
    >
      {label}
      <ArrowRight className="w-4 h-4 ml-1" />
    </button>
  );
}
