// app/employees/page.js
'use client';

import { useState } from 'react';
import Header from './Header';
import EmployeeList from './EmployeeList';
import SearchBar from './SearchBar';
import SelectedEmployee from './SelectedEmployee';
import { employees as initialEmployees } from '../../data/data';


export default function EmployeePage() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [filteredEmployees, setFilteredEmployees] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [modal, setModal] = useState(true);

  const toggleModal = (modal) => {
    setModal(!modal);
  };

  const handleSearch = (query) => {
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const handleBlock = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    setFilteredEmployees(filteredEmployees.filter((employee) => employee.id !== id));
    if (selectedEmployee && selectedEmployee.id === id) {
      setSelectedEmployee(null);
    }
  };

  const handleDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div>
      <Header selectedEmployee={selectedEmployee} />
      <div className="p-4">
        <SearchBar onSearch={handleSearch} />
       
        <EmployeeList
          employees={filteredEmployees}
          onBlock={handleBlock}
          onDetails={handleDetails}
          onToggle={toggleModal}
          modal={modal}
        />
        
         <SelectedEmployee 
         employee={selectedEmployee}
         modal={modal} />
        
      </div>
    </div>
  );
}
