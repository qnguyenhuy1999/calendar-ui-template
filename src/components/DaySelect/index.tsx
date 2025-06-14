import { DaySelectProps } from "./types";
import { useEffect, useState } from "react";

import Button from "@components/Button";
import { EDayOfWeek } from "@enums";
import { cn } from "@utils";

const options: EDayOfWeek[] = [EDayOfWeek.MON, EDayOfWeek.TUS, EDayOfWeek.WED, EDayOfWeek.THU, EDayOfWeek.FRI, EDayOfWeek.SAT, EDayOfWeek.SUN];

export default function DaySelect({ value, onChange }: DaySelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<EDayOfWeek[]>([]);

  const isChecked = (value: EDayOfWeek) => {
    return selectedOptions.includes(value);
  };

  const handleChange = (value: EDayOfWeek, isChecked: boolean) => {
    let temp = [...selectedOptions];

    if (isChecked) {
      const index = temp.indexOf(value);
      temp.splice(index, 1);
    } else {
      temp = [...temp, value];
    }

    setSelectedOptions(temp);
    onChange(temp);
  };

  useEffect(() => {
    if (value && value.length > 0) {
      setSelectedOptions(value);
    }
  }, [value]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {options.map((day) => (
        <Button
          key={day}
          type="button"
          variant="outline"
          className={cn("w-[64px]", !isChecked(day) ? "bg-white text-dark-blue" : "")}
          onClick={() => handleChange(day, isChecked(day))}
        >
          {day}
        </Button>
      ))}
    </div>
  );
}
