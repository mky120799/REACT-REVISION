import React from 'react'
const Button = (props) => {
    const handleClick = () => {
        console.log('clicked');
      }
    console.log(props);
  const { children } = props;
  return (
    <button onClick={handleClick}>{children}</button>
  );
}

export default Button
