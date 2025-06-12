import { IEvent } from "@types";

interface MiniCalendarProps {
  events: IEvent[];
  selectedDate?: Date;
  handleChangeDate?: (date: Date) => void;
}

export type { MiniCalendarProps };
