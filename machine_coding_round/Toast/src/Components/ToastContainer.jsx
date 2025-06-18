import React, { useState } from 'react';

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]); 

  const handleClose = (id) => {
    setToasts((prevToasts)=>{
      const filteredArr = prevToasts.filter((toast)=>{
        return toast.id !== id;
      });
      return filteredArr;
    });
  }
  const handleAdd = (message, type) => {
    const id = Date.now();
    const newToast = [...toasts, { id, message, type }];
    setToasts(newToast);
    setTimeout(()=> handleClose(id),5000);
  };

  return (
    <div className='container'>
      <div className='toast-container'>
        {toasts.map(({ id, message, type }) => (
          <div className={`toast ${type}`} key={id}>
            {message} <span onClick={() => handleClose(id)} style={{ cursor: 'pointer' }}>X</span>
          </div>
        ))}
      </div>
      <div className='btn-container'>
        <button onClick={() => handleAdd('Success', 'success')}>Success Toast</button>
        <button onClick={() => handleAdd('Info', 'info')}>Info Toast</button>
        <button onClick={() => handleAdd('Warning', 'warning')}>Warning Toast</button>
        <button onClick={() => handleAdd('Error', 'error')}>Error Toast</button>
      </div>
    </div>
  );
}
