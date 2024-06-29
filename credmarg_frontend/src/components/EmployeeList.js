import React from 'react';

function EmployeeList(props) {
  return (
    <div>
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>CTC</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
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
