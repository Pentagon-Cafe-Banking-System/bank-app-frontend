import React, { FC } from 'react'
import { useState } from 'react'
import { axiosPrivate } from '../../../api/axios';

const UPDATE_URL = '/api/Customer/update/'
interface UpdateProps{}
const UpdateCustomer: FC<UpdateProps> = () => {

    const[userName, setUserName] = useState<string>("");
    const[password, setPassword] = useState<string>("");
    const[firstName, setFirstName] = useState<string>("");
    const[secondName, setSecondName] = useState<string>("");
    const[lastName, setLastName] = useState<string>("");
    const[id, setId] = useState<string>();
    const authToken = localStorage.getItem('accessToken');

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
      
      axiosPrivate.patch(`${UPDATE_URL + id}`, { userName: userName, password: password, firstName: firstName, lastName: lastName, secondName: secondName}, { withCredentials: true, headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + authToken
      } }).then((response) => {
        //const accessToken = response.data.jwtToken;
        console.log(response);
   
     
      });
  
      
    
      setUserName('')
      setPassword('')
      setFirstName('')
      setSecondName('')
      setLastName('')
    }

    
  return (
    <div className='flex h-screen w-full'>
    <form onSubmit={onSubmit} className='m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 '>
        <label className ='form-label-input'
        htmlFor="id" >
              <input className ='form-input'
              id="id"
                value={id}
                type="text"
                placeholder="id"
                onChange={(e) => setId(e.target.value)}
                onBlur={(e) => setId(e.target.value)}
              />
              </label>
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
          htmlFor="secondName">
              <input className ='form-input'
              id="secondName"
                value={secondName}
                type="text"
                placeholder="secondName"
                onChange={(e) => setSecondName(e.target.value)}
                onBlur={(e) => setSecondName(e.target.value)}
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
          <button className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>

    </form>
    </div>
  )
}

export default UpdateCustomer