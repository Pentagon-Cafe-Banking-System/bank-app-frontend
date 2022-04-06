import { useState } from 'react'
import React, { FC } from 'react';
import { axiosPrivate } from '../../api/axios';



// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps{}
const CreateEmployeeAccount: FC<RegisterProps> = () => {
    const[userName, setUserName] = useState<string>();
    const[password, setPassword] = useState<string>();
    const[firstName, setFirstName] = useState<string>();
    const[lastName, setLastName] = useState<string>();
    const[salary, setSalary] = useState<string>();
    const[gender, setGender] = useState<string>();
    const[dateOfEmployment, setDateOfEmployment] = useState<string>();
    const[dateOfBirth, setDateOfBirth] = useState<string>();
    const authToken = localStorage.getItem('accessToken');

    const REGISTER_URL = '/api/Employee/create'
    const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    
    /*
    
      if (!userName) {
      alert('Login field empty')
      return
    }
    if (!password) {
      alert('Password field empty')
      return
    }
    if (!firstName) {
      alert('First name field empty')
      return
    }
    if (!lastName) {
        alert('Last name field empty')
        return
    }
    if (!salary) {
        alert('Salary field empty')
        return
    }
    if (!gender) {
        alert('Gender field empty')
        return
    }
    if (!dateOfEmployment) {
        alert('Date of employment field empty')
        return
    }
    if (!dateOfBirth) {
        alert('Datw of birth field empty')
        return
    }
      */
    


    const isoDateEmployment = new Date('December 15, 2000 03:24:00').toISOString();
    const isoDateBirth = new Date('December 17, 1995 03:24:00').toISOString();
    
    axiosPrivate.post(REGISTER_URL, { userName: userName, password: password, firstName: firstName, lastName: lastName, salary: salary, gender: gender, dateOfEmployment: isoDateEmployment, dateOfBirth: isoDateBirth}, { withCredentials: true, headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + authToken
    } }).then((response) => {
      //const accessToken = response.data.jwtToken;
      console.log(response);
 
   
    });

    
  
    setUserName('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setSalary('')
    setGender('')
    setDateOfEmployment('')
    setDateOfBirth('')
  }


  return(
    <div className='flex h-screen w-full'>
    <form onSubmit={onSubmit} className='m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 '>
          <label className ='form-label-input'
          htmlFor="userName">
              <input className ='form-input'
              id="userName"
                value={userName}
                type="text"
                placeholder="userName"
                onChange={(e) => setUserName(e.target.value)}
                onBlur={(e) => setUserName(e.target.value)}
              />
              </label>
              <label className ='form-label-input'
              htmlFor="password">
              <input className ='form-input'
              id="password"
                value={password}
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => setPassword(e.target.value)}
              />
          </label>
          <label className ='form-label-input'
          htmlFor="firstName">
              <input className ='form-input'
              id="firstName"
                value={firstName}
                type="text"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={(e) => setFirstName(e.target.value)}
              />
          </label>
          <label className ='form-label-input'
          htmlFor="lastName">
              <input className ='form-input'
              id="lastName"
                value={lastName}
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                onBlur={(e) => setLastName(e.target.value)}
              />
          </label>
          <label className ='form-label-input'
          htmlFor="salary">
              <input className ='form-input'
              id="salary"
                value={salary}
                type="text"
                placeholder="Salary"
                onChange={(e) => setSalary(e.target.value)}
                onBlur={(e) => setSalary(e.target.value)}
              />
          </label>
          <label className ='form-label-input'
          htmlFor="gender">
              <input className ='form-input'
              id="gender"
                value={gender}
                type="text"
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)}
                onBlur={(e) => setGender(e.target.value)}
              />
          </label>
          <label className ='form-label-input'
          htmlFor="dateOfEmployment">
              <input className ='form-input'
              id="dateOfEmployment"
                value={dateOfEmployment}
                type="date"
                onChange={(e) => setDateOfEmployment(e.target.value)}
                onBlur={(e) => setDateOfEmployment(e.target.value)}
              />
          </label>
          <label className ='form-label-input'
          htmlFor="dateOfBirth">
              <input className ='form-input'
              id="dateOfBirth"
                value={dateOfBirth}
                type="date"
                onChange={(e) => setDateOfBirth(e.target.value)}
                onBlur={(e) => setDateOfBirth(e.target.value)}
              />
          </label>
          
         
          <button className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
      </form>
      </div>


  );
}

export default CreateEmployeeAccount;