"use client";

//External
import Image from "next/image";
//Redux
import { useAppDispatch } from "@/lib/hooks";
import { toggleMenu } from "@/lib/features/settings/settingsSlice";
//Compomnents
import { Button } from "@/app/_shared/inputs";
import * as icon from "@/app/_utils/icons";

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <header className="col-span-full flex items-center justify-center border-b border-gray-400 px-2 py-2">
      <div className="flex w-full items-center justify-between">
        <Image
          src="/images/healthy-food.png"
          alt="logo picture of vagetable and fruit"
          width="40"
          height="40"
        />

        <Button
          size="icon"
          className="md:hidden"
          onClick={() => dispatch(toggleMenu())}
        >
          <icon.Hamburger className="h-8 w-8" />
        </Button>
        <div className="flex items-center gap-4">
          <Button>Primary</Button>
        </div>
      </div>
    </header>
  );
}
