import React from 'react';
import {mount, shallow} from 'enzyme';
import RequestStatus from './RequestStatus';
import { BrowserRouter as Router } from 'react-router-dom';

const location = {
  pathname: '/request-status/',
  state: {
    details: {
      icon: 'fa fa-check',
      action: 'Register',
      id: 12,
      status: 'Pending'
    }
  }
};
describe('RequestStatus Components', ()=> {
  test("if renders correctly", () => {
    const wrapper = shallow(
      <Router>
        <RequestStatus location={location}/>
      </Router>);
    expect(wrapper).toMatchSnapshot();
  });

  test('link should be wrapped in specific class', () => {
    const wrapper = mount(
      <Router>
        <RequestStatus location={location}/>
      </Router>);
    expect(wrapper.find('.link-box')).toHaveLength(1);
  });

  test('should have a single link', () => {
    const wrapper = mount(
      <Router>
        <RequestStatus location={location}/>
      </Router>);
    expect(wrapper.find('a')).toHaveLength(1);
  });
});