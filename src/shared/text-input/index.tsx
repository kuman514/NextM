import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isDisabled?: boolean;
  customClassName?: string;
}

export default function TextInput({
  isDisabled,
  customClassName,
  ...rest
}: Props) {
  return (
    <input
      {...rest}
      type="text"
      disabled={isDisabled}
      className={`bg-white text-black px-3 py-2 rounded-lg ${customClassName}`}
    />
  );
}
