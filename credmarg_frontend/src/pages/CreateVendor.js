import React from 'react';
import VendorForm from '../components/VendorForm';

function CreateVendor() {
  const handleVendorCreated = (vendor) => {
    console.log('Vendor created:', vendor);
  };

  return (
    <div className='App'>
      <h2>Create Vendor</h2>
      <VendorForm onVendorCreated={handleVendorCreated} />
    </div>
  );
}

export default CreateVendor;
