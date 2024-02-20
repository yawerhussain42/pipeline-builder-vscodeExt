import { render } from '@testing-library/react';
import { NoInternet } from './NoInternet';

describe('NoInternet', () => {
  test('renders a NoInternet with some text', () => {
    const { asFragment } = render(<NoInternet />);
    expect(asFragment()).toMatchSnapshot();
  });
});
