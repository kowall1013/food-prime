"use client";

//External
import Image from "next/image";
//Redux
import { useAppDispatch } from "@/lib/hooks";
import { toggleMenu } from "@/lib/features/settings/settingsSlice";
//Compomnents
import { Button } from "@/app/_shared/inputs";
import * as icon from "@/app/_utils/icons";
import Link from "next/link";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="col-span-full flex h-16 items-center justify-center border-b border-gray-400 px-2 py-2">
      <div className="flex w-full items-center justify-between">
        <Button
          size="icon"
          variant="outlined"
          className="md:hidden"
          onClick={() => dispatch(toggleMenu())}
        >
          <icon.Hamburger />
        </Button>
        <Link href="/">
          <Image
            src="/images/healthy-food.png"
            alt="logo picture of vagetable and fruit"
            width="40"
            height="40"
          />
        </Link>
      </div>
    </header>
  );
};
