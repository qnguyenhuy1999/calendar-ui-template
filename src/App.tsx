import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { LoaderCircle } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";

import { Button, ECalendarView, EventCard, MainCalendar, MiniCalendar, NoEventCard } from "@components";
import { APIEvents } from "@data";
import { ICalendarEvent, IEventResponse } from "@types";
import { getDayOfMonth, getFullMonthName, transformDataEvents } from "@utils";
import { getEventsForDate } from "@utils/event";

dayjs.extend(isSameOrBefore);

const App: React.FC = () => {
  const currentDate = new Date();
  const [events, setEvents] = useState<ICalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [mainCalendarViewMode, setMainCalendarViewMode] = useState<ECalendarView>(ECalendarView.DAY_GRID_MONTH);

  // Handle date change in both calendars
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  // Handle event click
  const handleEventClick = (eventId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://example.com/event/" + eventId, "_blank");
  };

  useEffect(() => {
    setEvents(transformDataEvents(APIEvents as IEventResponse[]));
  }, []);

  return (
    <div className="bg-[#E4F6ED] min-h-screen p-4">
      <div className="max-w-[1440px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-[376px_1fr] h-full">
          {/* Left Column - Mini Calendar and Upcoming Events */}
          <div className="w-full p-6 border-r">
            <MiniCalendar
              events={events as any}
              selectedDate={selectedDate}
              handleChangeDate={(date) => {
                handleDateChange(date);
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
                {getEventsForDate(selectedDate || new Date(), events).map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    handleEventClick={handleEventClick}
                  />
                ))}
                {getEventsForDate(selectedDate || new Date(), events).length === 0 && <NoEventCard />}
              </div>
            </div>
          </div>

          {/* Right Column - Main Calendar */}
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <LoaderCircle className="loading-spinner" />
              </div>
            }
          >
            <MainCalendar
              events={events as any}
              selectedDate={selectedDate}
              handleChangeDate={handleDateChange}
              view={mainCalendarViewMode}
              onChangeView={(view) => setMainCalendarViewMode(view)}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default App;
