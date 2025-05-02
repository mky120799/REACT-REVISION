
import React from 'react'
import Button from './Button'
function App() {
  const object={
    a: 1,
    b: {
      c: undefined
    }
  }
  console.log(object.b?.c);

  // return  <Button data={{ a: 1, b: { c: 2 } }} clickAction={() => console.log("Button clicked")}>click</Button>
}

export default App
