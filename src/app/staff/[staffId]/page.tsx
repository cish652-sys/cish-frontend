"use client";

import { useParams } from "next/navigation";
import { Logo } from "@/designs/atoms/Logo";
import { Footer } from "@/designs/organisms/FooterOrganisms/Footer";
import { Header } from "@/designs/organisms/Header";
import ResponsiveNavbar from "@/designs/organisms/Navbar/NavigatioMenu";
import { StaffsSection } from "@/designs/templates/StaffsSection";
import React,{ useEffect, useState } from "react";

import { SubDepartment, Employee, StaffDivision, MappedEmployee } from "@/types";

import { dummyStaffData, dummyDivisionStaffData } from "@/lib/utils";

const API_URL = "https://api.cish.org.in/api/subdepartments";

function mapApiEmployeeToComponent(apiEmp: Employee): MappedEmployee {
  return {
    id: apiEmp.id.toString(),
    title: apiEmp.name,
    description: [apiEmp.designation],
    image: apiEmp.photo || "/icons/dummyStaff.svg",
    name: apiEmp.name,
    designation: apiEmp.designation,
    icarEmail: apiEmp.icarEmail,
    altEmail: apiEmp.alternateEmail,
    specialization: apiEmp.specialization,
    joiningDate: apiEmp.joiningDate,
    mscInstitute: apiEmp.mscFrom,
    phdInstitute: apiEmp.phdFrom,
  };
}

export default function StaffDetailPage() {
  const params = useParams();
  const staffId = (params.staffId as string) || "";

  const [selectedStaff, setSelectedStaff] = useState<StaffDivision | null>(null);
  const [divisionStaff, setDivisionStaff] = useState<MappedEmployee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!staffId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`API request failed: ${res.status}`);

        const subDepartments: SubDepartment[] = await res.json();
        
        const dept = subDepartments.find(
          (d) => d.subDeptName.toLowerCase().replace(/\s+/g, "-") === staffId
        );

        if (!dept) throw new Error(`Division '${staffId}' not found.`);

        const head = dept.employees.find((emp) => emp.isHead);

    
        setSelectedStaff({
          id: staffId, 
          title: dept.subDeptName,
          headName: head?.name || "N/A",
          headTitle: head?.designation || "Head of Division",
          image: head?.photo || "/icons/dummyStaff.svg",
          description: dept.description ? [dept.description] : ["No description available."],
          href: `/staff/${staffId}`,
        });

        setDivisionStaff(dept.employees.map(mapApiEmployeeToComponent));
        
      } catch (error) {
        console.warn(`Warning: Fetch failed. Using fallback data. Error: ${error}`);
        const dummyStaff = dummyStaffData.find((s) => s.id === staffId);
        const dummyDivision = dummyDivisionStaffData[staffId] || [];
        
        setSelectedStaff(dummyStaff || null);
        setDivisionStaff(dummyDivision);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [staffId]); 

  // Loading state UI
  if (isLoading) {
    return (
      <>
        <Header />
        <ResponsiveNavbar />
        <div className="flex justify-center items-center min-h-[50vh]">Loading staff details...</div>
        <Footer />
      </>
    );
  }

  if (!selectedStaff) {
    return (
      <>
        <Header />
        <ResponsiveNavbar />
        <div className="flex justify-center items-center min-h-[50vh]">Staff division not found.</div>
        <Footer />
      </>
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
        selectedStaff={selectedStaff}
        divisionStaff={divisionStaff}
        staffsItems={[]}
        showHeading={false}
      />
      <Footer />
    </div>
  );
}