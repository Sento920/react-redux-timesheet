import React from 'react';
import { shallow } from 'enzyme';

import ProjectRow from './ProjectRow';

//These are enzyme tests. 

describe('<ProjectRow />', () => {
  let wrapper;
  beforeEach(() => {
    const project = {
      name: 'NAME',
      description: 'DESCRIPTION'
    };
    //shallow doesn't use any children, 
    wrapper = shallow(<ProjectRow project= {project}/>);
  });

  //Actual tests

  it('should instantiate the Project Row Component', () => {
    expect(wrapper).toHaveLength(1);
  });//Makes sure the component renders. 
  
  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('NAME');
    expect(wrapper.find('td').at(1).text()).toEqual('DESCRIPTION');
  });//Checks the actual data contained within


});
