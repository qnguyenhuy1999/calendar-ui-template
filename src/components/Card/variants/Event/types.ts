import { ICalendarEvent } from "@types";

interface EventCardProps {
  event: ICalendarEvent;
  handleEventClick: (eventId: string, e: React.MouseEvent) => void;
}

export type { EventCardProps };
