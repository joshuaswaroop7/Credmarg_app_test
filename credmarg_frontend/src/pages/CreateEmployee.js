import React from 'react';
import EmployeeForm from '../components/EmployeeForm';

function CreateEmployee() {
  const handleEmployeeCreated = (employee) => {
    console.log('Employee created:', employee);
  };

  return (
    <div className='App'>
      <h2>Create Employee</h2>
      <EmployeeForm onEmployeeCreated={handleEmployeeCreated} />
    </div>
  );
}

export default CreateEmployee;
