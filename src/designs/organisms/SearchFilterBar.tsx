import React from "react";
import { Button } from "../atoms/button";
import { ImageSearchBar } from "../molecules/ImageSearchBar";
import { FilterGroup } from "../molecules/FilterGroup";

export const SearchFilterBar = () => {
  return (
    <div className="flex container w-full items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <ImageSearchBar />
        <FilterGroup />
      </div>

      <div>
        <Button
          className="bg-[#1B5E20] hover:bg-[#15381F] text-white font-bold uppercase tracking-wider "
          size="lg"
        >
          Archived
        </Button>
      </div>
    </div>
  );
};
