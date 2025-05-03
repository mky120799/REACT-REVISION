import React from 'react'
import { useState } from 'react';
const Counter = () => {
  let [number,increment]=useState(0);
  
  console.log(number)
  function handleClick(){
         increment(number++);
  }
  return (
    <div>
        <h1>
           {number}
        </h1>
        <button onClick={handleClick}>add</button>
    </div>
  )
}

export default Counter
