import React, { useState } from "react";
import './style.css'

function Counter_App(){
    const [count, setCount] = useState(0);

    const decrement=()=>{
        setCount(count+1)
    };

    
    const increment=()=>{
        setCount(count-1)
    };


    const reset=()=>{
        setCount(0)
    }




    return(
        <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={decrement} className="btn card__btn">+</button>
          <button onClick={increment}  className="btn card__btn">-</button>
          <button onClick={reset} className="btn card__btn">0</button>
        </div>
      </div>
    </div>
        

        
    )
}


export default Counter_App;