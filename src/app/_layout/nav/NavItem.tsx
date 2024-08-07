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
}

export const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  icon,
  ...props
}) => {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <li
      className={cn([
        "rounded-r-md p-2",
        { "border-l-2 border-solid border-blue-700 bg-slate-700": isActive },
      ])}
    >
      <Link {...props} href={to}>
        <div className="flex items-center space-x-4">
          <span>{icon}</span>
          <span>{label}</span>
        </div>
      </Link>
    </li>
  );
};
