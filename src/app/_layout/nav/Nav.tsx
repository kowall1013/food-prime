"use client";

//External
import Link from "next/link";
//Components
import { NavItem } from "./NavItem";
import { Drawer } from "@/app/_shared/drawer/Drawer";
//Redux
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { toggleMenu } from "@/lib/features/settings/settingsSlice";
//Utils
import * as icon from "@/app/_utils/icons";

export const Nav = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.settings.isMenuOpen);

  const handleClose = () => {
    console.log("handleClose");
    dispatch(toggleMenu());
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      <nav>
        <ul>
          <h1>siemaa</h1>
        </ul>
      </nav>
    </Drawer>
  );
};
