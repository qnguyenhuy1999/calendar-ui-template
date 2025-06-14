import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../Common";
import { EventDetailProps } from "./types";

export default function EventDetail({ children, event, open, onOpenChange }: EventDetailProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#0F4C81]">{event?.title || "Create a new event"}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
