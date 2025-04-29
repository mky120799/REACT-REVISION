import React, { useEffect, useState } from 'react';
import Button from './Button';

const App = () => { 
  
  const [data1, setdata1] = useState(0);
  const [data2, setdata2] = useState(0);

  useEffect(()=>{
    console.log("Data 1 changed"); 
  },[data1]);
  useEffect(()=>{
    console.log("Data 2 changed"); 
  }
  ,[data2]);

  return <>
  {data1}
  <br/>
  <button onClick = {() => setdata1((prevData )=> prevData+1)}>Update 1</button>
  <br />
  {data2}
  <br/>
  <button onClick={() => setdata2((prevData )=> prevData+1)}>Update 2</button>
  </>
 

 
};

export default App;