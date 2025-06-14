import { ICalendarEvent } from "@types";

interface EventCardProps {
  event: ICalendarEvent;
  handleEventClick: (event: ICalendarEvent, e: React.MouseEvent) => void;
}

export type { EventCardProps };
