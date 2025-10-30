// designs/templates/StaffsSection.tsx
"use client";
import ImageAtom from "../atoms/ImageDirectorDesk";
import Typography from "../atoms/Typography";
import DirectorContent from "../molecules/DirectorsContent";
import { SectionHeader } from "../organisms/SectionHeader";
import { StaffsItems, StaffsGrid } from "../organisms/StaffsGrid";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { StaffFlipCard } from "../molecules/StaffFlipCard";
import { StaffModal } from "../molecules/StaffModal";

type StaffsSectionProps = {
  divisionItems: StaffsItems[];
  showHeading?: boolean;
  selectedStaff?: StaffsItems;
  director?: StaffsItems;
  technicalStaff?: StaffsItems[];
  skilledSupportingStaff?: StaffsItems[];
  administrativeStaff?: StaffsItems[];
  divisionStaff?: StaffsItems[];
};

type StaffCategory = "scientific" | "technical" | "skilled" | "administrative";

interface StaffTab {
  id: StaffCategory;
  label: string;
  data: StaffsItems[];
}

export const StaffsSection: React.FC<StaffsSectionProps> = ({
  divisionItems,
  showHeading = true,
  selectedStaff,
  director,
  technicalStaff = [],
  skilledSupportingStaff = [],
  administrativeStaff = [],
  divisionStaff = [],
}) => {
  const [activeTab, setActiveTab] = useState<StaffCategory>("scientific");
  const [modalStaff, setModalStaff] = useState<StaffsItems | null>(null);

  const staffTabs: StaffTab[] = [
    { id: "scientific", label: "SCIENTIFIC STAFF", data: divisionItems },
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

  const getCurrentStaffData = (): StaffsItems[] => {
    const currentTab = staffTabs.find((tab) => tab.id === activeTab);
    return currentTab?.data || [];
  };

  return (
    <>
      <SectionHeader
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: selectedStaff ? selectedStaff.title.toUpperCase() : "STAFF" },
        ]}
        iconProps={true}
        title={selectedStaff ? selectedStaff.title : "OUR STAFF"}
        description={selectedStaff ? selectedStaff.description : [""]}
      />
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-[#FBFAF0]">
        {selectedStaff ? (
          <>
            {/* Division Detail Page view (no change here) */}
            {divisionStaff.length > 0 && (
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
                    {divisionStaff.map((staffMember) => (
                      <StaffFlipCard
                        key={staffMember.id}
                        staff={staffMember}
                        onViewMore={setModalStaff}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            {/* *** MODIFIED DIRECTOR SECTION *** */}
            {director && (
              <section id="directorsSection">
                <div className="container flex flex-col lg:flex-row gap-6 lg:flex-nowrap">
                  {/* Left Side: Image */}
                  <div className="relative flex justify-center items-end lg:justify-end">
                    <ImageAtom
                      src={director.image}
                      alt={director.title}
                      className="max-w-full p-2 "
                    />
                    <Badge className="bg-green-800/95 width-[217px] text-sm">
                      {director.title}
                    </Badge>
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex-1 flex flex-col">
                    <DirectorContent
                      // Added line-clamp-3 here
                      className="leading-loose line-clamp-3"
                      content={
                        director.descriptionDirector ||
                        "No description available."
                      }
                      linkHref="#"
                      linkText="" // This hides the default link
                    />
                    {/* "View More" Button */}
                    <div className="mt-4">
                      <button
                        onClick={() => setModalStaff(director)}
                        className="text-green-700 font-bold hover:underline"
                      >
                        VIEW MORE →
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {/* Tab Section (No Change) */}
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

            {activeTab === "scientific" ? (
              <StaffsGrid
                items={divisionItems}
                showHeading={false}
                subDeptIdForLinks="scientific"
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {getCurrentStaffData().map((staffMember) => (
                  <StaffFlipCard
                    key={staffMember.id}
                    staff={staffMember}
                    onViewMore={setModalStaff}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* This modal opens and shows the full details */}
      {modalStaff && (
        <StaffModal staff={modalStaff} onClose={() => setModalStaff(null)} />
      )}
    </>
  );
};