import React from 'react';
import Index from '../pages/index';
import { render } from '@testing-library/react';
describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
