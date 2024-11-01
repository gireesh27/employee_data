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
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const handleStatusFilter = (status) => setStatusFilter(status);
  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal((modal)=>!modal);
  }

   const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || employee.status === statusFilter;
    return matchesSearch && matchesStatus;
  });


  const handleBlock = (id) => {
    // setEmployees(filteredEmployees.filter((employee) => employee.id !== id));
    // setFilteredEmployees(filteredEmployees.filter((employee) => employee.id !== id));
    // if (selectedEmployee && selectedEmployee.id === id) {
    //   setSelectedEmployee(null);
    // }
  };

  const handleDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div>
      <Header selectedEmployee={selectedEmployee} />
      <div className="p-4">
        <SearchBar 
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleStatusFilter={handleStatusFilter}
        statusFilter={statusFilter}/>
       
        <EmployeeList
          filteredEmployees={filteredEmployees}
          onBlock={handleBlock}
          onDetails={handleDetails}
          onToggle={toggleModal}
          modal={modal}
        />
        { modal &&
        <SelectedEmployee 
         employee={selectedEmployee}
         modal={modal} 
         onToggle={toggleModal}
         />}
         
        
      </div>
    </div>
  );
}
