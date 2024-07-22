//Types
import { TableProps } from "./types";

export const TableHead = ({ children }: TableProps) => {
  return <thead className="table-header-group">{children}</thead>;
};
