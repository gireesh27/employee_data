// app/employees/SelectedEmployee.js
import Image from "next/image";
export default function SelectedEmployee({ employee,onClose }) {
    if (!employee) return null; // Return nothing if no employee is selected
  
    return (<div className="px-40 py-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm mx-auto">
      <div className="flex flex-auto">
      <h2 className="text-xl font-semibold mb-2">Employee Details: </h2>
        <button 
          onClick={onClose} 
          className="mx-auto w-auto h-1/6 px-2 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-red-600"
        >
          Close
        </button>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Address:</strong> {employee.address}</p>
            <p><strong>Shift:</strong> {employee.shift}</p>
            <p><strong>Salary:</strong>{employee.salary}</p>
          </div>
          <Image
            width={150}
            height={100}
            src={employee.image}
            alt={employee.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        </div>
    );
  }
  