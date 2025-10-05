import React from 'react';
import { jobData } from '@/lib/utils';
import JobCard from '../organisms/JobsCard'; 
import { SearchFilterBar } from '../organisms/SearchFilterBar';
import { MainHeader } from './MainHeader';
import { SectionHeader } from '../organisms/SectionHeader';

const JobsPage = () => {
  return (
    <>
      <MainHeader />
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "JOBS" },
        ]}
        iconProps={true}
        title="JOBS"
        description={[""]}
      />
      <SearchFilterBar />

      <div className="p-4 sm:p-6 md:p-8 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobsPage;