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

type StaffsSectionProps = {
  staffsItems: StaffsItems[];
  showHeading?: boolean;
  selectedStaff?: StaffsItems;
  scientificStaff?: StaffsItems[];
  technicalStaff?: StaffsItems[];
  skilledSupportingStaff?: StaffsItems[];
  administrativeStaff?: StaffsItems[];
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
}) => {
  const [activeTab, setActiveTab] = useState<StaffCategory>("scientific");

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
        description={
          selectedStaff
            ? selectedStaff.description
            : [
                "Staff Play A Crucial Role In Building Trust And Efficiency Within Any Service System...",
                "Clear Communication By Staff Significantly Improve User Satisfaction...",
              ]
        }
      />
      <section className="w-full px-4 md:px-8 lg:px-16 py-10 bg-[#FBFAF0]">
        {selectedStaff ? (
          <section id="staffDetail" className="my-14 py-6">
            <div className="container flex flex-col lg:flex-row gap-6">
              {selectedStaff.image && (
                <Image
                  src={selectedStaff.image}
                  alt={selectedStaff.title}
                  className="max-w-sm  shadow-md"
                  width={200}
                  height={200}
                />
              )}
              <div className="flex-1 flex flex-col">
                <p className="leading-loose">{selectedStaff.description.join(" ")}</p>
              </div>
            </div>
          </section>
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
                  content="Dr. Damodaran Thukkaram, Born On October 2nd, 1973 In Chennai, Did His M.Sc. And Ph.D. From Tamil Nadu Agricultural University, Coimbatore (1998-2003). Joined The Agricultural Research Service (ARS) Of ICAR At Central Agricultural Research Institute, Port Blair In 1999 As A Scientist, Later Got Selected As Senior Scientist At ICAR-Central Soil Salinity Research Institute (CSSRI), Regional Research Station (RRS), Lucknow, In The Year 2008. Further, Placed As Principal Scientist In The Same Institute And Later Served As Head In-Charge Of The Station Since 2020. On 23rd January 2023, He Assumed Charge As The Regular Director Of ICAR Central Institute For Subtropical Horticulture, Lucknow, And Is Currently Leading The Institute."
                  linkHref="#"
                  linkText=""
                />
                <div className="mt-auto pb-2">
                  <Link href="/varieties">
                    <Button className="bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 md:px-8 py-8 font-semibold text-sm sm:text-base w-full sm:w-auto">
                      OUR DIRECTOR →
                    </Button>
                  </Link>
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

            {/* Active Tab Content */}
            <div className="mb-8">
              <Typography variant="sectionHeading" className="text-green-700 mb-4">
                {staffTabs.find((tab) => tab.id === activeTab)?.label}
              </Typography>
            </div>
          </div>
        )}

        <TechnologyGrid items={getCurrentStaffData()} showHeading={false} />
      </section>
    </>
  );
};
