import { render, screen } from '@testing-library/react';

import ListItem from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('ListItem', () => {
  it('should render as expected (current: thumbnail, name, description)', () => {
    const { container } = render(
      <ListItem
        name="Iron Man"
        description="I am Iron Man, not Captain America."
        href="/character/1234"
        imageAlt="Iron Man"
        imageSrc="https://iron.man/captain_america.jpg"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render image if it does not have thumbnail', () => {
    const { container } = render(
      <ListItem
        name="Iron Man"
        description="I am Iron Man, not Captain America."
        href="/character/1234"
        imageAlt="Iron Man"
        imageSrc={null}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should has href=/character/1234 when the characterData is having id=1234', async () => {
    render(
      <ListItem
        name="Iron Man"
        description="I am Iron Man, not Captain America."
        href="/character/1234"
        imageAlt="Iron Man"
        imageSrc="https://iron.man/captain_america.jpg"
      />
    );

    const link = await screen.findByLabelText('list-item-link');
    expect((link as HTMLAnchorElement).href).toStrictEqual(
      'http://localhost/character/1234'
    );
  });
});
