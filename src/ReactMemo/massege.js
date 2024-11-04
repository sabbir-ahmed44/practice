import React,{memo, useMemo} from 'react'

const Massege = ({incrementnumber, handelIncrement}) => {

    console.log("massege randaring")

    const calculeyted = useMemo(()=>{
      let number = 0;
      for(let index = 0; index <50000000; index++){
        number++;
  
  
      }
        return number;
    },[])
    
   
  return (
    <div>
      <h1>number : {calculeyted}</h1>
      <h1> sent {incrementnumber} massege </h1>
    <button onClick={handelIncrement}> Handel Chanege Of massege</button>
    
    </div>

  )
}

export default memo(Massege);