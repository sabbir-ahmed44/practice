import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Compnet4 = () => {
    const {user,name}= useContext(UserContext);
  return (
    <div>
        <p>{name}</p>
        <h1>{user.id}</h1>
         <h1>{user.name}</h1>
    </div>
  )
}

export default Compnet4;