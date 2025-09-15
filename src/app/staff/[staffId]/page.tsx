"use client";

import { useParams } from "next/navigation";
import { Logo } from "@/designs/atoms/Logo";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { StaffsSection } from "@/designs/templates/StaffsSection";
import { staffData } from "@/lib/utils";
import React from "react";

export default function StaffDetailPage() {
  const params = useParams();
  const staffId = params.staffId as string;

  const selectedStaff = staffData.find((staff) => staff.id === staffId);
  const otherStaff = staffData.filter((staff) => staff.id !== staffId);

  if (!selectedStaff) {
    return <div className="p-10 text-center">Staff not found</div>;
  }

  return (
    <div>
      <Header />
      <ResponsiveNavbar />
      <section className="relative w-full">
        <Logo src="/icons/Mask group.jpg" alt="Website Banner" responsive />
      </section>

      <StaffsSection staffsItems={otherStaff} selectedStaff={selectedStaff} />

      <Footer />
    </div>
  );
}
