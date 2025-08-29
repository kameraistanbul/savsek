
export interface LeaveEntry {
  name: string;
  date: string; // Using ISO string format 'YYYY-MM-DD' for easy comparison
  type: string;
}

export interface PublicHoliday {
  date: string; // 'YYYY-MM-DD'
  name: string;
}
