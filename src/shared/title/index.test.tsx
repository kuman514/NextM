import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Title from '.';

describe('Title', () => {
  it('should render an Endgame quote', async () => {
    render(<Title>We&apos;re in the endgame now.</Title>);
    expect(
      await screen.findByText(/We're in the endgame now./i)
    ).toBeInTheDocument();
  });
});
