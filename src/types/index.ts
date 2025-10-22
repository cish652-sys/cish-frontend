export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppState {
  user: User | null;
}
export type Job = {
  id: number;
  title: string;
  description: string;
  lastDateText: string;
  publishedDate: string;
  startDate: string;
  interviewDate: string;
  latestUpdate: string;
  buttons: ("form" | "result")[];
};

export interface Employee {
  id: number;
  name: string;
  designation: string;
  icarEmail: string;
  alternateEmail: string;
  specialization: string;
  joiningDate: string;
  mscFrom: string;
  phdFrom: string;
  photo: string;
  isHead: boolean;
}

export interface SubDepartment {
  id: number;
  subDeptId: string;
  subDeptName: string;
  employees: Employee[];
  description?: string;
}

export interface StaffDivision {
  id: string;
  title: string;
  headName?: string;
  headTitle?: string;
  image: string;
  description: string[];
  href: string;
}

export interface MappedEmployee {
  id: string;
  title: string;
  description: string[];
  image: string;
  name: string;
  designation: string;
  icarEmail: string;
  altEmail: string;
  specialization: string;
  joiningDate: string;
  mscInstitute: string;
  phdInstitute: string;
}

export interface DivisionStaffData {
  [key: string]: MappedEmployee[];
}
// This is the complete structure of a single item from your API
export type ApiTechnology = {
  id: number;
  type: string;
  title: string;
  date: string;
  image: string;
  inventor: string;
  collaborators: string;
  maintainerInventor: string;
  yearOfDevelopment: string;
  yearOfRelease: string;
  yearOfCommercialization: string;
  icNumber: string;
  ppvfraRegistration: string;
  details: string;
  natureOfLicense: string;
  licenseDuration: string;
  licensingTerritory: string;
  licenseFee: string;
  targetCustomers: string;
  royalty: string;
  createdAt: string;
  updatedAt: string;
  ispublished: boolean;
  isactive: boolean;
  backtocreator: boolean;
  isTrending: boolean;
};

// This is the custom type for the display cards that you need to create
export type TechnologyCardItem = {
  id: number;
  title: string;
  description: string[];
  image?: string;
  href: string;
};
