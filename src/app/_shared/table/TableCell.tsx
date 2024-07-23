import { PropsWithChildren } from "react";
//Utils
import { cn } from "@/app/_utils/tailwind-merge";
//Types
import { TableProps } from "./types";

type TableCellProps = PropsWithChildren<TableProps>;

export const TableCell = ({
  children,
  className,
  ...props
}: TableCellProps) => {
  return (
    <th
      className={cn(
        "font table-cell border-b border-slate-50 p-4 text-left text-sm font-medium text-white",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};
