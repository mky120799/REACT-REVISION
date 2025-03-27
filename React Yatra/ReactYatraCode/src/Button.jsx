import React from 'react';

const Button = (props) => {
  console.log(props);
  const { children, handleClick, something } = props; // Use handleClick instead of handleClickAction why?
  return (
    <button onClick={handleClick}>{children} + {something.a} + {something.b.c}</button>
  );
};

export default Button;
