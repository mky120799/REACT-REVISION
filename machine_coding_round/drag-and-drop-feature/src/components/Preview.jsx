import React from 'react'

function Preview({ fileDetail, onRemove}) {
  console.log(fileDetail);
 
  const sizeInMB = (fileDetail.size / 1024 / 1024).toFixed(2); // Round to 2 decimal places

  return (
    <div className='file-preview'>

      {/* image */}
      <img 
      className='thumbnail'
      src={ URL.createObjectURL(fileDetail)} alt="preview"
      />

      {/* image info */}

      <div className='file-info'>

      <span className='file-name'>{fileDetail.name}</span>
      <span className='file-size'>{sizeInMB} MB</span>

      </div>

      <button onClick={()=>{onRemove(fileDetail.name)}} className='remove-btn'>x</button>
      
    </div>
  );
}

export default Preview;