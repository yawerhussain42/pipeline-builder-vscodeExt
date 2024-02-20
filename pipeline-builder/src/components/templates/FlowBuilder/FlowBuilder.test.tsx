import { FlowBuilder } from './FlowBuilder';
import { render } from '@testing-library/react';
describe('FlowBuilder', () => {
  test('renders a FlowBuilder with some text', () => {
    const { asFragment } = render(<FlowBuilder />);
    expect(asFragment()).toMatchSnapshot();
  });
});
