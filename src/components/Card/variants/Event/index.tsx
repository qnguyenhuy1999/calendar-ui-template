import { EventCardProps } from "./types";
import { Video } from "lucide-react";

import { EEventType } from "@enums";
import { formatTime24Hour, getGMTOffset } from "@utils";

export default function EventCard({ event, handleEventClick }: EventCardProps) {
  const onEventClick = (e: React.MouseEvent) => {
    handleEventClick(event.id, e);
  };

  return (
    <div
      key={event.id}
      className={`rounded-lg p-4 cursor-pointer ${event.extendedProps.type === EEventType.APPOINTMENT ? "bg-[#FFE4C8] border-l-4 border-[#5684AE]" : "bg-[#F9BE81] border-l-4 border-[#F9BE81]"}`}
      onClick={onEventClick}
    >
      <h3 className="mb-2 font-medium text-[#0F4C81]">{event.title}</h3>
      <p className="mb-3 text-sm text-gray-600">
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
              className="text-[#5684AE] text-sm"
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
