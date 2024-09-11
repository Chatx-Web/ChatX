import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof ButtonVariants;
}

enum ButtonVariants {
  default = "bg-white text-black",
  primary = "bg-[var(--primary)] text-white",
}

export default function Button({
  className,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "text-sm font-medium rounded-md hover:opacity-90 duration-100",
        ButtonVariants[variant],
        className
      )}
      {...rest}
    />
  );
}
