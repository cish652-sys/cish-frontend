"use client";

import { Logo } from "../atoms/Logo";
import { SearchBar } from "../atoms/SearchBar";
import cish from "../public/images/images (2) 2.svg";
import icar from "../public/images/icar 2.svg";
import access from "../public/images/uil_file-download-alt.svg";
import next from "../public/images/nextpage.svg";
import local from "../public/images/localisation.svg";
import accessibility from "../public/images/accessibility.svg";
import label from "../public/images/mainlabelhindi.svg";
import label2 from "../public/images/mainlabel.svg";
import { AccessibilityMenu } from "./AccessibilityMenuComponent";

export const Header = () => {
  const scrollToDirectors = () => {
    const section = document.getElementById("directorsSection");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full border-b bg-white dark:bg-gray-800 shadow-sm">
      <div className="container py-3">
        <div className="hidden [@media(min-width:769px)]:flex flex-row items-center justify-between gap-4">
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
              <Logo src={local} alt="Localizer" width={20} height={20} />
              {/* Replace the accessibility Logo with AccessibilityMenu */}
              <AccessibilityMenu accessibility={accessibility} />
            </div>
          </div>
        </div>

        <div className="hidden [@media(width:768px)]:flex flex-col gap-3">
          <div className="flex justify-end">
            <div className="flex items-center gap-3 flex-wrap">
              <button onClick={scrollToDirectors} aria-label="Scroll to Directors">
                <Logo src={access} alt="Redirect to Directors" width={20} height={20} />
              </button>
              <Logo src={next} alt="Next" width={20} height={20} />
              <Logo src={local} alt="Location" width={20} height={20} />
              {/* Replace the accessibility Logo with AccessibilityMenu */}
              <AccessibilityMenu accessibility={accessibility} />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-4">
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
                <Logo src={icar} alt="ICAR Logo" width={160} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-3 px-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex pt-[20px] flex-1 min-w-0">
            <div className="flex flex-col justify-end flex-shrink-0">
              <Logo src={cish} alt="CISH Logo" width={80} height={100} />
            </div>
            <div className="flex flex-col ml-2 flex-1 min-w-0">
              <div className="text-container">
                <h1 className="font-semibold text-sm leading-tight break-words hyphens-auto text-gray-900 dark:text-white">
                  भा.कृ.अनु.प.-केन्द्रीय उपोष्ण बागवानी सस्थान
                </h1>
                <h1 className="font-semibold text-xs leading-tight break-words hyphens-auto mt-1 text-gray-900 dark:text-white">
                  ICAR-CENTRAL INSTITUTE OF SUBTROPICAL HORTICULTURE
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0 pt-[20px]">
            <button onClick={scrollToDirectors} aria-label="Scroll to Directors">
              <Logo src={access} alt="Redirect to Directors" width={16} height={16} />
            </button>
            <Logo src={next} alt="Next" width={16} height={16} />
            <Logo src={local} alt="Location" width={16} height={16} />
            {/* Replace the accessibility Logo with AccessibilityMenu */}
            <AccessibilityMenu accessibility={accessibility} />
          </div>
        </div>
        <div className="flex justify-center">
          <Logo src={icar} alt="ICAR Logo" width={45} height={60} />
        </div>
        <div className="w-full px-1">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};