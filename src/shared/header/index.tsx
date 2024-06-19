import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  customClassName?: string;
}

export default function Header({ children, customClassName }: Props) {
  return (
    <p
      className={`sticky top-0 left-0 flex w-full text-base font-normal bg-red-700 items-between justify-between text-center p-6 ${customClassName}`}
    >
      {children}
    </p>
  );
}
