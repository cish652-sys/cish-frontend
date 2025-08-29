"use client";
import { Button } from "@/designs/atoms/button";
import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="rounded-full hover:bg-gray-100"
    >
      {icon}
    </Button>
  );
};
