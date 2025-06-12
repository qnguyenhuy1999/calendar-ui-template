interface DropdownOption {
  label: string;
  value: string;
  shortcut?: string;
}

interface DropdownProps {
  children?: React.ReactNode;
  options: DropdownOption[];
}

export type { DropdownProps };
