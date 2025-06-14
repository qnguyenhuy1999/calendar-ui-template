import { ECalendarView } from "./enums";

import { ICalendarEvent } from "@types";

interface MainCalendarProps {
  events: ICalendarEvent[];
  selectedDate?: Date | null;
  view: ECalendarView;
  handleChangeDate?: (date: Date) => void;
  onChangeView?: (view: ECalendarView) => void;
}

export type { MainCalendarProps };
