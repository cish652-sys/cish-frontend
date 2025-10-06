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
  buttons: ('form' | 'result')[]; // An array of specific strings
};