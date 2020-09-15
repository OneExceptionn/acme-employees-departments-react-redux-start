import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger'


const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE'
const DESTROY_EMPLOYEE = 'DESTROY_EMPLOYEE'
const ADD_DATABASE = 'ADD_DATABASE'

const initialState = { departments: [], employees: [] };

export const addDatabase = (employees, departments) => (
    {
        type: ADD_DATABASE,
        employees,
        departments
    }
)

export const removeFromDepartment = (employeeid) => (
    {
        type: REMOVE_EMPLOYEE,
        id: employeeid
    }
)

export const destroyEmployee = (employeeid) => (
    {
        type: DESTROY_EMPLOYEE,
        id: employeeid
    }
)

function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_DATABASE:
            return { ...state, employees: action.employees, departments: action.departments}
        case DESTROY_EMPLOYEE:
            const employeesFiltered = state.employees.filter(employee => employee.id !== action.id)
            return { ...state, employees: employeesFiltered};
        case REMOVE_EMPLOYEE:
            const updatedEmployee = state.employees.find(employee => employee.id === action.id)
            updatedEmployee.departmentId = null;
            const employeesUpdated = state.employees.filter(employee => employee.id !== updatedEmployee.id)
            return { ...state, employees: [...employeesUpdated, updatedEmployee]}
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware))

export default store;