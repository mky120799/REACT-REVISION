import React, { useState } from 'react'

function StarRatings({ starCount = 5 }) {
  const [starValue,setStarValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0)
  console.log('onclick starValue',starValue);
   console.log('onHover starValue',hoverValue);
  return (
    <div className='container'>
        {new Array(starCount).fill(starCount).map((value,index)=>{
         return <span key={index} className={((hoverValue == 0 && index < starValue) || index < hoverValue )? 'gold' : ""} 
         onClick={()=>setStarValue(index +1)}
         onMouseEnter={()=>{setHoverValue(index+1)}}
         onMouseLeave={()=>{setHoverValue(0)}}
         > &#9733;</span>
})}
     
    </div>
  )
}

export default StarRatings
