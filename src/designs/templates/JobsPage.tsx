"use client";

import React, { useState } from "react";
import { jobData } from "@/lib/utils";
import JobCard from "../organisms/JobsCard";
import { SearchFilterBar } from "../organisms/SearchFilterBar";
import { MainHeader } from "./MainHeader";
import { SectionHeader } from "../organisms/SectionHeader";
import { Pagination } from "../molecules/Pagination";

const JOBS_PER_PAGE = 9;

const JobsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobData.length / JOBS_PER_PAGE);

  const currentJobs = jobData.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <MainHeader />
      <SectionHeader
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "JOBS" }]}
        iconProps={true}
        title="JOBS"
        description={[""]}
      />
      <SearchFilterBar />

      <div className="p-4 sm:p-6 md:p-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 max-[1440px]:flex max-[1440px]:flex-wrap max-[1440px]:justify-center">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-12"
        />
      </div>
    </>
  );
};

export default JobsPage;
