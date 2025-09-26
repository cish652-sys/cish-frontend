"use client";
import Link from "next/link";
import ImageAtom from "../atoms/ImageDirectorDesk";
import Typography from "../atoms/Typography";
import DirectorContent from "../molecules/DirectorsContent";
import { SectionHeader } from "../organisms/SectionHeader";
import { StaffsItems } from "../organisms/StaffsGrid";
import { TechnologyGrid } from "../organisms/TechnologyGrid";
import { Button } from "../atoms/button";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { StaffFlipCard } from "../molecules/StaffFlipCard";
import { StaffModal } from "../molecules/StaffModal";

type StaffsSectionProps = {
  staffsItems: StaffsItems[];
  showHeading?: boolean;
  selectedStaff?: StaffsItems;
  scientificStaff?: StaffsItems[];
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
  const [modalStaff, setModalStaff] = useState<StaffsItems | null>(null);

  const staffTabs: StaffTab[] = [
    { id: "scientific", label: "SCIENTIFIC STAFF", data: scientificStaff },
    { id: "technical", label: "TECHNICAL STAFF", data: technicalStaff },
    { id: "skilled", label: "SKILLED SUPPORTING STAFF", data: skilledSupportingStaff },
    { id: "administrative", label: "ADMINISTRATIVE STAFF", data: administrativeStaff },
  ];

  const getCurrentStaffData = (): StaffsItems[] => {
    const currentTab = staffTabs.find((tab) => tab.id === activeTab);
    return currentTab?.data || staffsItems;
  };

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
        description={selectedStaff ? selectedStaff.description : [""]}
      />
      <section className="w-full px-4 md:px-8 lg:px-16 py-10 bg-[#FBFAF0]">
        {selectedStaff ? (
          <>
            <section id="divisionHeadSection" className="my-14 py-6">
              <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="relative w-full lg:w-1/3 flex-shrink-0">
                  {" "}
                  {selectedStaff.image && (
                    <Image
                      src={selectedStaff.image}
                      alt={selectedStaff.headName || selectedStaff.title}
                      className="shadow-lg mx-auto object-cover" // Image styles are unchanged
                      width={360}
                      height={360}
                    />
                  )}
                  {selectedStaff.headName && (
                    <Badge className="bg-green-700/95 text-lg">{selectedStaff.headName}</Badge>
                  )}
                </div>

                <div className="w-full lg:w-2/3 flex flex-col">
                  {selectedStaff.headTitle && (
                    <Typography variant="sectionHeading" className="text-green-800 font-bold mb-6">
                      {selectedStaff.headTitle}
                    </Typography>
                  )}

                  {selectedStaff.descriptions && selectedStaff.descriptions.length > 0 && (
                    <div className="mt-10">
                      <div className="space-y-4 text-gray-800 text-base leading-relaxed">
                        {selectedStaff.descriptions.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-10">
                    <Link href="#">
                      <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 font-semibold text-base w-auto">
                        VIEW MORE →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {divisionStaff.length > 0 && (
              <section id="divisionStaffSection" className="my-14 py-6">
                <div className="container">
                  <div className="mb-8">
                    <Typography variant="sectionHeading" className="text-green-700 mb-4">
                      STAFF MEMBERS
                    </Typography>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {divisionStaff.map((staffMember) => (
                      <StaffFlipCard
                        key={staffMember.id}
                        staff={staffMember}
                        onViewMore={setModalStaff} // This will set the state to the clicked staff member
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <section id="directorsSection" className={`my-14 py-6 `}>
            <div className="container flex flex-col lg:flex-row gap-6 lg:flex-nowrap">
              <div className="flex mb-[-8px] justify-center items-end lg:justify-end">
                <ImageAtom
                  src="/icons/directorStaff.svg"
                  alt="Director"
                  className="max-w-full p-2 "
                />
              </div>
              <div className="flex-1 flex flex-col">
                <DirectorContent
                  className="leading-loose"
                  content="Dr. Damodaran Thukkaram, born on October 2nd, 1973, in Chennai, did his M.Sc. and Ph.D. from Tamil Nadu Agricultural University, Coimbatore (1998–2003). He joined the Agricultural Research Service (ARS) of ICAR at the Central Agricultural Research Institute, Port Blair, in 1999 as a Scientist. Later, he was selected as Senior Scientist at ICAR–Central Soil Salinity Research Institute (CSSRI), Regional Research Station (RRS), Lucknow, in the year 2008. Further, he was placed as Principal Scientist in the same institute and later served as Head In-charge of the station since 2020. On 23rd January 2023, he assumed charge as the regular Director of ICAR–Central Institute for Subtropical Horticulture, Lucknow, and is currently leading the institute."
                  linkHref="#"
                  linkText=""
                />
                <div className="mt-auto pb-2">
                  <Button className="bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 md:px-8 py-8 font-semibold text-sm sm:text-base w-full sm:w-auto">
                    OUR DIRECTOR
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {showHeading && (
          <div className="container">
            <div className="flex flex-wrap items-center py-10 gap-4">
              {staffTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 mb-8 px-6 py-6 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-green-600 text-white"
                      : "hover:bg-green-600 hover:text-white bg-gray-100 text-gray-700"
                  }`}
                >
                  <Typography
                    variant="sectionHeading"
                    className={activeTab === tab.id ? "text-white" : ""}
                  >
                    {tab.label}
                  </Typography>
                </button>
              ))}
            </div>

            <div className="mb-8">
              <Typography variant="sectionHeading" className="text-green-700 mb-4">
                {staffTabs.find((tab) => tab.id === activeTab)?.label}
              </Typography>
            </div>
          </div>
        )}

        {showHeading && (
          <TechnologyGrid
            items={getCurrentStaffData()}
            showTechnologyDetails={false}
            showHeading={false}
          />
        )}
      </section>
      {modalStaff && <StaffModal staff={modalStaff} onClose={() => setModalStaff(null)} />}
    </>
  );
};
