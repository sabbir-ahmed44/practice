import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const naviget = useNavigate();
  return (
    <div>
      <h1>Sorry is Not Avalabol.....
        Section is not prosesing......
      </h1>
      <button onClick={()=>{
        naviget("/Home");

      }}>Go To Home </button>
    </div>
  )
}

export default Contact;