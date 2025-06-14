import { MiniCalendarProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { IconButton } from "@radix-ui/themes";
import { getEventsForDate } from "@utils/event";

export default function MiniCalendar({ events, selectedDate: selectedDateProp, handleChangeDate }: MiniCalendarProps) {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [miniCalendarMonth, setMiniCalendarMonth] = useState<Date>(currentDate);

  const miniMonth = miniCalendarMonth.toLocaleString("default", {
    month: "long",
  });
  const miniYear = miniCalendarMonth.getFullYear();

  const goToPrevMonth = () => {
    const newDate = new Date(miniCalendarMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    setMiniCalendarMonth(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(miniCalendarMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    setMiniCalendarMonth(newDate);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const getPrevMonthDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = getFirstDayOfMonth(date);

    const days = [];
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        isCurrentMonth: false,
        month: month - 1,
        year: month === 0 ? year - 1 : year,
      });
    }
    return days;
  };

  const getCurrentMonthDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(date);

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        month,
        year,
      });
    }
    return days;
  };

  const getNextMonthDays = (date: Date, calendarDays: number) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysNeeded = 42 - calendarDays; // 6 rows * 7 days = 42

    const days = [];
    for (let i = 1; i <= daysNeeded; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        month: month + 1,
        year: month === 11 ? year + 1 : year,
      });
    }
    return days;
  };

  const getCalendarDays = (date: Date) => {
    const prevMonthDays = getPrevMonthDays(date);
    const currentMonthDays = getCurrentMonthDays(date);
    const nextMonthDays = getNextMonthDays(date, prevMonthDays.length + currentMonthDays.length);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const selectDate = (day: any) => {
    const selectedDate = new Date(day.year, day.month, day.date);
    setSelectedDate(selectedDate);
    handleChangeDate && handleChangeDate(selectedDate);

    // If selected date is not in current month, update current month
    if (!day.isCurrentMonth) {
      setMiniCalendarMonth(selectedDate);
    }
  };

  const isToday = (day: any) => {
    const today = new Date();
    return day.date === today.getDate() && day.month === today.getMonth() && day.year === today.getFullYear();
  };

  const isSelected = (day: any) => {
    return day.date === selectedDate.getDate() && day.month === selectedDate.getMonth() && day.year === selectedDate.getFullYear();
  };

  const getEventsForDay = (date: any) => {
    return getEventsForDate(date, events);
  };

  useEffect(() => {
    if (selectedDateProp) {
      setSelectedDate(selectedDateProp);
      setMiniCalendarMonth(selectedDateProp);
    }
  }, [selectedDateProp]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-center gap-5 mb-4">
        <IconButton
          onClick={goToPrevMonth}
          variant="outline"
          className="shadow-none"
        >
          <ChevronLeft />
        </IconButton>
        <h2 className="text-lg font-bold text-[#0F4C81] w-[144px] text-center">
          {miniMonth} {miniYear}
        </h2>
        <IconButton
          onClick={goToNextMonth}
          variant="outline"
          className="shadow-none"
        >
          <ChevronRight />
        </IconButton>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
          <div
            key={index}
            className="p-1 text-xs font-medium text-center text-gray-500"
          >
            {day}
          </div>
        ))}
        {getCalendarDays(miniCalendarMonth).map((day, index) => {
          const isHasEvent = getEventsForDay(new Date(day.year, day.month, day.date)).length > 0;
          return (
            <div
              key={index}
              onClick={() => selectDate(day)}
              className={`flex items-center justify-center w-[32px] h-[32px] py-1 text-sm cursor-pointer !rounded-button whitespace-nowrap relative
                        ${!day.isCurrentMonth ? "text-gray-400" : "text-gray-800"}
                        ${isToday(day) ? "bg-blue-600 text-white rounded-full" : ""}
                        ${isSelected(day) && !isToday(day) ? "bg-blue-100 rounded-full" : ""}
                      `}
            >
              {day.date}
              {isHasEvent && <span className="absolute w-1 h-1 transform -translate-x-1/2 rounded-full bottom-[1px] bg-dark-orange left-1/2"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
