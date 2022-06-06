import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useLocation,Link} from "react-router-dom";

function View() {
  const [data, setData] = useState(undefined);
  const location = useLocation();


  useEffect(() => {
    axios.get("http://localhost:8080/users/"+location.state)
      .then(res => setData(res.data));
  }, [])
  
  return (
    <div>
      {!data?"loading...":
        <div>
          <h1>id: {data.id}</h1>
          <h1>FirstName: {data.first_name}</h1>
          <h1>LastName: {data.last_name}</h1>
          <h1>Email: {data.email}</h1>
          <Link to="/">Go Back</Link>
        </div>
      }
    </div>
  )
}

export default View