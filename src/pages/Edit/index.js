import React, {useEffect, useState} from 'react'

import {useLocation,useNavigate} from "react-router-dom";
import axios from 'axios';

function Edit() {
  const location = useLocation();
  const [data, setData] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/users/"+location.state)
      .then(res =>{
        setData(res.data)
      })
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value, 
      last_name: e.target.last_name.value,
      email: e.target.email.value
    }

    axios.put("http://localhost:8080/users/"+location.state, data)
      .then(res=>navigate("/"))
    
  }
  
  return (
    <div>
      {!data?"loading...":
        <form onSubmit={handleSubmit}>
          <input type="text" defaultValue={data.first_name} name='first_name' placeholder='First name'/><br />
          <input type="text" defaultValue={data.last_name} name='last_name' placeholder='Last name'/><br />
          <input type="email" defaultValue={data.email} name='email' placeholder='Email'/><br />
          <input type="submit" />
        </form>
      }
    </div>
  )
}

export default Edit