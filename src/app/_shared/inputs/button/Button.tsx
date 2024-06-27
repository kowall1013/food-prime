//External
import React, { forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
//Utils
import { cn } from "@/app/_utils/tailwind-merge";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "justify-center items-center rounded-md flex border-transparent text-white text-base whitespace-nowrap disabled:pointer-events-none  duration-300 ",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-700 text-white hover:bg-indigo-600 active:bg-indigo-800 disabled:text-blue-200 ",
      },
      size: {
        default: "px-4 py-2.5",
        sm: "px-3 py-1.5",
        lg: "px-6 py-3.5",
        icon: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
