"use client";
import { Calendar } from "lucide-react";

type DateLabelProps = {
  date: string;
};

export default function DateLabel({ date }: DateLabelProps) {
  return (
    <div className="flex items-center text-muted-foreground text-sm mb-2">
      <Calendar className="w-4 h-4 mr-1" />
      <span>{date}</span>
    </div>
  );
}
