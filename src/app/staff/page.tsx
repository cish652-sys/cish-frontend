// app/staff/page.tsx
"use client";

import { Logo } from "@/designs/atoms/Logo";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { StaffsSection } from "@/designs/templates/StaffsSection";
import { StaffsItems } from "@/designs/organisms/StaffsGrid";
import {
  getDirector,
  getStaffBySubDept,
} from "@/lib/api"; // Import API functions
import { dummyStaffData } from "@/lib/utils"; // Keep dummy data for DIVISIONS
import React, { useState, useEffect } from "react";

const StaffPage = () => {
  // State to hold all fetched data
  const [director, setDirector] = useState<StaffsItems | null>(null);
  const [technicalStaff, setTechnicalStaff] = useState<StaffsItems[]>([]);
  const [skilledStaff, setSkilledStaff] = useState<StaffsItems[]>([]);
  const [adminStaff, setAdminStaff] = useState<StaffsItems[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllStaffData = async () => {
      try {
        // Run fetches in parallel (REMOVED scientific)
        const [
          directorData,
          technicalData,
          skilledData,
          adminData,
        ] = await Promise.all([
          getDirector(),
          getStaffBySubDept("technical"),
          getStaffBySubDept("skilled"),
          getStaffBySubDept("administrative"),
        ]);

        setDirector(directorData);
        setTechnicalStaff(technicalData);
        setSkilledStaff(skilledData);
        setAdminStaff(adminData);
      } catch (error) {
        console.error("Failed to load staff page data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllStaffData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Header />
        <ResponsiveNavbar />
        <div className="h-screen w-full flex items-center justify-center text-2xl">
          Loading Staff Data...
        </div>
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
        divisionItems={dummyStaffData} // <-- Pass divisions here
        director={director || undefined}
        technicalStaff={technicalStaff}
        skilledSupportingStaff={skilledStaff}
        administrativeStaff={adminStaff}
      />
      <Footer />
    </div>
  );
};

export default StaffPage;