import React, { useState } from 'react'

const App = () => {
    const [data, setData] = useState([
        {id: 'a', text: "text 1"},
        {id: 'b', text: "text 2"},
        {id: 'c', text: "text 3"},
        {id: 'd', text: "text 4"},
        {id: 'e', text: "text 5"},
    ])
    const addMoreData = () => {
        setData((prevData) => {
            return [...prevData, {id: 'f', text: "text 6"}]
        })
    }
  return (
    <div>
         {data.map((item, index) => <Text key={index} text={item.text} />)}
         <button onClick={addMoreData}>Add More Data</button>
    </div>
  )
}

export default App
