import { v4 as uuidv4 } from "uuid";

import { IEventResponse } from "@types";

const getData = (): IEventResponse[] => {
  const data = localStorage.getItem("events") || "[]";
  return JSON.parse(data);
};

const createRecord = (event: IEventResponse) => {
  const events = getData();
  const id = uuidv4();
  return localStorage.setItem("events", JSON.stringify([...events, { ...event, id }]));
};

const updateRecord = (event: IEventResponse) => {
  const events = getData();

  if (event?.id) {
    const eventIdxExist = events.findIndex((item) => item.id === event?.id);
    events[eventIdxExist] = event;
  }

  return localStorage.setItem("events", JSON.stringify(events));
};

export { createRecord, getData, updateRecord };
