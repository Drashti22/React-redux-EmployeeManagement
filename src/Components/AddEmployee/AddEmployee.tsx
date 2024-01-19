import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../Slices/employeeSlice";
function AddEmployee() {
    const dispatch = useDispatch();

    const [fullname, setFullName] = useState('')
    const [birthdate, setBirthdate] = useState('');
    const [department, setDepartment] = useState('');
    const [experience, setExperience] = useState('');

    const handleAddEmployee = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(
            addEmployee({
                id: Date.now(),
                fullname,
                birthdate,
                department,
                experience
            }
            )
        )
        setFullName("");
        setBirthdate("");
        setDepartment("");
        setExperience("");
    }


    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleAddEmployee} >
                <label htmlFor="fullname"> Name</label>
                <input 
                    type="text" 
                    id="fullname" 
                    placeholder="Full name" 
                    value={fullname} 
                    onChange={(e)=>setFullName(e.target.value)}/>
                <label htmlFor="dob">Date of birth</label>
                <input type="date" 
                    id="dob"
                    value={birthdate}
                    onChange={(e)=>setBirthdate(e.target.value)} />
                <label htmlFor="department">Department</label>
                <input 
                    type="text" 
                    id="department" 
                    placeholder="Department"
                    value={department}
                    onChange={(e)=>setDepartment(e.target.value)} />
                <label htmlFor="experience">Experience</label>
                <input type="number" 
                        id="experience" 
                        step="1" 
                        min="0"
                        value={experience}
                        onChange={(e)=>setExperience(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddEmployee;