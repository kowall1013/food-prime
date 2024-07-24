"use client";

//External
import React, { createContext, useContext } from "react";

const defualtTableContext = {};

const TableContext = createContext(defualtTableContext);

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ children }: Props) => {
  return (
    <TableContext.Provider value={defualtTableContext}>
      <div className="w-full overflow-x-auto rounded">
        <table className="table w-full min-w-[750px] border-collapse border-spacing-0 bg-gray-800">{children}</table>
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
