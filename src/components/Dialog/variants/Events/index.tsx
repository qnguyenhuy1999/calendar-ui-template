import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../Common";
import { EventDialogProps } from "./types";
import { Calendar } from "lucide-react";
import React from "react";

const EventDialog: React.FC<EventDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#0F4C81]">Event Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="py-8 text-center">
            <Calendar className="h-12 w-12 text-[#5684AE] mx-auto mb-4" />
            <p className="text-muted-foreground">Event details would be displayed here</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;
