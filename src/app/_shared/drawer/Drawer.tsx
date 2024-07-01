//External
import { FC, useRef, useState } from "react";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: FC<DrawerProps> = ({ children, isOpen, onClose }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  return (
    <div aria-hidden={isOpen ? "false" : "true"}>
      <div
        role="dialog"
        className="ease fixed inset-0 z-50 h-full w-80 -translate-x-full overflow-auto bg-slate-800 transition-transform duration-300"
      >
        {children}
      </div>
      <div
        className="pointer-events-none invisible fixed inset-0 z-0 z-40 bg-black/50 opacity-0 transition-opacity"
        ref={backdropRef}
      />
    </div>
  );
};
