import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

// test('should render Header', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

const startLogout = jest.fn();

test('should render Header Component', () => {
  const wrapper = shallow(<Header startLogout={startLogout} />);
  //Enzyme to JSON is serialized, so below line is not needed
  //expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});

test('should handle start logout', () => {  
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});