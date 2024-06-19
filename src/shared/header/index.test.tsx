import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header', () => {
  it('should render Spider MAN, Iron MAN, and Hulk', async () => {
    render(
      <Header>
        <span>Spider MAN</span>
        <span>Iron MAN</span>
        <span>Hulk</span>
      </Header>
    );
    expect(await screen.findByText(/Spider MAN/i)).toBeInTheDocument();
    expect(await screen.findByText(/Iron MAN/i)).toBeInTheDocument();
    expect(await screen.findByText(/Hulk/i)).toBeInTheDocument();
  });
});
