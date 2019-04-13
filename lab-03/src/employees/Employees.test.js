import React from 'react';
import Employees from './Employees';
import { shallow } from 'enzyme';
import EmployeeTable from './EmployeeTable';

describe('<Employees />', () => {
    let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Employees />);
  });

  it('should instantiate the Employees Component', () => {
    expect(wrapper).toHaveLength(1);
  });//Render Check

  it('should pass employees down to table', () =>{
    wrapper.setState({
        employees: [{}, {}, {}, {}]
      });
      expect(wrapper.find(EmployeeTable).prop('employees')).toHaveLength(4);
  });
});
