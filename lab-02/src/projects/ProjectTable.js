import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ProjectRow from './ProjectRow';

class ProjectTable extends React.Component {
  // TODO Implement
  render() {
    const { projects } = this.props; //grab input
    /* Table is 3rd party, includes thead and tbody */

    //Project Row is our previous component

    // project ={} line is the portion that includes a copy and passes in the id.
  
    return (
      <Table bordered striped> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <ProjectRow project={ project } key={ project._id }/>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ProjectTable;
