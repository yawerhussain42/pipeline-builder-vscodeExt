import { Sidebar } from './Sidebar';
import { render } from '@testing-library/react';
describe('Sidebar', () => {
  test('renders a Sidebar with some text', () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
