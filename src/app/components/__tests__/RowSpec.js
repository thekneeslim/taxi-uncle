import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Row from '../Row';

configure({ adapter: new Adapter() });

describe('Grid', () => {
  const callBack = jest.fn();
  let wrapper;

  beforeEach(() => {
    const row = [[1,2],[3,4],[5,6]];
    wrapper = shallow(<Row field={row} handleChange={callBack} />);
  });

  it('should render as many columns as input size for given row', () => {
    expect(wrapper.find('tr').find('Column').length).toEqual(3);
  });

  it('should invoke callback upon value change', () => {
    wrapper.find('Column').at(0).dive().find('input').simulate('change', {target: {value: '9'}});
    expect(callBack).toHaveBeenCalled();
  })
});
