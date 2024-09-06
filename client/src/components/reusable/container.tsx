import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

interface ContainerProps extends ComponentProps<"div"> {}

export default function Container({ className, ...rest }: ContainerProps) {
  return (
    <div
      className={cn("container mx-auto px-4 lg:px-0", className)}
      {...rest}
    />
  );
}
