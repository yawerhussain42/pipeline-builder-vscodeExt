import { NodeType } from '../../../shared/enums';
import { NodeDragBtn } from './NodeDragBtn';
import { render } from '@testing-library/react';
describe('NodeDragBtn', () => {
  test('renders a NodeDragBtn with some text', () => {
    const { asFragment } = render(<NodeDragBtn nodeType={NodeType.DEFAULT} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
