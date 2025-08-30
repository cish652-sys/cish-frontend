"use client";
import React from "react";
import ActionButtonAtom from "../atoms/ActionButtonDirectorsDesk";
import { Users, Grid, BarChart3 } from "lucide-react";

const ActionCards: React.FC = () => {
  return (
    <div className="flex gap-3.5">
      <ActionButtonAtom Icon={Users} text="OUR TEAM" active onClick={() => {}} />
      <ActionButtonAtom Icon={Grid} text="OUR ORGANIZATION" onClick={() => {}} />
      <ActionButtonAtom Icon={BarChart3} text="OUR PERFORMANCE" onClick={() => {}} />
    </div>
  );
};

export default ActionCards;
