import { MainCalendarProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button, SimpleSelect } from "@components";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { IconButton } from "@radix-ui/themes";
import { getMonthName, getYear } from "@utils";

const viewOptions = [
  { label: "Month", value: "dayGridMonth" },
  { label: "Week", value: "timeGridWeek" },
  { label: "Day", value: "timeGridDay" },
];

export default function MainCalendar({ events, selectedDate: selectedDateProp, handleChangeDate }: MainCalendarProps) {
  const calendarRef = useRef<any>(null);

  const currentDate = new Date(2025, 5, 13);
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [view, setView] = useState<string>("dayGridMonth");

  const changeView = (viewName: string) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView(viewName);
      setView(viewName);
    }
  };

  const handleDateClick = (arg: any) => {
    const date = new Date(arg.date);
    setSelectedDate(date);

    if (handleChangeDate) handleChangeDate(date);
  };

  const renderEventContent = (eventInfo: any) => {
    const { event } = eventInfo;
    const { extendedProps } = event;

    return (
      <div className="p-1 text-xs truncate">
        {extendedProps.hasVideoCall && <i className="mr-1 text-xs fas fa-video"></i>}
        {event.title}
      </div>
    );
  };

  // Function to check if a date has events
  const hasEventsOnDate = (date: Date): boolean => {
    return events.some((event) => {
      const eventDate = new Date(event.start);
      return eventDate.getDate() === date.getDate() && eventDate.getMonth() === date.getMonth() && eventDate.getFullYear() === date.getFullYear();
    });
  };

  // Function to add CSS class to days with events
  const getDayCellClassNames = (arg: any): string => {
    const date = new Date(arg.date);
    return hasEventsOnDate(date) ? "fc-day-has-events" : "";
  };

  const goToPrevMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev();
      setSelectedDate(calendarApi.getDate());
    }
  };

  const goToNextMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next();
      setSelectedDate(calendarApi.getDate());
    }
  };

  const goToToday = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(currentDate);
      setSelectedDate(currentDate);
      if (handleChangeDate) handleChangeDate(currentDate);
    }
  };

  useEffect(() => {
    if (selectedDateProp) {
      const calendarApi = calendarRef.current?.getApi();
      if (calendarApi) {
        calendarApi.gotoDate(selectedDateProp);
        setSelectedDate(selectedDateProp);
      }
    }
  }, [selectedDateProp]);

  return (
    <div className="w-full p-6 md:w-2/3">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={goToToday}
          >
            Today
          </Button>

          <IconButton
            variant="outline"
            className="shadow-none"
            onClick={goToPrevMonth}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            variant="outline"
            className="shadow-none"
            onClick={goToNextMonth}
          >
            <ChevronRight />
          </IconButton>

          <h2 className="text-2xl font-bold text-[#0F4C81]">
            {getMonthName(selectedDate)} {getYear(selectedDate)}
          </h2>
        </div>

        <SimpleSelect
          options={viewOptions}
          placeholder="Choose a view..."
          value={view}
          onValueChange={(value) => changeView(value)}
        />
      </div>

      {/* Main Calendar */}
      <div className="main-calendar-wrapper">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate={currentDate}
          headerToolbar={false}
          events={events}
          eventContent={renderEventContent}
          dateClick={handleDateClick}
          dayCellClassNames={getDayCellClassNames}
          height="auto"
          dayMaxEvents={3}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
          dayHeaderFormat={{
            weekday: "short",
          }}
          allDaySlot={false}
          slotDuration="00:30:00"
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
        />
      </div>
    </div>
  );
}
