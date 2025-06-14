import { ButtonProps } from "./types";

import { Button as ButtonRadix } from "@radix-ui/themes";
import { cn } from "@utils";

export default function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <ButtonRadix
      className={cn("border-dark-blue background-dark-blue rounded-lg", className)}
      {...restProps}
    >
      {children}
    </ButtonRadix>
  );
}
