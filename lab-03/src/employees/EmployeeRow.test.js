import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('<EmployeeRow />', () => {
    let wrapper;
    beforeEach(() => {
        const employee = {
          username: 'USERNAME',
          email: 'EMAIL',   
          firstName: 'FIRST',
          lastName: 'LAST',
          admin: 'YES',
        };
        wrapper = shallow( <EmployeeRow employee = {employee}/> );
    });

    it('should instantiate the Employee Table Component', () => {
        expect(wrapper).toHaveLength(1);
      });//Once again, ensure rendering

      it('should render values into expected cells', () => {
        expect(wrapper.find('td')).toHaveLength(5);
        expect(wrapper.find('td').at(0).text()).toEqual('USERNAME');
        expect(wrapper.find('td').at(1).text()).toEqual('EMAIL');
        expect(wrapper.find('td').at(2).text()).toEqual('FIRST');
        expect(wrapper.find('td').at(3).text()).toEqual('LAST');
        expect(wrapper.find('td').at(4).text()).toEqual('YES');
      });//Checks the actual data contained within
});
