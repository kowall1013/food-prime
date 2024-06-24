//External
import Image from "next/image";
//Compomnents
import { Button } from "@/app/_shared/inputs";
import * as icon from "@/app/_utils/icons";

export default function Header() {
  return (
    <header className="col-span-full flex items-center justify-center border-b border-gray-400 px-2 py-2">
      <div className="flex w-full items-center justify-between">
        <Image
          src="/images/healthy-food.png"
          alt="logo picture of vagetable and fruit"
          width="40"
          height="40"
        />

        <Button size="icon" variant="plain" className="md:hidden">
          <icon.Hamburger className="h-8 w-8" />
        </Button>
      </div>
    </header>
  );
}
