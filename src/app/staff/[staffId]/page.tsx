// app/staff/[staffId]/page.tsx
"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Logo } from "@/designs/atoms/Logo";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { StaffsSection } from "@/designs/templates/StaffsSection";
import { StaffsItems } from "@/designs/organisms/StaffsGrid";
import { getStaffByDivision } from "@/lib/api";
import { dummyStaffData } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export default function StaffDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const staffId = params.staffId as string;

  const subDeptId = searchParams.get("subDeptId");

  // 1. Find the selected division from your dummy data
  const selectedStaff = dummyStaffData.find((staff) => staff.id === staffId);

  // 2. State for API-fetched division staff
  const [divisionStaff, setDivisionStaff] = useState<StaffsItems[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDivisionStaff = async () => {
      // *** THIS IS THE KEY CHANGE ***
      // Use the new 'divisionQueryName' if it exists,
      // otherwise, fall back to the 'title'.
      const divisionNameForApi = selectedStaff?.divisionQueryName || selectedStaff?.title;

      // Check if we have all needed info
      if (selectedStaff && divisionNameForApi && subDeptId) {
        try {
          // Use the correct division name for the API call
          const staffData = await getStaffByDivision(divisionNameForApi, subDeptId);
          setDivisionStaff(staffData);
        } catch (error) {
          console.error("Failed to load division staff data:", error);
          setDivisionStaff([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        // Not all info is available
        setIsLoading(false);
      }
    };

    fetchDivisionStaff();
  }, [selectedStaff, subDeptId]); // Re-run if either changes

  if (!selectedStaff && !isLoading) {
    return <div className="p-10 text-center">Division not found</div>;
  }

  if (isLoading) {
    return (
      <div>
        <Header />
        <ResponsiveNavbar />
        <div className="p-10 text-center text-lg">Loading Staff Members...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>

      <StaffsSection
        divisionItems={[]}
        selectedStaff={selectedStaff} // This will pass the all-caps title for display
        showHeading={false}
        divisionStaff={divisionStaff}
      />

      <Footer />
    </div>
  );
}
