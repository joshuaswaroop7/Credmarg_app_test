import React, { useState, useEffect } from 'react';
import EmployeeList from '../components/EmployeeList';
import { getAllEmployees } from '../services/api';

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then(response => setEmployees(response.data));
  }, []);

  return (
    <div className='App'>
      <h2>View Employees</h2>
      <EmployeeList employees={employees} />
    </div>
  );
}

export default ViewEmployees;
