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
      className="w-lvw h-svh top-0 left-0 right-0 bottom-0 fixed bg-slate-300 opacity-50 ">
      </div>
      <div className=" w-2/5 h-1/2 absolute top-32 left-1/2 transform -translate-x-1/2 translate-y-1/2 leading-3 bg-white py-4 px-6 rounded max-w-4xl min-w-80">
      <h2 className="text-xl font-semibold mb-2">Employee Details: </h2>
        <div className="flex items-center gap-3">
         
          <div className="flex flex-col gap-4">
           
            <div className="flex flex-row gap-6">
              <strong>Name: </strong>
              <div>{employee.name}</div> 
            </div>
            
            <div className="flex flex-row gap-9">
              <strong>Role: </strong>
              <div>{employee.role}</div> 
            </div>
            
            <div className="flex flex-row gap-7">
              <strong>Email: </strong>
              <div>{employee.email}</div> 
            </div>
            <div className="flex flex-row gap-5">
              <strong>Phone: </strong>
              <div>{employee.phone}</div> 
            </div>
            <div className="flex flex-row gap-1">
              <strong>Address: </strong>
              <div className="text-nowrap">{employee.address}</div> 
            </div>
            <div className="flex flex-row gap-8">
              <strong>Shift: </strong>
              <div>{employee.shift}</div> 
            </div>
            <div className="flex flex-row gap-5">
              <strong>Status: </strong>
              <div>{employee.status}</div> 
            </div>
          </div>
          <Image
            width={150}
            height={100}
            src={employee.image}
            alt={employee.name}
            className="object-cover mb-10 mt-0 ml-10 rounded-md w-full h-full min-h-32 max-h-52 max-w-2xl min-w-20 border-y-fuchsia-800 border-2 p-1"
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
  