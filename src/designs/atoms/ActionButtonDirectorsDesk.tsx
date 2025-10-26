"use client";
import React from "react";
import { Card, CardContent } from "@/designs/atoms/card";
import clsx from "clsx";

export interface ActionButtonAtomProps {
  Icon: React.ElementType;
  text: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const ActionButtonAtom: React.FC<ActionButtonAtomProps> = ({
  Icon,
  text,
  active,
  onClick,
  className = "",
}) => {
  return (
    <Card
      onClick={onClick}
      className={clsx(
        "cursor-pointer border transition hover:shadow-md w-fit", // ✅ Added w-fit
        active
          ? "bg-green-700 text-white border-green-700"
          : "border-gray-300 hover:bg-green-700 hover:text-white hover:border-green-700",
        className
      )}
    >
      <CardContent className="flex items-center justify-center gap-2.5 py-5 px-8">
        <Icon className="w-5 h-5" />
        <span className="font-semibold text-sm whitespace-nowrap">{text}</span>
      </CardContent>
    </Card>
  );
};

export default ActionButtonAtom;
