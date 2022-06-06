import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Add() {
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value, 
      last_name: e.target.last_name.value,
      email: e.target.email.value
    }

    axios.post("http://localhost:8080/users", data)
      .then(res=>navigate("/"))
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='first_name' placeholder='First name'/><br />
        <input type="text" name='last_name' placeholder='Last name'/><br />
        <input type="email" name='email' placeholder='Email'/><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Add