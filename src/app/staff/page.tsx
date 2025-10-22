import { Logo } from "@/designs/atoms/Logo";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { StaffsSection } from "@/designs/templates/StaffsSection";
import React from "react";

// --- Import your new API types ---
import { SubDepartment, StaffDivision } from "@/types";

// --- Import your DUMMY data and OTHER staff data ---
import {
  technicalStaffData,
  skilledSupportingStaffData,
  administrativeStaffData,
  dummyStaffData, // <-- Import dummy data
  dummyScientificStaffData, // <-- Import dummy data
} from "@/lib/utils";

// --- API Fetching and Transformation Logic (Now with try...catch) ---
const API_URL = "https://api.cish.org.in/api/subdepartments";

async function getStaffPageData() {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });
    
    // Handle HTTP errors
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const subDepartments: SubDepartment[] = await res.json();
    
    // Handle empty data response
    if (!subDepartments || subDepartments.length === 0) {
      throw new Error("API returned an empty array or null.");
    }

    // --- Process API Data (Success Case) ---
    const scientificStaff: StaffDivision[] = [];
    const staffData: StaffDivision[] = [];

    for (const dept of subDepartments) {
      const head = dept.employees.find((emp) => emp.isHead);
      const divisionId = dept.subDeptId;

      scientificStaff.push({
        id: divisionId,
        title: dept.subDeptName,
        description: [""],
        image: head?.photo || "/icons/Division of Crop Improvement.png",
        href: `/staff/${divisionId}`,
      });

      staffData.push({
        id: divisionId,
        title: dept.subDeptName,
        headName: head?.name,
        headTitle: head?.designation,
        image: head?.photo || "/icons/dummyStaff.svg",
        description: [""],
        href: `/staff/${divisionId}`,
      });
    }
    
    console.log("Successfully fetched and processed live API data.");
    return { scientificStaff, staffData };

  } catch (error) {
    // --- Fallback Case ---
    console.warn(
      `Warning: Failed to fetch live staff data. Using dummy data. Error: ${error instanceof Error ? error.message : String(error)}`
    );
    // Return your dummy data
    return {
      scientificStaff: dummyScientificStaffData as StaffDivision[],
      staffData: dummyStaffData as StaffDivision[],
    };
  }
}

// Make the component async
const StaffPage = async () => {
  // This function will now safely return either live data or dummy data
  const { scientificStaff, staffData } = await getStaffPageData();

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <StaffsSection
        staffsItems={staffData}
        scientificStaff={scientificStaff}
        technicalStaff={technicalStaffData} // This is still the original mock data
        skilledSupportingStaff={skilledSupportingStaffData} // This is still the original mock data
        administrativeStaff={administrativeStaffData} // This is still the original mock data
      />
      <Footer />
    </div>
  );
};

export default StaffPage;