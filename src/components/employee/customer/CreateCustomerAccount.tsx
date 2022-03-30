import { useState } from 'react'
import React, { FC } from 'react';
import { axiosPrivate } from '../../../api/axios'



// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps{}
const CreateCustomerAccount: FC<RegisterProps> = () => {
    const[userName, setUserName] = useState<string>("");
    const[password, setPassword] = useState<string>("");
    const[firstName, setFirstName] = useState<string>("");
    const[secondName, setSecondName] = useState<string>("");
    const[lastName, setLastName] = useState<string>("");
    const[nationalId, setNationalId] = useState<string>("");
    const[dateOfBirth, setDateOfBirth] = useState<string>("");
    const[cityOfBirth, setCityOfBirth] = useState<string>("");
    const[fathersName, setFathersName] = useState<string>("");

    const authToken = localStorage.getItem('accessToken');

    const REGISTER_URL = '/api/Customer/create'
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
    


    //const isoDateEmployment = new Date('December 15, 2000 03:24:00').toISOString();
    const isoDateBirth = new Date('December 17, 1995 03:24:00').toISOString();
    
    axiosPrivate.post(REGISTER_URL, { userName: userName, password: password, firstName: firstName, secondName: secondName, lastName: lastName, nationalId: nationalId, dateOfBirth: isoDateBirth, cityOfBirth: cityOfBirth, fathersName: fathersName}, { withCredentials: true, headers: {
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

    setDateOfBirth('')
  }


  return(
    <form onSubmit={onSubmit}>
          <label htmlFor="userName">
              <input id="userName"
                value={userName}
                type="text"
                placeholder="userName"
                onChange={(e) => setUserName(e.target.value)}
                onBlur={(e) => setUserName(e.target.value)}
              />
              </label>
              <label htmlFor="password">
              <input id="password"
                value={password}
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => setPassword(e.target.value)}
              />
          </label>
          <label htmlFor="firstName">
              <input id="firstName"
                value={firstName}
                type="text"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={(e) => setFirstName(e.target.value)}
              />
          </label>
          <label htmlFor="secondName">
              <input id="secondName"
                value={secondName}
                type="text"
                placeholder="second name"
                onChange={(e) => setSecondName(e.target.value)}
                onBlur={(e) => setSecondName(e.target.value)}
              />
          </label>
          <label htmlFor="lastName">
              <input id="lastName"
                value={lastName}
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                onBlur={(e) => setLastName(e.target.value)}
              />
          </label>
          <label htmlFor="nationalId">
              <input id="nationalId"
                value={nationalId}
                type="text"
                placeholder="National Id"
                onChange={(e) => setNationalId(e.target.value)}
                onBlur={(e) => setNationalId(e.target.value)}
              />
          </label>
          <label htmlFor="dateOfBirth">
              <input id="dateOfBirth"
                value={dateOfBirth}
                type="date"
                onChange={(e) => setDateOfBirth(e.target.value)}
                onBlur={(e) => setDateOfBirth(e.target.value)}
              />
          </label>
          <label htmlFor="cityOfBirth">
              <input id="cityOfBirth"
                value={cityOfBirth}
                type="text"
                placeholder="City of birth"
                onChange={(e) => setCityOfBirth(e.target.value)}
                onBlur={(e) => setCityOfBirth(e.target.value)}
              />
          </label>
          <label htmlFor="fathersName">
              <input id="fathersName"
                value={fathersName}
                type="text"
                placeholder="Fathers name"
                onChange={(e) => setFathersName(e.target.value)}
                onBlur={(e) => setFathersName(e.target.value)}
              />
          </label>
          
          
         
          <button>Submit</button>
      </form>


  );
}

export default CreateCustomerAccount;