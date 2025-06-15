import { Check, ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

import * as Select from "@radix-ui/react-select";
import { cn } from "@utils";

const SelectRoot = Select.Root;

const SelectTrigger = React.forwardRef<React.ElementRef<typeof Select.Trigger>, React.ComponentPropsWithoutRef<typeof Select.Trigger>>(({ className, children, ...props }, ref) => (
  <Select.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-fit items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 bg-[#0F4C81] text-white",
      className,
    )}
    {...props}
  >
    {children}
    <Select.Icon asChild>
      <ChevronDown className="w-4 h-4 ml-1" />
    </Select.Icon>
  </Select.Trigger>
));
SelectTrigger.displayName = Select.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<React.ElementRef<typeof Select.ScrollUpButton>, React.ComponentPropsWithoutRef<typeof Select.ScrollUpButton>>(({ className, ...props }, ref) => (
  <Select.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="w-4 h-4" />
  </Select.ScrollUpButton>
));
SelectScrollUpButton.displayName = Select.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<React.ElementRef<typeof Select.ScrollDownButton>, React.ComponentPropsWithoutRef<typeof Select.ScrollDownButton>>(({ className, ...props }, ref) => (
  <Select.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="w-4 h-4" />
  </Select.ScrollDownButton>
));
SelectScrollDownButton.displayName = Select.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<React.ElementRef<typeof Select.Content>, React.ComponentPropsWithoutRef<typeof Select.Content>>(({ className, children, position = "popper", ...props }, ref) => (
  <Select.Portal>
    <Select.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-white",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Select.Viewport className={cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>{children}</Select.Viewport>
      <SelectScrollDownButton />
    </Select.Content>
  </Select.Portal>
));
SelectContent.displayName = Select.Content.displayName;

const SelectGroup = Select.Group;

const SelectLabel = React.forwardRef<React.ElementRef<typeof Select.Label>, React.ComponentPropsWithoutRef<typeof Select.Label>>(({ className, ...props }, ref) => (
  <Select.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = Select.Label.displayName;

const SelectItem = React.forwardRef<React.ElementRef<typeof Select.Item>, React.ComponentPropsWithoutRef<typeof Select.Item>>(({ className, children, ...props }, ref) => (
  <Select.Item
    ref={ref}
    className={cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Select.ItemIndicator>
        <Check className="w-4 h-4" />
      </Select.ItemIndicator>
    </span>

    <Select.ItemText>{children}</Select.ItemText>
  </Select.Item>
));
SelectItem.displayName = Select.Item.displayName;

const SelectSeparator = React.forwardRef<React.ElementRef<typeof Select.Separator>, React.ComponentPropsWithoutRef<typeof Select.Separator>>(({ className, ...props }, ref) => (
  <Select.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = Select.Separator.displayName;

const SelectValue = Select.Value;

export { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue };
