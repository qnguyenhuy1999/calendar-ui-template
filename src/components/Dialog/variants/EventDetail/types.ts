import { ICalendarEvent } from "@types";

export interface EventDetailProps {
  children: React.ReactNode;
  event: ICalendarEvent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
