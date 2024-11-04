import React, { useState } from 'react'
import User from './User'

const Users =()=> {
    const [user,setUser] = useState({
        id:12828 ,
        name:"Sabbir",
    });

    
  return (
    <div>
        <User user={user} />
    </div>
  )
};



export default Users;