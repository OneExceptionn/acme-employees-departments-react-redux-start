import React from 'react';
import Employee from './Employee';
import { connect } from 'react-redux';

const Employees = ({ department, employees })=> {
  return (
      <ul>
        {
          employees.filter( employee => employee.departmentId === (department ? department.id : null )).map( employee => <Employee key={employee.id} employee={ employee } />)
        }
      </ul>
  );
};

const mapStateToProps = state => (
  {
    employees: state.employees
  }
)

export default connect(mapStateToProps)(Employees);
