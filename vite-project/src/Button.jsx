import React from 'react';

const Button = (props) => {
    console.log(props);
    
    const { children,clickAction, data } = props; // Use handleClick instead of handleClickAction why?
    return (
        <button onClick={clickAction}>{children} + {data.a} + {data.b.c}</button>
    );
}

export default Button;  
 