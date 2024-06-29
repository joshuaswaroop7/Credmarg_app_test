import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import CreateVendor from './pages/CreateVendor';
import ViewEmployees from './pages/ViewEmployees';
import ViewVendors from './pages/ViewVendors';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';
import CheckEmailExistence from './pages/CheckEmailExistence';
import NavComponent from './components/NavComponent';

function App() {
  return (
    <Router>
      <HeaderComponent/>
      <NavComponent />
      <Routes>
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/create-vendor" element={<CreateVendor />} />
        <Route path="/view-employees" element={<ViewEmployees />} />
        <Route path="/view-vendors" element={<ViewVendors />} />
        <Route path="/emails" element={<CheckEmailExistence />} />
      </Routes>
      <FooterComponent/>
    </Router>
  );
}

export default App;
