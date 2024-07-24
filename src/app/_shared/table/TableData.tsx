interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TableData = ({ children }: Props) => {
  return <td className="table-cell border-b border-slate-50 p-4 text-left text-sm font-normal">{children}</td>;
};
