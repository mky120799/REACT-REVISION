import React from 'react';
import Button from './Button';

const App = () => { 
  const handleClickAction = () => {  
    console.log('clicked inside app component');
  };

  return (
    <div>
      <Button handleClick={handleClickAction} something={{ a: 4, b: { c: 5 } }}>
        click me
      </Button>
    </div>
  );
};

export default App;