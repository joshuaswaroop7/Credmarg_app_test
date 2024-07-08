import React, { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import { getAllEmployees, getEmpByName, getAllSortEmployees } from "../services/api";
import { Button } from "react-bootstrap";

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllEmployees().then((response) => setEmployees(response.data));
  }, []);

  function sortEmpByName(){
    getAllSortEmployees().then((response) => setEmployees(response.data));
  }

  function search(e) {
    setName(e.target.value);
  }

  function searchEmp() {
    getEmpByName(name)
      .then((response) => {
        const emp = response.data;
        setData([emp]);
        console.log([emp]);
      })
      .catch((error) => {
        console.error("Employee doesn't exist:", error);
      });
  }

  return (
    <div className="App">
      <h3>Search Employee</h3>
      <input
        type="text"
        placeholder="search employee by name"
        value={name}
        onChange={search}
        style={{ marginRight: '10px' }}
      ></input>
      <Button style={{ marginBottom: '10px' }} onClick={searchEmp}>Search</Button>
      
      <EmployeeList employees={employees} emp={data} sortEmpByName={sortEmpByName}/>
    </div>
  );
}

export default ViewEmployees;
