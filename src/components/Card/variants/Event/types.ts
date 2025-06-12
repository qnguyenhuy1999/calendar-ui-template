import { IEvent } from "@types";

interface EventCardProps {
  event: IEvent;
  handleEventClick: (eventId: string, e: React.MouseEvent) => void;
}

export type { EventCardProps };
