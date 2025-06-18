import React from 'react'
import Text from './Text'
const ContextApi = () => {
    const {heading}= props
  return (
    <div>
       return<>
       hey i am heaing component 
       <Text externalData={headingText}>Hey i am</Text>
       </>
    </div>
  )
}

export default ContextApi
