"use client";
import React from "react";
import ActionButtonAtom from "../atoms/ActionButtonDirectorsDesk";
import { Users, Grid, BarChart3 } from "lucide-react";
import Link from "next/link";

const ActionCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3.5 w-full text-center">
      {/* OUR TEAM */}
      <Link href="/staff" className="w-full sm:w-auto flex justify-center">
        <ActionButtonAtom
          Icon={Users}
          text="OUR TEAM"
          active
          onClick={() => {}}
          className="px-12 bg-white border border-gray-300 hover:bg-green-700 hover:text-white text-black w-full sm:w-auto transition-all duration-200"
        />
      </Link>

      {/* OUR ORGANIZATION */}
      <Link href="/AboutUs" className="w-full sm:w-auto flex justify-center">
        <ActionButtonAtom
          Icon={Grid}
          text="OUR ORGANIZATION"
          onClick={() => {}}
          className="px-6 bg-white border border-gray-300 hover:bg-green-700 hover:text-white text-black w-full sm:w-auto transition-all duration-200"
        />
      </Link>

      {/* OUR PERFORMANCE */}
      <div className="w-full sm:w-auto flex justify-center">
        <ActionButtonAtom
          Icon={BarChart3}
          text="OUR PERFORMANCE"
          onClick={() => {}}
          className="px-6 bg-white border border-gray-300 hover:bg-green-700 hover:text-white text-black w-full sm:w-auto transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default ActionCards;
