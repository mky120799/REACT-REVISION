import React from 'react';
import Button from './Button';

const App = () => { 
 const data = [
  {id:'a', text:'text 1'},
  {id:'b', text:'text 2'},
  {id:'c', text:'text 3'},
  {id:'d', text:'text 4'},
  {id:'e', text:'text 5'},
]

const handleClickAction = (e) => {
  console.log('I was clicked from the parent');
}
return  
 <>
  <Text>{data[0].text}</Text>
  <Text>{data[1].text}</Text>
  <Text>{data[3].text}</Text>
  <Text>{data[4].text}</Text> 
 
</>

};

export default App;