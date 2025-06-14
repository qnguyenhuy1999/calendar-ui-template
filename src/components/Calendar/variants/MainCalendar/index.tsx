import { MainCalendarProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button, ECalendarView, SimpleSelect } from "@components";
import { EEventType } from "@enums";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import rrulePlugin from "@fullcalendar/rrule";
import timeGridPlugin from "@fullcalendar/timegrid";
import { IconButton } from "@radix-ui/themes";
import { ICalendarEvent } from "@types";
import { getFullMonthName, getFullYearDigit } from "@utils";
import { getEventsForDate } from "@utils/event";

const viewOptions = [
  { label: "Month", value: "dayGridMonth" },
  { label: "Week", value: "timeGridWeek" },
  { label: "Day", value: "timeGridDay" },
];

export default function MainCalendar({ events, selectedDate: selectedDateProp, view: viewProp, handleChangeDate, onChangeView }: MainCalendarProps) {
  const calendarRef = useRef<any>(null);

  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [view, setView] = useState<ECalendarView>(ECalendarView.DAY_GRID_MONTH);

  const changeView = (viewName: ECalendarView) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView(viewName);
      setView(viewName);
      if (onChangeView) onChangeView(viewName);
    }
  };

  const handleDateClick = (arg: any) => {
    const date = new Date(arg.date);
    setSelectedDate(date);

    if (handleChangeDate) handleChangeDate(date);
  };

  const renderEventContent = (eventInfo: any) => {
    const { event } = eventInfo;
    const { extendedProps } = event as ICalendarEvent;

    const style = extendedProps.type === EEventType.EVENT ? "fc-day-type-event" : "fc-day-type-appointment";

    return <div className={`rounded-md p-1 text-xs truncate w-full ${style}`}>{event.title}</div>;
  };

  // Function to check if a date has events
  const hasEventsOnDate = (date: Date): boolean => {
    return getEventsForDate(date, events).length > 0;
  };

  // Function to add CSS class to days with events and selected date
  const getDayCellClassNames = (arg: any): string => {
    const date = new Date(arg.date);
    let classNames = hasEventsOnDate(date) ? "fc-day-has-events" : "";
    if (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    ) {
      classNames += (classNames ? " " : "") + "selected";
    }
    return classNames;
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

  useEffect(() => {
    if (viewProp) {
      changeView(viewProp);
    }
  }, [viewProp]);

  return (
    <div className="w-full p-6">
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
            {getFullMonthName(selectedDate)} {getFullYearDigit(selectedDate)}
          </h2>
        </div>

        <SimpleSelect
          options={viewOptions}
          placeholder="Choose a view..."
          value={view}
          onValueChange={(value) => changeView(value as ECalendarView)}
        />
      </div>

      {/* Main Calendar */}
      <div className="main-calendar-wrapper">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin]}
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
