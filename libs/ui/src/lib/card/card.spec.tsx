import { render } from '@testing-library/react';
import renderer from "react-test-renderer";
import 'jest-styled-components'
import Card from './card';

export const suitCard =( ) =>{
describe.only('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });

  test("should have the correct background color", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#2F9B54");
  });


});}
