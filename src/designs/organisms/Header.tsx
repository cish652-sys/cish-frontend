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
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-3">
        {/* Left Section: Logo + Title */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-center md:text-left">
          {/* CISH Logo */}
          <div className="flex justify-center md:justify-start">
            <Logo src={cish} alt="CISH Logo" width={81} height={109} />
          </div>

          {/* Labels (scale down responsively) */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Logo src={label} alt="Hindi Label" width={456} height={42} />
            <Logo src={label2} alt="English Label" width={612} height={33} />
          </div>
        </div>

        {/* Right Section: Search + Logos + Icons */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full md:w-auto">
          {/* Search bar shrinks nicely */}
          <div className="w-full sm:w-56">
            <SearchBar />
          </div>

          {/* ICAR Logo */}
          <div className="flex justify-center">
            <Logo src={icar} alt="ICAR Logo" width={60} height={80} />
          </div>

          {/* Small action icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Logo src={access} alt="Download" width={20} height={20} />
            <Logo src={next} alt="Next" width={20} height={20} />
            <Logo src={local} alt="Location" width={20} height={20} />
            <Logo src={accessibility} alt="Accessibility" width={20} height={20} />
          </div>
        </div>
      </div>
    </header>
  );
};
