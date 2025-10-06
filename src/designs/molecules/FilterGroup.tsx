import React from "react";
import { Button } from "@/designs/atoms/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/designs/atoms/Select";

export const FilterGroup = () => {
  return (
    <div className="flex items-center gap-1">
      <Select>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="+All" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
      <Button className="bg-[#1B5E20] hover:bg-[#15381F] text-white " size="default">
        Apply
      </Button>
    </div>
  );
};
