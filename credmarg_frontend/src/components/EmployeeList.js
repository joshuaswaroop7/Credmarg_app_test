import React from "react";
import { Button } from "react-bootstrap";

function EmployeeList(props) {
  return (
    <div>
      <table className="table table-striped table-bordered">
      <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>CTC</th>
          </tr>
        </thead>
        <tbody>
          {props.emp.map((emps) => (
            <tr key={emps.name}>
              <td>{emps.name}</td>
              <td>{emps.designation}</td>
              <td>{emps.ctc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={{ marginTop: '50px' }}>View Employee List</h2>
      <Button style={{ marginBottom: '50px' }} onClick={props.sortEmpByName}>Sort Employee List by Employee Name</Button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>CTC</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.email}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.ctc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
