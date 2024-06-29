import React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="nav-header">
            <Link to="/create-employee" className="nav-link">Create Employee</Link>
            <Link to="/create-vendor" className="nav-link">Create Vendor</Link>
            <Link to="/view-employees" className="nav-link">View Employees</Link>
            <Link to="/view-vendors" className="nav-link">View Vendors</Link>
            <Link to="/emails" className="nav-link">Send Emails</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavComponent;
