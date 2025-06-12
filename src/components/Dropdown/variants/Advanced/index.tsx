import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectRoot, SelectSeparator, SelectTrigger, SelectValue } from "../Common";
import { SelectGroupProps, SelectOption, SelectProps } from "../Common/types";
import React from "react";

interface AdvancedSelectProps extends Omit<SelectProps, "options"> {
  groups?: SelectGroupProps[];
  options?: SelectOption[];
  showSeparators?: boolean;
}

export default function AdvancedSelect({
  groups,
  options,
  placeholder = "Select an option...",
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  name,
  required = false,
  className,
  showSeparators = false,
}: AdvancedSelectProps) {
  return (
    <SelectRoot
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      name={name}
      required={required}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {/* Render single options if no groups */}
        {!groups &&
          options?.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}

        {/* Render grouped options */}
        {groups?.map((group, groupIndex) => (
          <React.Fragment key={`group-${groupIndex}`}>
            <SelectGroup>
              {group.label && <SelectLabel>{group.label}</SelectLabel>}
              {group.options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
            {showSeparators && groupIndex < groups.length - 1 && <SelectSeparator />}
          </React.Fragment>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
