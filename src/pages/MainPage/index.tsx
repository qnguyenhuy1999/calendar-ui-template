import EventDialog from "./components/EventDialog";
import { IDialogInfo } from "./types";
import React, { useEffect, useState } from "react";

import { Button, ECalendarView, EventCard, MainCalendar, MiniCalendar, NoEventCard, Suspense } from "@components";
import { EEventType } from "@enums";
import { ICalendarEvent, IEventResponse } from "@types";
import { createRecord, getData, getDayOfMonth, getEventsForDate, getFullMonthName, transformDataEvents, updateRecord } from "@utils";

export default function MainPage() {
  const currentDate = new Date();
  const [events, setEvents] = useState<ICalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [mainCalendarViewMode, setMainCalendarViewMode] = useState<ECalendarView>(ECalendarView.DAY_GRID_MONTH);
  const [dialogInfo, setDialogInfo] = useState<IDialogInfo>({ event: null, open: false });

  const handleDateChange = (date: Date, isMiniCalendar = false) => {
    setSelectedDate(date);

    if (!isMiniCalendar) {
      setDialogInfo({
        event: {
          title: "",
          start: date,
          end: date,
          extendedProps: {
            type: EEventType.APPOINTMENT,
            client: null,
          },
        },
        open: true,
      });
    }
  };

  const handleEventClick = (event: ICalendarEvent, e: React.MouseEvent) => {
    e.stopPropagation();

    if (event?.extendedProps?.type === EEventType.APPOINTMENT) {
      window.open(event.extendedProps.client?.webURL, "_blank");
    }
  };

  const openEventDialog = (event: ICalendarEvent | null) => {
    setDialogInfo({ event, open: true });
  };

  const onSubmitForm = (event: IEventResponse) => {
    console.log(event);
    if (event.id) {
      updateRecord(event);
      setEvents(transformDataEvents(getData()));
    } else {
      createRecord(event);
      setEvents(transformDataEvents(getData()));
    }

    setDialogInfo({ event: null, open: false });
  };

  useEffect(() => {
    setEvents(transformDataEvents(getData()));
  }, []);

  return (
    <div className="grid grid-cols-[376px_1fr] h-full">
      {/* Left Column - Mini Calendar and Upcoming Events */}
      <div className="w-full p-6 border-r">
        <MiniCalendar
          events={events as any}
          selectedDate={selectedDate}
          handleChangeDate={(date) => {
            handleDateChange(date, true);
            setMainCalendarViewMode(ECalendarView.TIME_GRID_DAY);
          }}
        />

        <hr />

        {/* Upcoming Events */}
        <div className="w-full mt-7">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-[#0F4C81]">Upcoming Events</h2>
            <Button
              variant="soft"
              className="p-4 rounded-full"
            >
              View All
            </Button>
          </div>
          <div className="mb-4 text-gray-500">
            Today, {getDayOfMonth(currentDate)} {getFullMonthName(currentDate)}
          </div>
          {/* Event Cards */}
          <div className="space-y-4">
            {getEventsForDate(new Date(), events).map((event) => (
              <EventCard
                key={event.id}
                event={event}
                handleEventClick={handleEventClick}
              />
            ))}
            {getEventsForDate(new Date(), events).length === 0 && <NoEventCard />}
          </div>
        </div>
      </div>

      {/* Right Column - Main Calendar */}
      <Suspense>
        <MainCalendar
          events={events as any}
          selectedDate={selectedDate}
          view={mainCalendarViewMode}
          handleChangeDate={handleDateChange}
          handleClickViewEvent={(event) => openEventDialog(event)}
          onChangeView={(view) => setMainCalendarViewMode(view)}
        />
      </Suspense>

      <EventDialog
        dialogInfo={dialogInfo}
        setDialogInfo={setDialogInfo}
        onSubmitForm={onSubmitForm}
      />
    </div>
  );
}
