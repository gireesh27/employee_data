// app/employees/SearchBar.js
"use client";
import { useState } from 'react';

export default function SearchBar({searchTerm,handleStatusFilter,handleSearch,statusFilter }) {

  // const [statusFilter, setStatusFilter] = useState('all');
  // const [searchTerm, setSearchTerm] = useState('');
  // const handleStatusFilter = (status) => setStatusFilter(status);
  // const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());

  return (
    <div className='flex flex-row'>
     <input
      type="text"
      placeholder="Search the Employer"
      className=" ml-10  px-12 py-2 border rounded w-3/4 mb-4"
      value={searchTerm}
      onChange={handleSearch}
    />
     <div 
      className='border-2 border-black flex flex-row space-x-4 cursor-pointer ml-10 text-xl font-extrabold py-4 px-4 rounded font-serif text-blue-600 mb-4'>
        <button onClick={() => handleStatusFilter('all')} className="px-4 py-2 bg-purple-500 text-white rounded-md">All</button>
        <button onClick={() => handleStatusFilter('active')} className="px-4 py-2 bg-purple-500 text-white rounded-md">Active</button>
        <button onClick={() => handleStatusFilter('inactive')} className="px-4 py-2 bg-purple-500 text-white rounded-md">Inactive</button>
     </div> 
    </div>
  );
}
