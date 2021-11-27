
import { render } from '@testing-library/react';

import Countryf from './country_f';

describe('Country', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Countryf />);
    expect(baseElement).toBeTruthy();
  });
});