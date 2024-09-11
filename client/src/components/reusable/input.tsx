import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

interface InputProps extends ComponentProps<"input"> {
  variant?: keyof typeof InputVariants;
}

enum InputVariants {
  default = "bg-[var(--bg-color)] text-[var(--color)] border border-[var(--border)] focus:border-[var(--primary)] placeholder:text-[var(--border)]",
}

export default function Input({
  className,
  variant = "default",
  ...rest
}: InputProps) {
  return (
    <input
      className={cn(
        "outline-none rounded-md duration-300",
        InputVariants[variant],
        className
      )}
      {...rest}
    />
  );
}
