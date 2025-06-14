import { EventCardProps } from "./types";
import { Video } from "lucide-react";

import { EEventType } from "@enums";
import { formatTime24Hour, getGMTOffset } from "@utils";

export default function EventCard({ event, handleEventClick }: EventCardProps) {
  const onEventClick = (e: React.MouseEvent) => {
    handleEventClick(event, e);
  };

  const isAppointment = event.extendedProps.type === EEventType.APPOINTMENT;

  const classes = {
    card: !isAppointment ? "border-dark-orange bg-dark-blue" : "border-dark-blue bg-dark-orange text-white",
    text: !isAppointment ? "text-white opacity-80" : "text-gray-700",
  };

  return (
    <div
      key={event.id}
      className={`rounded-lg p-4 cursor-pointer border-l-4 ${classes.card}`}
      onClick={onEventClick}
    >
      <h3 className={`mb-2 font-medium ${classes.text}`}>{event.title}</h3>
      <p className={`mb-3 text-sm ${classes.text}`}>
        {formatTime24Hour(event.start)} — {formatTime24Hour(event.end)} {getGMTOffset(event.start)}
      </p>
      {event.extendedProps.type === EEventType.APPOINTMENT && (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={event.extendedProps?.client?.avatar}
              alt="Client"
              className="object-cover w-8 h-8 mr-2 rounded-full"
            />
            <a
              href={event.extendedProps?.client?.webURL}
              className={`text-sm ${classes.text} hover:underline`}
            >
              View Client Profile
            </a>
          </div>
          <div className="bg-[#5684AE] text-white p-2 rounded-full cursor-pointer">
            <Video />
          </div>
        </div>
      )}
    </div>
  );
}
