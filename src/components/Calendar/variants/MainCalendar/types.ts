import { ICalendarEvent } from "@types";
import { ECalendarView } from "./enums";


interface MainCalendarProps {
  events: ICalendarEvent[];
  selectedDate?: Date | null;
  view: ECalendarView;
  handleChangeDate?: (date: Date) => void;
  handleClickViewEvent?: (event: ICalendarEvent | null) => void;
  onChangeView?: (view: ECalendarView) => void;
}

export type { MainCalendarProps };
