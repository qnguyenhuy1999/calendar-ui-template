import { getMinNameOfTheDay } from "./date";
import dayjs from "dayjs";

import { EDayOfWeek, EFrequency } from "@enums";
import { ICalendarEvent } from "@types";

const getEventsForDate = (date: Date | null, events: ICalendarEvent[]): any[] => {
  if (!date) return [];

  return events.filter((event) => {
    const eventStart = new Date(event.start);

    if (!event?.rrule) {
      return dayjs(eventStart).isSame(date, "day");
    }

    const isWithinEndDate = (endDate: string | Date) => {
      if (!endDate) return true;
      return dayjs(date).isSameOrBefore(endDate, "day");
    };

    if (dayjs(date).isBefore(eventStart, "day")) return false;
    const recurrenceType = event?.rrule?.freq;
    const byweekday = event?.rrule?.byweekday;

    switch (recurrenceType) {
      case EFrequency.DAILY:
        return byweekday.includes(getMinNameOfTheDay(date).toUpperCase() as EDayOfWeek) && isWithinEndDate(event?.end);

      case EFrequency.WEEKLY: {
        const diffDays = Math.floor((date.getTime() - eventStart.getTime()) / (1000 * 3600 * 24));
        return date.getDate() === eventStart.getDate() && diffDays % 7 === 0 && isWithinEndDate(event?.end);
      }

      case EFrequency.MONTHLY:
        return date.getDate() === eventStart.getDate() && isWithinEndDate(event?.end);

      case EFrequency.YEARLY:
        return date.getDate() === eventStart.getDate() && date.getMonth() === eventStart.getMonth() && isWithinEndDate(event?.end);

      default:
        return false;
    }
  });
};

export { getEventsForDate };
