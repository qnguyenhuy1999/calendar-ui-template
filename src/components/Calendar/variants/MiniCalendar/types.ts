import { ICalendarEvent } from "@types";

interface MiniCalendarProps {
  events: ICalendarEvent[];
  selectedDate?: Date | null;
  handleChangeDate?: (date: Date) => void;
}

export type { MiniCalendarProps };
