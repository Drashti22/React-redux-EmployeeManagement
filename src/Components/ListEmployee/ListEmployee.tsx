import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
function ListEmployee(){
    const employees = useSelector((state: RootState) => state.employee.employees);
    return (
        <div>
            <h2>List of Employees</h2>
            <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.fullname} - {employee.department} - {employee.experience} years
          </li>
        ))}
      </ul>
        </div>
    )
}

export default ListEmployee;