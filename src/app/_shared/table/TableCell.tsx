//Utils
import { cn } from "@/app/_utils/tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  order?: "asc" | "desc";
  orderBy?: string;
  onSort?: (id: string) => void;
}

export const TableCell = ({ children, order, orderBy, onSort, className, ...props }: Props) => {
  return (
    <th
      className={cn("font table-cell border-b border-slate-50 p-4 text-left text-sm font-medium text-white", className)}
      {...props}
    >
      {onSort ? <TableSortLabel>{children}</TableSortLabel> : children}
    </th>
  );
};
