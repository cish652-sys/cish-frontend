// lib/api.ts
import { StaffsItems } from "@/designs/organisms/StaffsGrid";

// 1. Define the raw API response structure
export interface ApiEmployee {
  id: number;
  subDeptId: string;
  subDeptName: string;
  division: string;
  name: string;
  designation: string;
  icarEmail: string;
  alternateEmail: string | null;
  specialization: string;
  joiningDate: string;
  mscFrom: string;
  phdFrom: string;
  photo: string | null;
  isHead: boolean;
  isDirector: boolean;
  descriptionDirector: string | null;
}

const API_BASE_URL = "https://api.cish.org.in/employees";

export const mapApiEmployeeToStaffsItems = (employee: ApiEmployee): StaffsItems => {
  const staffName = employee.name || "N/A";

  return {
    // Core fields
    id: employee.id.toString(),
    title: staffName,
    image: employee.photo || "/icons/dummyStaff.svg", // Use photo with fallback
    description: [], // Not provided for individual staff

    name: staffName,
    designation: employee.designation,
    icarEmail: employee.icarEmail,
    altEmail: employee.alternateEmail || undefined, // Handle null
    specialization: employee.specialization,
    joiningDate: employee.joiningDate,
    mscInstitute: employee.mscFrom, // Map from mscFrom
    phdInstitute: employee.phdFrom, // Map from phdFrom

    subDeptId: employee.subDeptId,
    division: employee.division,
    isHead: employee.isHead,
    isDirector: employee.isDirector,
    descriptionDirector: employee.descriptionDirector,
  };
};

async function fetchStaffData(queryParams: URLSearchParams): Promise<StaffsItems[]> {
  try {
    const response = await fetch(`${API_BASE_URL}?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    const data: ApiEmployee[] = await response.json();
    return data.map(mapApiEmployeeToStaffsItems);
  } catch (error) {
    console.error("Error fetching staff data:", error);
    return []; // Return empty array on error
  }
}

export async function getDirector(): Promise<StaffsItems | null> {
  const params = new URLSearchParams({ isDirector: "true" });
  const directors = await fetchStaffData(params);
  return directors.length > 0 ? directors[0] : null;
}

export async function getStaffBySubDept(
  subDeptId: "scientific" | "technical" | "skilled" | "administrative"
): Promise<StaffsItems[]> {
  const params = new URLSearchParams({ isDirector: "false", subDeptId });
  return fetchStaffData(params);
}

// Gets staff for a specific division
export async function getStaffByDivision(
  divisionName: string,
  subDeptId: string // <-- ADDED parameter
): Promise<StaffsItems[]> {
  const params = new URLSearchParams({
    isDirector: "false",
    division: divisionName,
    subDeptId: subDeptId, // <-- ADDED to the query
  });
  return fetchStaffData(params);
}
