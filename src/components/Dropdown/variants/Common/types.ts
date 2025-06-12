export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  className?: string;
}

export interface SelectGroupProps {
  label?: string;
  options: SelectOption[];
}
