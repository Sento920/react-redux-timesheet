import React from 'react';
import PropTypes from 'prop-types';

class EmployeeRow extends React.Component {
  render() {
    const {employee} = this.props;
    return (
      <tr>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.admin}</td>
      </tr>
    );
  }
}

export default EmployeeRow;
