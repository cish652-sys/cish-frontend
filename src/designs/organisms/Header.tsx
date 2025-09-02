"use client";
import { Logo } from "../atoms/Logo";
import { SearchBar } from "../atoms/SearchBar";
import cish from "../public/images/cish 1.svg";
import icar from "../public/images/icar 2.svg";
import access from "../public/images/uil_file-download-alt.svg";
import next from "../public/images/nextpage.svg";
import local from "../public/images/localisation.svg";
import accessibility from "../public/images/accessibility.svg";
import label from "../public/images/mainlabelhindi.svg";
import label2 from "../public/images/mainlabel.svg";

export const Header = () => {
  const scrollToDirectors = () => {
    const section = document.getElementById("directorsSection");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container py-3">
        {/* Desktop Layout (768px and above) */}
        <div className="hidden md:flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-3">
            <div className="flex justify-start">
              <Logo src={cish} alt="CISH Logo" width={81} height={109} />
            </div>

            <div className="flex flex-col items-start gap-1">
              <Logo src={label} alt="Hindi Label" width={456} height={42} />
              <Logo src={label2} alt="English Label" width={612} height={33} />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <div className="w-56">
              <SearchBar />
            </div>

            <div className="flex justify-center">
              <Logo src={icar} alt="ICAR Logo" width={60} height={80} />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button onClick={scrollToDirectors} aria-label="Scroll to Directors">
                <Logo src={access} alt="Redirect to Directors" width={20} height={20} />
              </button>

              <Logo src={next} alt="Next" width={20} height={20} />
              <Logo src={local} alt="Location" width={20} height={20} />
              <Logo src={accessibility} alt="Accessibility" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Mobile Layout (below 768px) */}
        <div className="flex md:hidden flex-col gap-3">
          {/* First Row: Main logo with headings (left) + Accessibility icons (right) */}
          <div className="flex items-start justify-between">
            {/* Left side: Main logo with headings (shrunk) */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex justify-start">
                <Logo src={cish} alt="CISH Logo" width={50} height={67} />
              </div>

              <div className="flex flex-col gap-0.5">
                <Logo src={label} alt="Hindi Label" width={200} height={18} />
                <Logo src={label2} alt="English Label" width={220} height={12} />
              </div>
            </div>

            {/* Right side: Accessibility icons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={scrollToDirectors} aria-label="Scroll to Directors">
                <Logo src={access} alt="Redirect to Directors" width={18} height={18} />
              </button>

              <Logo src={next} alt="Next" width={18} height={18} />
              <Logo src={local} alt="Location" width={18} height={18} />
              <Logo src={accessibility} alt="Accessibility" width={18} height={18} />
            </div>
          </div>

          {/* Second Row: ICAR logo (center aligned) */}
          <div className="flex justify-center">
            <Logo src={icar} alt="ICAR Logo" width={50} height={67} />
          </div>

          {/* Third Row: Search bar (full width) */}
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};
