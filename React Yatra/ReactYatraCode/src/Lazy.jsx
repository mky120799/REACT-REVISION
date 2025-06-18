import React, { useState } from 'react'
import Text from './Text'
const Lazy = () => {
    const [showText,toggleText] = useState(false)
  return (
    <div>
        <button onClick={()=>{toggleText((prev)=> !prev)}}>Toggle Text</button>
        {showText && <Text>Hello guys!</Text>}
    </div>
  )
}

export default Lazy
