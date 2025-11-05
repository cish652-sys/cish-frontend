import type { ElementType } from "react";
import { CalendarDays, RefreshCw } from "lucide-react";

export type Job = {
  id: number | string;
  title: string;
  description: string;
  lastDateText: string;
  publishedDate: string;
  startDate: string;
  interviewDate: string;
  latestUpdate: string;
  buttons: Array<"form" | "result">;
  formLink?: string; // ✅ Add optional form link
  resultLink?: string; // ✅ Add optional result link
};

type DateRowProps = {
  label: string;
  date: string;
  Icon: ElementType;
};

const DateRow = ({ label, date, Icon }: DateRowProps) => (
  <li className="flex items-center justify-between">
    <div className="flex items-center">
      <Icon className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</span>
    </div>
    <span className="text-sm font-semibold text-gray-800">{date}</span>
  </li>
);

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const handleFormClick = () => {
    if (job.formLink) {
      window.open(job.formLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleResultClick = () => {
    if (job.resultLink) {
      window.open(job.resultLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-w-[400px] max-h-[500px] mx-auto bg-white border border-gray-500 shadow-md flex flex-col overflow-hidden">
      <div className="p-4">
        <header className="bg-[#5b9a5d] text-white text-center py-4 px-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide">{job.title}</h2>
        </header>

        <main className="p-6 flex-grow">
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">{job.description}</p>
          <h3 className="font-bold text-gray-900 mb-4">{job.lastDateText}</h3>

          <ul className="space-y-3 text-sm">
            <DateRow label="Published Date" date={job.publishedDate} Icon={CalendarDays} />
            <DateRow label="Start Date" date={job.startDate} Icon={CalendarDays} />
            <DateRow
              label="Last Date / Walk-in Interview Date"
              date={job.interviewDate}
              Icon={CalendarDays}
            />
            <DateRow label="Latest Update" date={job.latestUpdate} Icon={RefreshCw} />
          </ul>
        </main>

        <footer className="px-6 pb-6 pt-2">
          <div className="flex items-center gap-3">
            {job.buttons.includes("form") && (
              <button
                onClick={handleFormClick}
                disabled={!job.formLink}
                className={`px-4 py-2 text-xs font-bold transition-colors ${
                  job.formLink
                    ? "bg-[#4a7c4c] text-white hover:bg-[#3b633c] cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                APPLICATION FORM
              </button>
            )}
            {job.buttons.includes("result") && (
              <button
                onClick={handleResultClick}
                disabled={!job.resultLink}
                className={`px-4 py-2 text-xs font-bold transition-colors ${
                  job.resultLink
                    ? "bg-[#4a7c4c] text-white hover:bg-[#3b633c] cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                RESULT
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JobCard;
