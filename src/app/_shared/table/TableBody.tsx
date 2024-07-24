interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TableBody = ({ children }: Props) => {
  return <tbody className="table-row-group">{children}</tbody>;
};
