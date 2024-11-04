import React, { useEffect, useState } from 'react'

const Datafach = () => {
const [todos,setTodos] =useState(null);
const [isLoading,setIsLoading] =useState(true);
const [error,setError] =useState(null);



    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")

  .then((res) =>{
    if(!res.ok){
        throw Error("Feching is not saccesfull")
    }else{
        return res.json();
    }
    

         
    })

    .then((data)=>{
     setTodos(data);
     setIsLoading(false);
     setError(null);
    })

    .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });


},[]);

const errorMessage = error && <p> {error} </p>;

  
const loadingMessage = isLoading && "data is loading";


const useEleyment = todos && todos.map((todo)=>{ 
    return <p key={todo.id}>{todo.title}</p>;
})

  
  return (
    <div>
        {errorMessage}
        {loadingMessage}
         {useEleyment }

    </div>
  );
};

export default Datafach;