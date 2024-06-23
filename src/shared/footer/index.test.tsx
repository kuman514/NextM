import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Footer from '.';
import { COPYRIGHT } from './text';

describe('Footer', () => {
  it('should render copyright', async () => {
    render(<Footer>{COPYRIGHT}</Footer>);
    expect(await screen.findByText(COPYRIGHT)).toBeInTheDocument();
  });

  it('should be footer as an HTML element', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild?.nodeName).toStrictEqual('FOOTER');
  });
});
