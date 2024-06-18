interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button className="flex h-6 w-6 items-center justify-center" {...props}>
      {children}
    </button>
  );
};
