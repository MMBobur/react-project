import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function Home() {

  const [malumot, setMalumot] = useState([]);
  const [render, setRender] = useState(false);
  const url = "http://localhost:8080/users"

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setMalumot(res.data);
      }).catch(e=>console.log(e));
  }, [render]);

  const handleDelete = (id) => {
    
    const tasdiq = window.confirm("siz rostan o`chirishni hohlaysizmi");

    if(tasdiq){
      axios.delete(url+"/"+id).then(res=>setRender(!render))
    }
  }
  
  return (
    <div>
      <Link to="add" style={{border:"1px solid red", padding: "20px", display: "block", width: "100px"}}>Qo`shish</Link>
      <table border='1' width="600px" cellSpacing={0}>
        <thead>
          <tr>
            <th>t/r</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {malumot.map((val, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td><Link to="view" state={val.id}>{val.first_name}</Link></td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>
                  <Link to="/edit" state={val.id}>Edit</Link>
                  <button onClick={() => handleDelete(val.id)}>delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
