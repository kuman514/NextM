import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  isDisabled?: boolean;
  customClassName?: string;
}

export default function Button({
  children,
  isDisabled,
  customClassName,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={`bg-red-700 text-white px-3 py-2 rounded-lg hover:bg-white hover:text-red-700 transition ${customClassName}`}
    >
      {children}
    </button>
  );
}
