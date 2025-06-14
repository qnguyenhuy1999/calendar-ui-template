import dayjs from "dayjs";

const formatTime24Hour = (time: Date | string): string => {
  return dayjs(time).format("HH:mm");
};

const getGMTOffset = (time: Date | string): string => {
  const date = dayjs(time);
  const offset = date.utcOffset();
  const sign = offset >= 0 ? "+" : "-";
  const absOffset = Math.abs(offset);
  const hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
  const minutes = String(absOffset % 60).padStart(2, "0");
  return `GMT${sign}${hours}:${minutes}`;
};

const formatDateTime = (date: Date | string): string => {
  return dayjs(date).format("YYYY-MM-DDTHH:mm:ss");
};

const getFullYearDigit = (date: Date): string => {
  return dayjs(date).format("YYYY");
};

const getFullMonthName = (date: Date): string => {
  return dayjs(date).format("MMMM");
};

const getDayOfMonth = (date: Date): string => {
  return dayjs(date).format("DD");
};

const getMinNameOfTheDay = (date: Date): string => {
  return dayjs(date).format("dd");
};

export { formatDateTime, formatTime24Hour, getDayOfMonth, getFullMonthName, getFullYearDigit, getGMTOffset, getMinNameOfTheDay };
