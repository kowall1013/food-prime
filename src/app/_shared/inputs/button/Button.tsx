//External
import React, { forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
//Utils
import { cn } from "@/app/_utils/tailwind-merge";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "justify-center items-center rounded-md flex border-transparent text-gray-50 text-base whitespace-nowrap disabled:pointer-events-none  duration-300 leading-7 min-w-8 h-10",
  {
    variants: {
      variant: {
        contained:
          "bg-indigo-700  hover:bg-indigo-600 active:bg-indigo-800 disabled:bg-gray-700 disabled:text-gray-400 disabled:font-semibold",
        outlined:
          "border-indigo-700 border  hover:border-indigo-500  active:border-indigo-800 disabled:bg-gray-700 disabled:text-gray-400 disabled:font-semibold ",
      },
      size: {
        default: "px-4",
        sm: "px-3",
        lg: "px-6",
        icon: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "contained",
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
