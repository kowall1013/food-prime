//External
import Link from "next/link";
//Utils
import { Icon } from "@/app/_utils";
import { NavItem } from "./NavItem";

export default function Nav() {
  return (
    <nav className="flex flex-col">
      <NavItem to="/dashboard" label="Dashboard" icon={<Icon.HomeIcon />} />
      <NavItem to="/ingredients" label="Ingredience" icon={<Icon.HomeIcon />} />
      <NavItem to="/calendar" label="Calendar" icon={<Icon.HomeIcon />} />
      <NavItem to="/foods" label="Foods" icon={<Icon.HomeIcon />} />
    </nav>
  );
}
