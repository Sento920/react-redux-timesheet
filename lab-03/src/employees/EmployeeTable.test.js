import React from 'react';
import EmployeeTable from './EmployeeTable';
import { shallow } from 'enzyme';
import EmployeeRow from './EmployeeRow';

describe('<EmployeeTable />', () => {
    let wrapper;
    beforeEach(() => {
        const Employees = [{}, {}];
        wrapper = shallow(<EmployeeTable Employees = { Employees } />);
    });

    it('should instantiate the Employee Table Component', () => {
        expect(wrapper).toHaveLength(1);
    });//Once again, ensure rendering

    it('should render a row for each Employee', () => {
        expect(wrapper.find(EmployeeRow)).toHaveLength(2);
    });//Check each Row renders. 
});
