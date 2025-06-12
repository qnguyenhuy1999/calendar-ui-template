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

const getYear = (date: Date): string => {
  return dayjs(date).format("YYYY");
};

const getMonthName = (date: Date): string => {
  return dayjs(date).format("MMMM");
};

const getDay = (date: Date): string => {
  return dayjs(date).format("DD");
};

export { formatTime24Hour, getDay, getGMTOffset, getMonthName, getYear };
