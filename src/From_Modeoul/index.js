import React, { useState } from "react";


function From(){
    const [name , setName] = useState("");
    const [email , setEmail ] = useState("");
    const [password, setPassword] = useState("");

    const onChangeName = (e) =>{
        setName(e.target.value)
    };

    
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    };

    const onChangePassword= (e) =>{
        setPassword(e.target.value)
    };


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, password)
        

    }

  return(
    <div>
        <h1>Resister Your Info</h1>

        <form onSubmit={handleSubmit}>
        <div>
        <label>Name: </label>
            <input onChange={onChangeName}
             type='text' 
             id='name' 
             name='name'
             value= {name}
              required  />
        </div>

        <div>
        <label>Email: </label>
            <input onChange={onChangeEmail}
             type='email' 
             id='Email' 
             name='Email'
             value= {email}
              required  />


        </div> 

        <div>
            <label>Password: </label>
        <input onChange={onChangePassword}
         type='password' 
         id='Password' 
         name='Password'
         value= {password}
          required  />
        
         </div>
          <button type="sabmit" >Resister</button>
          
        </form>
    </div>

  )
}

export default From;