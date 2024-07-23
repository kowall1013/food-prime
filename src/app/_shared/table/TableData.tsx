//Types
import { TableProps } from "./types";

export const TableData = ({ children }: TableProps) => {
  return (
    <td className="table-cell border-b border-slate-50 p-4 text-left text-sm font-normal">
      {children}
    </td>
  );
};
