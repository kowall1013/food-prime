//External
import { useCallback, useState } from "react";
//Types
import { TableProps } from "./types";

type ReturnType = TableProps;

export type UseTableProps = {
  defaultOrderBy?: string;
  defaultOrder?: "asc" | "desc";
};

export const useTable = (props?: UseTableProps): ReturnType => {
  const [orderBy, setOrderBy] = useState<string>(props?.defaultOrderBy || "name");
  const [order, setOrder] = useState<"asc" | "desc">(props?.defaultOrder || "asc");

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === "asc";

      if (id !== "") {
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(id);
      }
    },
    [order, orderBy],
  );

  return {
    order,
    orderBy,
    //
    onSort,
    //
    setOrder,
    setOrderBy,
  };
};
