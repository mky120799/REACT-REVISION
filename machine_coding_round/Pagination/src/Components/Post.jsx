import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

function Post() {
  const [data, setData] = useState([]); 
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then(response => {
        setData(response.data); // Use response.data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [pageNo]); // Empty dependency array

  return (
    <div className='container'>
      I am post
      <div className='post-container'>
        {data.map((item) => (
          <img key={item.id} src={item.download_url} alt={item.author} />
        ))}
      </div>
       <Pagination pageNo={pageNo} setPageNo={setPageNo}/> 
    </div>
  );
}

export default Post;
