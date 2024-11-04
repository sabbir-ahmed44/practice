import React, { useState } from 'react'

import Componet2 from './Componet2';

import { UserContext } from './UserContext';

const Componet1 = () => {
    const [user,setUser]=useState({id:1002,name:"Sabbir Ahemd"});
    const [name,setName]=useState("Sabbir Rumon");

  return (
    <div>
       <UserContext.Provider value={{user,name}}>
       <Componet2 />
       </UserContext.Provider >
     
    </div>
  )
}

export default Componet1;