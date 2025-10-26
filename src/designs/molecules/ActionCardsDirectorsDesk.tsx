"use client";
import React from "react";
import ActionButtonAtom from "../atoms/ActionButtonDirectorsDesk";
import { Users, Grid, BarChart3 } from "lucide-react";
import Link from "next/link";

const ActionCards: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3.5">
      <Link href="/staff">
        {" "}
        <ActionButtonAtom
          Icon={Users}
          text="OUR TEAM"
          active
          onClick={() => {}}
          className="px-12"
        />{" "}
      </Link>
      <Link href="/AboutUs">
        {" "}
        <ActionButtonAtom
          Icon={Grid}
          text="OUR ORGANIZATION"
          onClick={() => {}}
          className="px-6"
        />{" "}
      </Link>
      <ActionButtonAtom
        Icon={BarChart3}
        text="OUR PERFORMANCE"
        onClick={() => {}}
        className="px-6"
      />
    </div>
  );
};

export default ActionCards;
