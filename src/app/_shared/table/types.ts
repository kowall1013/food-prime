export interface TableProps {
  order: "asc" | "desc";
  orderBy: string;
  //
  onSort: (id: string) => void;
  //
  setOrder: React.Dispatch<React.SetStateAction<"desc" | "asc">>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}
