import React, { useState } from "react";

import { EventCard, MainCalendar, MiniCalendar, NoEventCard } from "@components";
import { events } from "@data";
import { getDay, getMonthName } from "@utils";

const viewOptions = [
  { label: "Month", value: "Month" },
  { label: "Week", value: "Week" },
  { label: "Day", value: "Day" },
];

const App: React.FC = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

  // Get events for a specific date
  const getEventsForDate = (date: Date): any[] => {
    return events.filter((event) => {
      return (
        event.start.getDate() === date.getDate() && event.start.getMonth() === date.getMonth() && event.start.getFullYear() === date.getFullYear()
      );
    });
  };

  // Handle date change in both calendars
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  // Handle event click
  const handleEventClick = (eventId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://example.com/event/" + eventId, "_blank");
  };

  return (
    <div className="bg-[#E4F6ED] min-h-screen p-4">
      <div className="max-w-[1440px] min-h-[1024px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col h-full md:flex-row">
          {/* Left Column - Mini Calendar and Upcoming Events */}
          <div className="w-full p-6 border-r md:w-1/3">
            <MiniCalendar
              events={events as any}
              selectedDate={selectedDate}
              handleChangeDate={handleDateChange}
            />

            <hr />

            {/* Upcoming Events */}
            <div className="w-full mt-7">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-[#0F4C81]">Upcoming Events</h2>
                <button className="bg-[#5684AE] text-white px-4 py-1 rounded-md text-sm !rounded-button whitespace-nowrap cursor-pointer">
                  View All
                </button>
              </div>
              <div className="mb-4 text-gray-500">
                Today, {getDay(currentDate)} {getMonthName(currentDate)}
              </div>
              {/* Event Cards */}
              <div className="space-y-4">
                {getEventsForDate(selectedDate).map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    handleEventClick={handleEventClick}
                  />
                ))}
                {getEventsForDate(selectedDate).length === 0 && <NoEventCard />}
              </div>
            </div>
          </div>

          {/* Right Column - Main Calendar */}
          <MainCalendar
            events={events as any}
            selectedDate={selectedDate}
            handleChangeDate={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
