"use client";
import { Logo } from "@/designs/atoms/Logo";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { StaffsSection } from "@/designs/templates/StaffsSection";
import {
  staffData,
  scientificStaffData,
  technicalStaffData,
  skilledSupportingStaffData,
  administrativeStaffData,
} from "@/lib/utils";
import React from "react";

const StaffPage = () => {
  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>
      <StaffsSection
        staffsItems={staffData}
        scientificStaff={scientificStaffData}
        technicalStaff={technicalStaffData}
        skilledSupportingStaff={skilledSupportingStaffData}
        administrativeStaff={administrativeStaffData}
      />
      <Footer />
    </div>
  );
};

export default StaffPage;
