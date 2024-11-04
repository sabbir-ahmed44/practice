import React from 'react'

function Card(props) {

  const data2 = 'iam child data'
   props.onChildData(data2);


  return ( <div> 
            <h2>{props.data1}</h2>
            <p>Iam App coumponet Pasing</p>
           </div>

  )
}

export default Card;