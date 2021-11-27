import { render } from '@testing-library/react';
import Footer from './footer';

export const suitFooter =( ) =>{
describe.only('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });


});
}
