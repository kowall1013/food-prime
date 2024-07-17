"use client";

//External
import { usePathname } from "next/navigation";
//Components
import { NavItem } from "./NavItem";
import { Drawer } from "@/app/_shared/drawer/Drawer";
//Redux
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { toggleMenu } from "@/lib/features/settings/settingsSlice";
//Utils
import * as icon from "@/app/_utils/icons";
import { useEffect } from "react";

export const Nav = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.settings.isMenuOpen);

  const handleClose = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    dispatch(toggleMenu());
  }, [pathname, dispatch]);

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      <nav>
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
    </Drawer>
  );
};
