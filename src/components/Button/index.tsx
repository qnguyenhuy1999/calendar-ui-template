import { ButtonProps } from "./types";

import { Button as ButtonRadix } from "@radix-ui/themes";
import { cn } from "@utils";

export default function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <ButtonRadix
      className={cn("border-[#0F4C81] background-[#0F4C81] rounded-lg", className)}
      {...restProps}
    >
      {children}
    </ButtonRadix>
  );
}
