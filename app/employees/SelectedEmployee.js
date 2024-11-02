// app/employees/SelectedEmployee.js
import Image from "next/image";
export default function SelectedEmployee({ employee,onToggle,modal }) {
    if (!employee) return null; // Return nothing if no employee is selected
  
    return (
    <>
    {modal && 
    <div className="w-lvw h-svh top-0 left-0 right-0 bottom-0 fixed">
      <div 
      onClick={onToggle} 
      className="w-lvw h-svh top-0 left-0 right-0 bottom-0 fixed bg-slate-300 opacity-50">
      </div>
      <div className=" w-2/5 h-auto absolute top-32 left-1/2 transform -translate-x-1/2 translate-y-1/2 leading-3 bg-white py-4 px-6 rounded max-w-4xl min-w-80">
      <h2 className="text-xl font-semibold mb-2">Employee Details: </h2>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-3">
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Address:</strong> {employee.address}</p>
            <p><strong>Shift:</strong> {employee.shift}</p>
            <p><strong>Salary:</strong>{employee.salary}</p>
            <p><strong>Status:</strong>{employee.status}</p>
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
        <button className="absolute top-1/4 right-1/4 py-5 px-8 font-bold" 
        onClick={onToggle}>
              CLOSE
        </button>
        </div>
}
        </>
    );
  }
  