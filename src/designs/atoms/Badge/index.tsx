"use client";

import React from "react";
import Typography from "../Typography";

interface StaffNameBadgeProps {
  name: string;
}

export const StaffNameBadge: React.FC<StaffNameBadgeProps> = ({ name }) => {
  return (
    <div className="bg-green-800/80 text-white py-2 px-4 rounded-md shadow-md w-fit mx-auto -mt-4 relative z-10">
      <Typography variant="cardHeading" className="font-semibold tracking-wide text-center">
        {name}
      </Typography>
    </div>
  );
};
