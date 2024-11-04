import React from 'react'
import './card.css';
 


const titile = 'hello world , this is pragarp.this is descrept '
const name = 'Iam Sabbir Ahmed'

function Card(){
    return <div className='card'>
        <h1 className='heding'>{name}</h1>
        <div>
        <p className='pragrap'>{titile}</p>

</div>
    </div>

   
}


export default Card;