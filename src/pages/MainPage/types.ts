import { ICalendarEvent, IEventResponse } from "@types";

interface EventDialogProps {
  dialogInfo: IDialogInfo;
  setDialogInfo: (data: IDialogInfo) => void;
  onSubmitForm: (data: IEventResponse) => void;
}

interface IDialogInfo {
  event: ICalendarEvent | null;
  open: boolean;
}

export { EventDialogProps, IDialogInfo };
