import React from "react";

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
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>CTC</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.email}>
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
