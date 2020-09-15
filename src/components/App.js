import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addDatabase } from '../store'


import Departments from './Departments';
import Stats from './Stats';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  async componentDidMount(){
    const responses = await Promise.all([
      axios.get('/api/employees'),
      axios.get('/api/departments'),
    ]);
    const employees = responses[0].data
    const departments = responses[1].data
    this.props.add(employees, departments) //this.props.addDatabase(employees, departments)
  }
  
  render(){
    return (
      <div>
        <h1>Acme Employees And Departments</h1>
        <Stats />
        <Departments />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add(employees, departments) {
      dispatch(addDatabase(employees, departments)) 
    }
  }
}
// const mapDispatchToProps = { addDatabase } 

export default connect(null, mapDispatchToProps)(App)
