import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from "../Common";
import { SelectProps } from "../Common/types";

export default function SimpleSelect({
  options,
  placeholder = "Select an option...",
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  name,
  required = false,
  className,
}: SelectProps) {
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
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
