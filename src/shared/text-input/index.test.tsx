import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import TextInput from '.';

describe('TextInput', () => {
  it('should be inputtable', async () => {
    render(<TextInput aria-label="input-for-test" />);
    const input = screen.getByLabelText('input-for-test');

    fireEvent.change(input, {
      target: { value: 'The truth is... I am Iron Man.' },
    });

    expect((input as HTMLInputElement).value).toBe(
      'The truth is... I am Iron Man.'
    );
  });
});
