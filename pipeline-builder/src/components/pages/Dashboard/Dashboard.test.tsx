import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';

describe('Dashboard', () => {
  test('renders a Dashboard with some text', () => {
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
