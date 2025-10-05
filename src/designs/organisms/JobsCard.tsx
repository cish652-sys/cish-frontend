import { Job } from '@/types'; // Adjust import path if needed
import { CalendarDays } from 'lucide-react';

// Define props for the DateRow component right here
type DateRowProps = {
  label: string;
  date: string;
};

const DateRow = ({ label, date }: DateRowProps) => (
  <li className="flex items-center justify-between">
    <div className="flex items-center">
      <CalendarDays className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
      <span className="text-xs font-medium text-gray-500 uppercase">{label}</span>
    </div>
    <span className="text-sm font-semibold text-gray-800">{date}</span>
  </li>
);

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg flex flex-col overflow-hidden">
      <header className="bg-green-700 text-white text-center py-4 px-4">
        <h2 className="font-semibold text-sm uppercase">{job.title}</h2>
      </header>
      
      <main className="p-6 flex-grow">
        <p className="text-sm text-gray-600 mb-5">{job.description}</p>
        <h3 className="font-bold text-gray-900 mb-4">{job.lastDateText}</h3>
        <ul className="space-y-2 text-sm">
          <DateRow label="Published Date" date={job.publishedDate} />
          <DateRow label="Start Date" date={job.startDate} />
          <DateRow label="Last Date / Walk-in Interview Date" date={job.interviewDate} />
          <DateRow label="Latest Update" date={job.latestUpdate} />
        </ul>
      </main>
      
      <footer className="px-6 pb-6 pt-2">
        <div className="flex items-center gap-2">
          {job.buttons.includes('form') && (
            <button className="bg-green-700 text-white px-4 py-2 text-xs font-semibold rounded-sm hover:bg-green-800 transition-colors">
              APPLICATION FORM
            </button>
          )}
          {job.buttons.includes('result') && (
            <button className="bg-green-700 text-white px-4 py-2 text-xs font-semibold rounded-sm hover:bg-green-800 transition-colors">
              RESULT
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default JobCard;