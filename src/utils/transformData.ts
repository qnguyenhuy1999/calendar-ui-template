import { formatDateTime, formatTime24Hour } from "./date";
import dayjs from "dayjs";

import { EFrequency } from "@enums";
import { ICalendarEvent, IEventResponse } from "@types";

const transformDataEvents = (events: IEventResponse[]): ICalendarEvent[] => {
  return events.map((event) => {
    const { startDate, endDate, recurrence, ...rest } = event;
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    const formattedStart = start.toDate();
    const formattedEnd = end.toDate();
    const durationInHours = end.diff(start, "hours", true);
    const formattedDuration = formatTime24Hour(dayjs().startOf("day").add(durationInHours, "hours").toDate());

    return {
      id: `${rest.id}`,
      title: rest.title || "",
      start: formattedStart,
      end: formattedEnd,
      description: rest.description || "",
      rrule: recurrence
        ? {
            freq: recurrence.frequency.toLowerCase() as EFrequency,
            interval: 1,
            byweekday: recurrence.byDay,
            until: formatDateTime(formattedEnd),
            dtstart: formatDateTime(formattedStart),
          }
        : undefined,
      duration: formattedDuration,
      extendedProps: {
        type: rest.type,
        client: rest?.client || undefined,
      },
    };
  });
};

export { transformDataEvents };
