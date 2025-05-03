import React from 'react'
import './Form.css'
const Form = () => {
  function  handleSubmit(){
        
    }
    function handleChange(e)
    {

    }
  return (
    <div>
        <form action="" method="post">
        <input type="text" onChange={handleChange} placeholder='title'/>
        <input type="text" onChange={handleChange}  placeholder='views'/>
        <button type='submit' onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Form
