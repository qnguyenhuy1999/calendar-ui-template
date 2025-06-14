import { ButtonProps } from "./types";

import { Button as ButtonRadix } from "@radix-ui/themes";
import { cn } from "@utils";

export default function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <ButtonRadix
      className={cn("border-1 border-solid border-dark-blue bg-dark-blue rounded-lg py-2 text-white", className)}
      {...restProps}
    >
      {children}
    </ButtonRadix>
  );
}
