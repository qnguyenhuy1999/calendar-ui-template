import { IClient } from "./client";

import { EEventType, EFrequency } from "@enums";

interface ICalendarEvent {
  id: string;
  title: string;
  start: Date | string;
  end: Date | string;
  rrule?: {
    freq: EFrequency;
    interval: number;
    byweekday: string[];
    until: Date | string;
    dtstart: Date | string;
  };
  extendedProps: {
    type: EEventType;
    client?: IClient | null;
  };
}

interface IEventResponse {
  id: string | number;
  title: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
  type: EEventType;
  recurrence: {
    frequency: string;
    byDay: string[];
  } | null;
  client: IClient | null;
}

export type { ICalendarEvent, IEventResponse };
