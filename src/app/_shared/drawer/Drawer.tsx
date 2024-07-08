//External
import { FC, useEffect, useRef } from "react";
//Helpers
import { cn } from "@/app/_utils/tailwind-merge";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: FC<DrawerProps> = ({ children, isOpen, onClose }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backDrop = backdropRef.current;

    const handleClick = (e: MouseEvent) => {
      if (backDrop === e.target) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      backDrop?.addEventListener("click", handleClick);
      window.addEventListener("keydown", handleKeyDown);
    } else {
      backDrop?.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      backDrop?.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, isOpen]);

  return (
    <div aria-hidden={isOpen ? "false" : "true"}>
      <div
        ref={drawerRef}
        role="dialog"
        className={cn([
          "ease fixed inset-0 z-50 h-full w-80 -translate-x-full bg-slate-800 transition-transform duration-300",
          { "translate-x-0": isOpen },
        ])}
      >
        {children}
      </div>
      <div
        ref={backdropRef}
        className={cn([
          "pointer-events-none invisible fixed inset-0 z-40 bg-black/50 transition-opacity",
          { "pointer-events-auto visible": isOpen },
        ])}
      />
    </div>
  );
};
