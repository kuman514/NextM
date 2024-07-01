import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchInput from '.';

const targetMockFn = jest.fn((url: string) => url);
jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(() => ({
      push: targetMockFn,
    })),
  };
});

describe('SearchInput', () => {
  it('shuold send to search page when search-name is inputted', async () => {
    render(<SearchInput />);

    const textInput = screen.getByLabelText('search-name-text-input');
    fireEvent.change(textInput, {
      target: { value: 'iron man' },
    });

    const searchButton = screen.getByLabelText('search-button');
    fireEvent.click(searchButton);

    expect(targetMockFn).toHaveBeenCalledWith('/search?searchName=iron man');
  });

  it('shuold stay when search-name is nothing inputted but blank spaces', async () => {
    render(<SearchInput />);

    const textInput = screen.getByLabelText('search-name-text-input');
    fireEvent.change(textInput, {
      target: { value: '      ' },
    });

    const searchButton = screen.getByLabelText('search-button');
    fireEvent.click(searchButton);

    expect(targetMockFn).not.toHaveBeenCalled();
  });
});
