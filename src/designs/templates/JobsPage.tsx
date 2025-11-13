"use client";

import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { jobData } from "@/lib/utils";
import JobCard from "../organisms/JobsCard";
import { SearchFilterBar } from "../organisms/SearchFilterBar";
import { MainHeader } from "./MainHeader";
import { SectionHeader } from "../organisms/SectionHeader";
import { Pagination } from "../molecules/Pagination";
import type { Job } from "../organisms/JobsCard";

const JOBS_PER_PAGE = 9;

type ApiJob = {
  id: number;
  title: string;
  description: string | null;
  postDate: string;
  lastDate: string;
  createdAt: string | null;
  date: string | null;
  imageUrl?: string;
  resultDocuments?: string | null;
};

const fetchJobs = async (): Promise<ApiJob[]> => {
  const { data } = await axios.get("https://api.cish.org.in/api/content/jobs");
  return data;
};

// --- MODIFIED SECTION ---

// ✅ Replaced 'fixFileUrl' with the robust 'formatLink' function
const formatLink = (url: string | null | undefined): string => {
  if (!url) return "";

  // Case 1: Already a valid absolute URL (like http://13.234.154.152:9000/...)
  // This will be left alone, which is the correct behavior.
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  // Case 2: An internal path or anchor.
  if (url.startsWith("/") || url.startsWith("#")) {
    return url;
  }

  // Case 3: A URL missing its protocol (e.g., "www.google.com")
  if (url.includes(".")) {
    return `https://${url}`;
  }

  // Otherwise, return as is
  return url;
};
// --- END MODIFICATION ---

const JobsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: apiJobs,
    isLoading,
    isError,
  } = useQuery<ApiJob[], Error>({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    retry: 1,
  });

  const jobsToDisplay: Job[] = useMemo(() => {
    if (isError || !apiJobs || apiJobs.length === 0) {
      console.log("API failed or returned no data. Using fallback dummy data.");
      return jobData;
    }

    return apiJobs.map((job) => {
      const buttons: Array<"form" | "result"> = [];
      if (job.imageUrl) buttons.push("form");
      if (job.resultDocuments) buttons.push("result");

      return {
        id: job.id,
        title: job.title,
        description: job.description || "No description available for this position.",
        lastDateText: ``,
        publishedDate: job.postDate,
        startDate: job.date || "N/A",
        interviewDate: job.lastDate,
        latestUpdate: job.createdAt || job.postDate,
        buttons,
        // --- MODIFIED SECTION ---
        formLink: formatLink(job.imageUrl), // ✅ Use formatLink
        resultLink: formatLink(job.resultDocuments), // ✅ Use formatLink
        // --- END MODIFICATION ---
      };
    });
  }, [apiJobs, isError]);

  const totalPages = Math.ceil(jobsToDisplay.length / JOBS_PER_PAGE);

  const currentJobs = jobsToDisplay.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

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
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading jobs...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default JobsPage;