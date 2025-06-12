import { IEvent } from "@types";

interface MainCalendarProps {
  events: IEvent[];
  selectedDate?: Date;
  handleChangeDate?: (date: Date) => void;
}

export type { MainCalendarProps };
