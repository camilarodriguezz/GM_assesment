import React from 'react';
import {shallow, configure} from 'enzyme';
import Dashboard from '../src/views/Dashboard/Dashboard';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const wrapper = shallow(
  <App>
    <Dashboard />
  </App>,
);

it('has a TextInput', () => {
  expect(wrapper.findWhere((node) => node.prop('testID') === 'textInput')).toBeTruthy();
});

it('has a button', () => {
    expect(wrapper.findWhere((node) => node.prop('testID') === 'button')).toBeTruthy();
  });


