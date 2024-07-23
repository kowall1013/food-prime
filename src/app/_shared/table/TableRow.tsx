//Types
import { TableProps } from "./types";

export const TableRow = ({ children }: TableProps) => {
  return <tr className="table-row align-middle text-inherit">{children}</tr>;
};
