"use client";

//External
import React, { createContext, useContext } from "react";
//Types
import { TableProps } from "./types";

const defualtTableContext = {};

const TableContext = createContext(defualtTableContext);

export const Table = ({ children }: TableProps) => {
  return (
    <TableContext.Provider value={defualtTableContext}>
      <div className="w-full overflow-x-auto rounded">
        <table className="table w-full min-w-[750px] border-collapse border-spacing-0 bg-gray-800">
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
};

export const useTable = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useTable must be used within a Table");
  }
  return context;
};
