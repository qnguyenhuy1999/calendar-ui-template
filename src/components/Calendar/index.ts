import React from "react";

export * from "./variants/MainCalendar/enums";
export { default as MiniCalendar } from "./variants/MiniCalendar";

const MainCalendar = React.lazy(() => import("@components/Calendar/variants/MainCalendar"));

export { MainCalendar };
