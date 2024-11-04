import React from "react";


function Stop(){
    const handelDecrement =(event)=>{
        console.log('prant Event:' , event)
    }

    const handelIncrement =(event)=>{
        event.stopPropagation()
        console.log('chiled Event:' , event)
        
    }
    return( <div  className="handelDecrement" onClick={handelDecrement}>
             <button onClick={handelIncrement}> increment</button>
          </div>

    )
}
export default Stop;