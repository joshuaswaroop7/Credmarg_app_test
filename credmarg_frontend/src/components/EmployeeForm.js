import React, { useState } from 'react';
import { createEmployee } from '../services/api';
import { Button } from 'react-bootstrap';

function EmployeeForm(props) {
  const [employee, setEmployee] = useState({ name: '', email: '', designation: '', ctc: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee(employee).then(response => {
      props.onEmployeeCreated(response.data);
      setEmployee({ name: '', email: '', designation: '', ctc: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={employee.name} onChange={handleChange} placeholder="Name" style={{ marginBottom: '10px' }} /><br></br>
      <input name="email" value={employee.email} onChange={handleChange} placeholder="Email" style={{ marginBottom: '10px' }} /><br></br>
      <input name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" style={{ marginBottom: '10px' }} /><br></br>
      <input name="ctc" value={employee.ctc} onChange={handleChange} placeholder="CTC" style={{ marginBottom: '10px' }} /><br></br>
      <Button type="submit" style={{ marginBottom: '10px' }}>Create Employee</Button><br></br>
    </form>
  );
}

export default EmployeeForm;

