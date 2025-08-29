"use client";
import React from "react";
import TextAtom from "../atoms/TextDirectorsDesk";
import LinkAtom from "../atoms/LinkDirectorsDesk";

const DirectorContent: React.FC = () => {
  return (
    <div className="w-full">
      <TextAtom>
        Central Institute for Subtropical Horticulture Institute with a unique distinction of
        working on the mango the king of fruit on one hand and guava the poor man’s apple on the
        other is placed on envious pedestal of having the world largest germplasm (755) in its field
        genebank. being ever committed to challenging and tempting task of conserving our invaluable
        fast eroding genetic wealth of mango, during the period we through our dedicated team at the
        institute could virtually ignite the passion of farmers and set the example to be emulated,
        for conserving the unique heirloom mango varieties by empowering the farmer through society
        for conservation of biodiversity. consequently we were able to submit 34 farmers and
        community varieties to ppv&fra for registration, established community nurseries and outside
        community nursery produced more than 10000 grafts of non-commercial varieties.{" "}
        <LinkAtom href="#">SEE MORE</LinkAtom>
      </TextAtom>
    </div>
  );
};

export default DirectorContent;
