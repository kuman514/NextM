import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Paragraph from '.';

describe('Paragraph', () => {
  it('should render an Endgame quote', async () => {
    render(<Paragraph>We&apos;re in the endgame now.</Paragraph>);
    expect(
      await screen.findByText(/We're in the endgame now./i)
    ).toBeInTheDocument();
  });
});
