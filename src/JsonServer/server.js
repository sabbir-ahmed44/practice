
import React, { useEffect,useState } from "react";
import axios from "axios"



function Server() {
      const[users,setUsers] = useState([])

      const getAllUsers = async ()=>{
      const respode = await axios.get("http://localhost:3000/users");
     setUsers(respode.data);
  };

  useEffect(()=>{
    getAllUsers();

  },[]);

  return ( <div> 

{users.map(user=>{
  return <article key={user.id}>
    <h1>{user.id}</h1>
    <h2>{user.name}</h2>
    <h2>{user.email}</h2>

  </article>
})}
       
          </div>

           
  ); 
} 


export default Server;
