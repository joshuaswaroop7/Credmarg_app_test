import React from "react";

function VendorList(props) {
  return (
    <div>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>UPI</th>
          </tr>
        </thead>
        <tbody>
          {props.vendors.map((vendor) => (
            <tr key={vendor.email}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.upi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorList;
