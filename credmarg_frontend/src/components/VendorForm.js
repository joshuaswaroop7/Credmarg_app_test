import React, { useState } from 'react';
import { createVendor } from '../services/api';
import { Button } from 'react-bootstrap';

function VendorForm(props) {
  const [vendor, setVendor] = useState({ name: '', email: '', upi: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createVendor(vendor).then(response => {
      props.onVendorCreated(response.data);
      setVendor({ name: '', email: '', upi: '' });
    });
  };

  return (
    <div className='App'>
    <form onSubmit={handleSubmit}>
      <input name="name" value={vendor.name} onChange={handleChange} placeholder="Name" style={{ marginBottom: '10px' }} /><br></br>
      <input name="email" value={vendor.email} onChange={handleChange} placeholder="Email" style={{ marginBottom: '10px' }}/><br></br>
      <input name="upi" value={vendor.upi} onChange={handleChange} placeholder="UPI" style={{ marginBottom: '10px' }}/><br></br>
      <Button type="submit" style={{ marginBottom: '10px' }}>Create Vendor</Button><br></br>
    </form>
    </div>
  );
}

export default VendorForm;
