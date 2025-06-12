import { EEventType } from "@enums";

interface IEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  extendedProps: {
    type: EEventType;
    hasVideoCall: false;
    client?: {
      name: string;
      avatar: string;
      webURL: string;
    };
  };
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export type { IEvent };
