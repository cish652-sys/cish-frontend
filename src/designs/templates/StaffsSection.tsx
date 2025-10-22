"use client";
import ImageAtom from "../atoms/ImageDirectorDesk";
import Typography from "../atoms/Typography";
import DirectorContent from "../molecules/DirectorsContent";
import { SectionHeader } from "../organisms/SectionHeader";
import { TechnologyGrid } from "../organisms/TechnologyGrid";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { StaffFlipCard } from "../molecules/StaffFlipCard";
import { StaffModal } from "../molecules/StaffModal";
import { TechnologyCardItem } from "@/types"; // Import necessary types
import {StaffsItems} from "../organisms/StaffsGrid"

// This base type represents the flexible data coming into the component.
interface BaseStaffItem {
  id: string | number;
  title: string;
  description: string | string[]; // Can be a string or an array of strings
  image?: string;
  href?: string;
  name?: string;
  designation?: string;
}

// Props now use the flexible BaseStaffItem type.
type StaffsSectionProps = {
  staffsItems: BaseStaffItem[];
  showHeading?: boolean;
  selectedStaff?: BaseStaffItem;
  scientificStaff?: BaseStaffItem[];
  technicalStaff?: BaseStaffItem[];
  skilledSupportingStaff?: BaseStaffItem[];
  administrativeStaff?: BaseStaffItem[];
  divisionStaff?: BaseStaffItem[];
};

type StaffCategory = "scientific" | "technical" | "skilled" | "administrative";

interface StaffTab {
  id: StaffCategory;
  label: string;
  data: BaseStaffItem[];
}

export const StaffsSection: React.FC<StaffsSectionProps> = ({
  staffsItems,
  showHeading = true,
  selectedStaff,
  scientificStaff = [],
  technicalStaff = [],
  skilledSupportingStaff = [],
  administrativeStaff = [],
  divisionStaff = [],
}) => {
  const [activeTab, setActiveTab] = useState<StaffCategory>("scientific");
  const [modalStaff, setModalStaff] = useState<BaseStaffItem | null>(null);

  const staffTabs: StaffTab[] = [
    { id: "scientific", label: "SCIENTIFIC STAFF", data: scientificStaff },
    { id: "technical", label: "TECHNICAL STAFF", data: technicalStaff },
    {
      id: "skilled",
      label: "SKILLED SUPPORTING STAFF",
      data: skilledSupportingStaff,
    },
    {
      id: "administrative",
      label: "ADMINISTRATIVE STAFF",
      data: administrativeStaff,
    },
  ];

  const getCurrentStaffData = (): BaseStaffItem[] => {
    const currentTab = staffTabs.find((tab) => tab.id === activeTab);
    return currentTab?.data || staffsItems;
  };

  // Transformation for TechnologyGrid, ensuring all properties match the strict type.
  const staffDataForGrid: TechnologyCardItem[] = getCurrentStaffData().map(
    (staff, index) => ({
      id: index,
      title : staff.title,
      // =================================================================
      // ===== FINAL FIX: Ensure description is always a string[]      =====
      // =================================================================
      description: Array.isArray(staff.description)
        ? staff.description
        : [staff.description],
      image: staff.image || "/icons/dummyStaff.svg",
      href: staff.href || '#',
    })
  );

  return (
    <>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "ABOUT US" },
          { label: selectedStaff ? selectedStaff.title.toUpperCase() : "STAFF" },
        ]}
        iconProps={true}
        title={selectedStaff ? selectedStaff.title : "OUR STAFF"}
        description={selectedStaff?.description ? (Array.isArray(selectedStaff.description) ? selectedStaff.description : [selectedStaff.description]) : [""]}
      />
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        {selectedStaff ? (
          <>
            {divisionStaff && divisionStaff.length > 0 && (
              <section id="divisionStaffSection" className="py-12">
                <div className="container">
                  <div className="mb-8">
                    <Typography
                      variant="sectionHeading"
                      className="text-green-700 mb-4"
                    >
                      STAFF MEMBERS
                    </Typography>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Transformation for StaffFlipCard, which has strict types. */}
                    {divisionStaff.map((staffMember) => (
                      <StaffFlipCard
                        key={staffMember.id.toString()}
                        staff={{
                          ...staffMember,
                          id: staffMember.id.toString(),
                          image: staffMember.image || "/icons/dummyStaff.svg",
                          description: Array.isArray(staffMember.description)
                            ? staffMember.description
                            : [staffMember.description],
                        }}
                        onViewMore={() => setModalStaff(staffMember)}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <section id="directorsSection">
            <div className="container flex flex-col lg:flex-row gap-6 lg:flex-nowrap">
              <div className="relative flex  justify-center items-end lg:justify-end">
                <ImageAtom
                  src="/icons/directorStaff.svg"
                  alt="Director"
                  className="max-w-full p-2 "
                />
                <Badge className="bg-green-800/95 width-[217px] text-sm">
                  Dr. Damodaran Thukkaram
                </Badge>
              </div>
              <div className="flex-1 flex flex-col">
                <DirectorContent
                  className="leading-loose"
                  content="Dr. Damodaran Thukkaram, born on October 2nd, 1973, in Chennai, did his M.Sc. and Ph.D. from Tamil Nadu Agricultural University, Coimbatore (1998–2003). He joined the Agricultural Research Service (ARS) of ICAR at the Central Agricultural Research Institute, Port Blair, in 1999 as a Scientist. Later, he was selected as Senior Scientist at ICAR–Central Soil Salinity Research Institute (CSSRI), Regional Research Station (RRS), Lucknow, in the year 2008. Further, he was placed as Principal Scientist in the same institute and later served as Head In-charge of the station since 2020. On 23rd January 2023, he assumed charge as the regular Director of ICAR–Central Institute for Subtropical Horticulture, Lucknow, and is currently leading the institute."
                  linkHref="#"
                  linkText=""
                />
              </div>
            </div>
          </section>
        )}

        {showHeading && (
          <div className="container">
            <div className="flex flex-wrap justify-center items-center py-12 gap-6">
              {staffTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full sm:w-auto flex items-center justify-center text-center font-semibold px-4 py-3 sm:px-6 sm:py-4 transition-all duration-300 ease-in-out bg-green-700 text-white ${
                    activeTab === tab.id
                      ? "shadow-lg"
                      : "hover:bg-green-600 hover:shadow-md"
                  }`}
                >
                  <Typography
                    variant="sectionHeading"
                    className="!text-white text-sm sm:text-base"
                  >
                    {tab.label}
                  </Typography>
                </button>
              ))}
            </div>
            <div className="mb-8">
              <Typography variant="sectionHeading" className=" mb-4">
                {staffTabs.find((tab) => tab.id === activeTab)?.label}
              </Typography>
            </div>
          </div>
        )}

        {showHeading && (
          <TechnologyGrid
            items={staffDataForGrid}
            showTechnologyDetails={false}
            showHeading={false}
          />
        )}
      </section>
      {modalStaff && (
        <StaffModal staff={modalStaff as StaffsItems} onClose={() => setModalStaff(null)} />
      )}
    </>
  );
};