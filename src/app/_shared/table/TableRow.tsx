interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TableRow = ({ children }: Props) => {
  return <tr className="table-row align-middle text-inherit">{children}</tr>;
};
