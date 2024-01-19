import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Employee{
    id: number,
    fullname: string,
    birthdate: string, 
    department: string,
    experience: string
}
interface EmployeeState{
    employees: Employee[];
}

const initialState: EmployeeState = {
    employees: JSON.parse(localStorage.getItem('employees') || '[]')
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers:{
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload);
            localStorage.setItem('employees', JSON.stringify(state.employees));
          },
    }
})

export const {addEmployee} = employeeSlice.actions
export default employeeSlice.reducer;