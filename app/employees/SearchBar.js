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
    <div><span>
     <input
      type="text"
      placeholder="Search the Employer"
      className="p-2 border rounded w-3/4 mb-4"
      value={query}
      onChange={handleSearch}
    />
    </span>
    <span className=' gap-5 g-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded '>
     <button>All</button>
     <button>Active</button>
     <button>InActive</button>
    </span>
    </div> 
  );
}
