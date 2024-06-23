import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  customClassName?: string;
}

export default function Footer({ children, customClassName }: Props) {
  return (
    <footer
      className={`flex w-full text-base font-normal bg-red-700 items-center justify-center p-12 ${customClassName}`}
    >
      {children}
    </footer>
  );
}
