import React from 'react';
import { destroyEmployee, removeFromDepartment } from '../store'
import { connect } from 'react-redux'

const Employee = ({ employee, destroyEmployee, removeFromDepartment })=> {
  return (
    <li key={ employee.id }>
      { employee.name }
      <button onClick={ ()=> destroyEmployee(employee.id)}>x</button>
      {
        !!removeFromDepartment && (
          <button onClick={ ()=> removeFromDepartment(employee.id)}>Remove From Department</button>
        )
      }
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    destroyEmployee(employeeid) {
      dispatch(destroyEmployee(employeeid))
    },
    removeFromDepartment(employeeid) {
      dispatch(removeFromDepartment(employeeid))
    }
  }
}

export default connect(null, mapDispatchToProps)(Employee);
