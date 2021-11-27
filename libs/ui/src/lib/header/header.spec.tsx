import {render} from '@testing-library/react';
import renderer from "react-test-renderer";
import 'jest-styled-components'

import Header from './header';

export const suitHeader =( ) =>{
 
describe.only('Header', () => {

  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });


  test("should have the correct background color", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#2F9B54");
  });


});




}
