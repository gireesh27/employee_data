// app/employees/EmployeeCard.js
import Image from 'next/image';

export default function EmployeeCard({ employee, onDetails, handleBlock,onToggle,modal }) {
  return ( 
   
     <div
      className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg ${
        employee.status === 'active' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
      }`}
    >
      {/* Employee Image */}
      <Image
        src={employee.image}
        alt={employee.name}
        width={80}
        height={80}
        className="rounded-full mb-3"
      />

      {/* Employee Name and Role */}
      <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
      <p className="text-sm text-gray-500">{employee.role}</p>

      {/* Contact Info */}
      <p className="text-xs text-gray-400 mt-1">{employee.email}</p>
      <p className="text-xs text-gray-400">{employee.phone}</p>

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-4">
        <button
          onClick={() => {
              onToggle(!modal)
              onDetails(employee)
          }}
          className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Details
        </button>
        <button
          onToggle={onToggle}
          onClick={() => {
            
            handleBlock(employee)
          }}
          className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Block
        </button>
      </div>
     </div>
    
  );
}
