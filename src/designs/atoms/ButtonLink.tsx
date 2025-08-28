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
      className="flex items-center text-green-700 font-semibold hover:underline"
    >
      {label}
      <ArrowRight className="w-4 h-4 ml-1" />
    </button>
  );
}
