"use client";
import { Logo } from "../atoms/Logo";
import { SearchBar } from "../atoms/SearchBar";
import { IconButton } from "../atoms/IconButton";
import { LanguageSwitcher } from "../molecules/LanguageSwitcher";
import { AccessibilityControls } from "../molecules/AccessibilityCOntrols";
import cish from "../public/images/cish 1.svg";
import icar from "../public/images/icar 2.svg"; 
import access from "../public/images/uil_file-download-alt.svg";
import next from "../public/images/nextpage.svg";
import local from "../public/images/localisation.svg";
import accessibility from "../public/images/accessibility.svg";
import label from "../public/images/mainlabelhindi.svg";
import label2 from "../public/images/mainlabel.svg";
import line from "../public/images/Line 33.svg";

export const Header = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 py-3 px-4">
        {/* Left Section: Logo + Title */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo src={cish} alt="CISH Logo" width={81} height={109} />
          </div>
          <div>
            <Logo src={label} alt="CISH Logo" width={456} height={42} />
            <Logo src={label2} alt="CISH Logo" width={612} height={33} />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 w-full md:w-auto">
          <div className="w-full sm:w-60">
            <SearchBar />
          </div>

          <div className="flex justify-center">
            <Logo src={icar} alt="ICAR Logo" width={75} height={103} />
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Logo src={access} alt="accessibility Logo" width={24} height={24} />
            
            <Logo src={next} alt="next Logo" width={24} height={24} />
                        

            <Logo src={local} alt="local Logo" width={24} height={24} />
                        

            <Logo src={accessibility} alt="accessibility Logo" width={24} height={24} />
          </div>
        </div>
      </div>
    </header>
  );
};
