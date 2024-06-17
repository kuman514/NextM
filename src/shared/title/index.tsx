import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  customClassName?: string;
}

export default function Title({ children, customClassName }: Props) {
  return (
    <h1 className={`mt-9 mb-6 text-4xl font-bold ${customClassName}`}>
      {children}
    </h1>
  );
}
