//External
import React, { forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
//Utils
import { cn } from "@/app/_utils/tailwind-merge";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "flex jusitfy-center items-center rounded-md border-transparent text-white text-base whitespace-nowrap duration-300  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border-gray-200 hover:bg-gray-100 hover:border-gray-100 disabled:text-gray-200",
        primary:
          "bg-blue-600 text-white hover:bg-blue-500 disabled::text-blue-200",
        plain:
          "text-gray-400 hover:text-gray-100 hover:border-gray-100 disabled:text-gray-200",
        destructive:
          "text-white bg-red-600 hover:bg-red-500  disabled:bg-red-50 disabled:text-red-200",
      },
      size: {
        default: "px-4 py-2.5",
        sm: "px-3 py-1.5",
        lg: "px-6 py-3.5",
        icon: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
  }
);

Button.displayName = "Button";
