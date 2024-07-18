"use client";

//External
import { usePathname } from "next/navigation";
//Components
import { Nav } from "./Nav";
import { Drawer } from "@/app/_shared/drawer/Drawer";
//Hooks
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";
//Redux
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { toggleMenu, closeMenu } from "@/lib/features/settings/settingsSlice";
//Utils
import { useEffect } from "react";

export const NavWrapper = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.settings.isMenuOpen);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleClose = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, [pathname, dispatch]);

  return (
    <>
      {isDesktop ? (
        <Nav />
      ) : (
        <Drawer isOpen={isOpen} onClose={handleClose}>
          <Nav />
        </Drawer>
      )}
    </>
  );
};
