
import EmployeeCard from './EmployeeCard';

export default function EmployeeList({ 
  filteredEmployees, onDetails, onBlock,onToggle,modal }) {

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDetails={onDetails}
          onBlock={onBlock}
          onToggle={onToggle}
          modal={modal}
          
        />
      ))}
    </div>
  );
}
