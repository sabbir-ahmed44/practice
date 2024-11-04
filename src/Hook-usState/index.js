import React, { useState } from "react";

function HOOK_USSTATE(){
    const [count, setCount] = useState(0)


  const handelar = () =>{
    setCount((prevCount)=> prevCount + 1)
    setCount((prevCount)=> prevCount + 1)
    setCount((prevCount)=> prevCount + 1)

   }

 return ( <div>
         <h1>Count: {count}</h1>
         <button onClick={handelar}>inrement</button>
         </div>

 )
}


export default HOOK_USSTATE;