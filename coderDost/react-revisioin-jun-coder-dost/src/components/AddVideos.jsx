import './AddVideos.css'
function AddVideo(){
    function handleClick(){

    }
function handleChange(e){
    
}
    return(
        <form>
            <input placeholder="title" onChange={handlChange}type="text"/>
            <input placeholder='views' type="text"/>
              <div>
        <button 
        onClick={()=>{handleClick}

    //  let  newArr=[...videos,{ id:videos.length+1,
    // title: 'Demo JS tutorial',
    // views: '1M',
    // time: '1 month ago',
    // channel: 'Coder Dost',
    // verified: true
    // }]
    //     setVideos(newArr)
      }>add videos</button></div>
        </form>
    )
}

export default AddVideo;