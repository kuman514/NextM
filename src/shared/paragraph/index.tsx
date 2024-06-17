import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  customClassName?: string;
}

export default function Paragraph({ children, customClassName }: Props) {
  return (
    <p className={`text-base font-normal indent-4 mb-4 ${customClassName}`}>
      {children}
    </p>
  );
}
