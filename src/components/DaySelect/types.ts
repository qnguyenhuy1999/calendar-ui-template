import { EDayOfWeek } from "@enums";

interface DaySelectProps {
  value?: EDayOfWeek[];
  onChange: (selectedOptions: EDayOfWeek[]) => void;
}

export { DaySelectProps };
