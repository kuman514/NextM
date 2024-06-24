import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('should be inputtable', async () => {
    const mockFn = jest.fn();

    render(
      <Button aria-label="button-for-test" onClick={mockFn}>
        Click here!
      </Button>
    );
    const input = screen.getByLabelText('button-for-test');

    fireEvent.click(input);

    expect(mockFn).toHaveBeenCalled();
  });

  it('should not be inputtable on disabled', async () => {
    const mockFn = jest.fn();

    render(
      <Button isDisabled aria-label="button-for-test" onClick={mockFn}>
        Click here!
      </Button>
    );
    const input = screen.getByLabelText('button-for-test');

    fireEvent.click(input);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
