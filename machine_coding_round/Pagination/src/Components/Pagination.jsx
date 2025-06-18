import React from 'react'
import { useState } from 'react'

function Pagination({pageNo,setPageNo}) {
    const prevThreeNoArr = Array.from(
        {length:3},
        (_,index)=> pageNo - 1 - index  
    ).filter((value)=>value > 0).reverse(); 
    const nextFourNoArr = Array.from({length:4},(_,index)=>pageNo + index)
    console.log(`previous three array`,prevThreeNoArr);
    console.log(`next 4 array`,nextFourNoArr);
    console.log([...prevThreeNoArr,...nextFourNoArr]);
    let paginationArr= [...prevThreeNoArr,...nextFourNoArr]

    
    const [data,setData] = useState([])
    const handleNext = () =>{
       setPageNo(pageNo + 1)
    }
    const handlePrev=()=>{
       setPageNo(pageNo - 1)
    }
  return (
    <div className='pagination-container'>
       { pageNo > 1 ? (<div className='page-btn' onClick={handlePrev}>{'<'}</div>) : "" }
          
       {paginationArr.map((value)=>{ return <div onClick={() => setPageNo(value)}className={value == pageNo ? 'page-btn active' : 'page-btn'}>{value}</div>})}
      
       <div onClick={handleNext} className='page-btn'>{'>'}</div>
    </div>
  )
}
 
export default Pagination
