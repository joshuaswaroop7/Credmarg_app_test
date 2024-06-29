import React, { useState, useEffect } from 'react';
import VendorList from '../components/VendorList';
import { getAllVendors } from '../services/api';

function ViewVendors() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getAllVendors().then(response => setVendors(response.data));
  }, []);

  return (
    <div className='App'>
      <h2>View Vendors</h2>
      <VendorList vendors={vendors} />
    </div>
  );
}

export default ViewVendors;
