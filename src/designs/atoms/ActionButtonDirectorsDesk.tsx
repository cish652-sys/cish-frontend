"use client";
import React from "react";
import { Card, CardContent } from "@/designs/atoms/card"; // shadcn card
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
  onClick,
  className = "",
}) => {
  return (
    <Card
      onClick={onClick}
      className={clsx(
        "flex-1 cursor-pointer max-h-[86px] border border-gray-300 transition hover:shadow-md hover:bg-green-700 hover:text-white ",
        className
      )}
    >
      <CardContent className="flex items-center justify-center gap-2 p-6 md:p-8 font-semibold text-sm md:text-base">
        <Icon className="w-5 h-5" />
        <span>{text}</span>
      </CardContent>
    </Card>
  );
};

export default ActionButtonAtom;
