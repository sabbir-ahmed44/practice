import React, { useCallback, useState } from 'react'
import Massege from './massege'; 

const Mamo = () => {
    const [count,setCount] = useState(0);
    const [toggol,setToggol] = useState(false);
    console.log("app rendaring")

    const handelIncrementChange = useCallback(() =>{
      setCount(count+1);
    },[count]);

  return (
    <div>
      {toggol? "on": "off"}
      <button onClick={()=>{
        setToggol(!toggol)

      }}>Toggol</button>

        <h1> Count : {count}</h1>
        <button onClick={()=>{
            setCount((count)=> count + 1 );
        }}>Increment</button>

        <Massege incrementnumber={count}
         handelIncrement={handelIncrementChange}/>
    </div>
  )
};

export default Mamo;