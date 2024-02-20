import { render } from '@testing-library/react';
import { PageNotFound } from './PageNotFound';

describe('PageNotFound', () => {
  test('renders a PageNotFound with some text', () => {
    const { asFragment } = render(<PageNotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
