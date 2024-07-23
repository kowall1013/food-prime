//Types
import { TableProps } from "./types";

export const TableBody = ({ children }: TableProps) => {
  return <tbody className="table-row-group">{children}</tbody>;
};
