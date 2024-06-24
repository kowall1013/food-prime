"use client";

//External
import Link from "next/link";
import { usePathname } from "next/navigation";
//Helpers
import { cn } from "@/app/_utils/tailwind-merge";

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  icon,
  isActive = true,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href={to}
      className={cn([
        "flex items-center space-x-4 p-4 ",
        { isActive: "border-r-2 border-solid border-blue-700" },
      ])}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};
