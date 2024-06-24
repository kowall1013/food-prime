//External
import Link from "next/link";
//Components
import { NavItem } from "./NavItem";
//Utils
import * as icon from "@/app/_utils/icons";

export default function Nav() {
  return (
    <nav className="flex flex-col">
      <NavItem to="/dashboard" label="Dashboard" icon={<icon.Home />} />
      <NavItem to="/ingredients" label="Ingredience" icon={<icon.Home />} />
      <NavItem to="/calendar" label="Calendar" icon={<icon.Home />} />
      <NavItem to="/foods" label="Foods" icon={<icon.Home />} />
    </nav>
  );
}
