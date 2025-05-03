import React from 'react';
import './Card.css'; // ✅ Assuming Card.css is in the same folder as Card.jsx
import Icon from '../icon/Icon';
const Card = ({iconName }) => {
  return (
    <div className='card'>
      <Icon name={iconName}/>
    </div>
  );
}

export default Card;