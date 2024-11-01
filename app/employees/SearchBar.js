// app/employees/SearchBar.js
"use client";
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='flex flex-row'>
     <input
      type="text"
      placeholder="Search the Employer"
      className=" ml-10  px-12 py-2 border rounded w-3/4 mb-4"
      value={query}
      onChange={handleSearch}
    />
     <div 
      className='border-2 border-black flex flex-row space-x-4 cursor-pointer ml-10 text-xl font-extrabold py-4 px-4 rounded font-serif text-blue-600 mb-4'>
      <a>All</a>
      <a>Active</a>
      <a>InActive</a>
     </div> 
    </div>
  );
}
