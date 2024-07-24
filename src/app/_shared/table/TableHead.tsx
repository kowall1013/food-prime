//Utils
import { cn } from "@/app/_utils/tailwind-merge";

//Types
interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TableHead = ({ children, className, ...props }: Props) => {
  return (
    <thead className={cn("table-header-group", className)} {...props}>
      {children}
    </thead>
  );
};
