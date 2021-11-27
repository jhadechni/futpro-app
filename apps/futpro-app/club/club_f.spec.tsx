import { render } from '@testing-library/react';
import Club_f from './club_f';

describe('Club_f', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Club_f />);
    expect(baseElement).toBeTruthy();
  });
});