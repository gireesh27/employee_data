// app/employees/Header.js
import Image from 'next/image';

export default function Header({ selectedEmployee }) {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md ">
      <div className="text-xl font-bold text-gray-700">
        {selectedEmployee ? `${selectedEmployee.name}'s Profile` : 'Employee Management'}
      </div>
      
      {selectedEmployee && (
        <div className="flex items-center space-x-4">
          <Image
            src={selectedEmployee.image}
            alt={selectedEmployee.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-700">{selectedEmployee.name}</p>
            <p className="text-xs text-gray-500">{selectedEmployee.role}</p>
          </div>
        </div>
      )}
    </header>
  );
}
