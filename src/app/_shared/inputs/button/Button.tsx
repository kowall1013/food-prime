//External
import React, { forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
//Utils
import { cn } from "@/app/_utils/tailwind-merge";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "justify-center items-center rounded-md flex border-transparent text-white text-base whitespace-nowrap disabled:pointer-events-none  duration-300 leading-7",
  {
    variants: {
      variant: {
        contained:
          "bg-indigo-700 text-white hover:bg-indigo-600 active:bg-indigo-800 disabled:bg-gray-700 disabled:text-gray-400 disabled:font-semibold min-w-16",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1.5",
        lg: "px-6 py-3.5",
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
