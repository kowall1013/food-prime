import { NavItem } from "./NavItem";

import * as icon from "@/app/_utils/icons";

export const Nav = () => {
  return (
    <nav className="h-[calc(100vh-64px)] border-gray-400 md:border-r">
      <ul className="p-2">
        <NavItem to="/" label="Dashboard" icon={<icon.Home />} />
        <NavItem to="/products" label="Products" icon={<icon.Home />} />
        <NavItem to="/dishes" label="Dishes" icon={<icon.Home />} />
        <NavItem
          to="/create-product"
          label="Create product"
          icon={<icon.Home />}
        />
        <NavItem to="/create-dish" label="Create Dish" icon={<icon.Home />} />
      </ul>
    </nav>
  );
};
