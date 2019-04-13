import React from 'react';
import PropTypes from 'prop-types';

class ProjectRow extends React.Component {

  //note that propTypes is not a guarantee, just a recommendation.
  //This will render out to be JSX-> just a js html hybrid that renders quick.
  
  render() {
    const { project } = this.props;
    
    return (
      <tr>
        <td>{project.name}</td>
        <td>{project.description}</td>
      </tr>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectRow;
