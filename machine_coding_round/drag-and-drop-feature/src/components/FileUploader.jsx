import React, { useState } from 'react'
import Preview from './Preview';

function FileUploader() {
    const [files, setFiles] = useState([]);
    const [isDragging, setDragging] = useState(false)
    const handleChange =(e)=> {
        console.log(e);
        const selectedFiles = e.target.files;
        setFiles([...files, ...selectedFiles])
    }
    const removeFile = (fileName) => {
        const filteredFile = files.filter((file)=>file.name !== fileName)
        setFiles(filteredFile);
    }
 const   handleDragEnter = (e) =>{
        e.preventDefault();
        setDragging(true);
    }
 const    handleDragLeave = (e) =>{
        e.preventDefault();
        setDragging(false )
    }
    const handleDrop = (e) =>{
        e.preventDefault(); 
        const droppedFile = Array.from(e.dataTransfer.files);
        console.log(droppedFile);
        setFiles([...files,...droppedFile]);
    }
  return (
    <div className='file-uploader'>
     {/* drage and drop zone */}
    <div
    onDragEnter={handleDragEnter} 
    onDragOver={handleDragEnter} 
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    className={`dropzone ${isDragging?'dragging':''}`} >
        <p>Drag and drop files here</p>
        <input 
        onChange={handleChange}
        type="file"
        multiple
        className="hidden-input"
        name="" id="file-input" 
        />
        <label className="browse-btn" htmlFor='file-input'>
            Browse File
        </label>
    {/* preview zone */}
    <div className="preview-container">
        {files.map((file)=>{
            return <Preview key={file.name} fileDetail={file} onRemove={removeFile}></Preview>
        })}
    </div>
    </div>
    </div>
  )
}

export default FileUploader
