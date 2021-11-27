import 'jest-styled-components'
import Nav from './nav';
import { render } from '@testing-library/react';

export const suitNav =( ) =>{

  describe.only('Nav', () => {
    it('should render successfully', () => {
      const { baseElement } = render(<Nav />);
      expect(baseElement).toBeTruthy();
    });

    

   
  });
}

