import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videoDB from './data/data';
import Counter from './components/Counter';
import { useState } from 'react';
import AddVideo from './components/AddVideos';
function App() {
  const [videos,setVideos] = useState(videoDB)
  return (
    <div className="App" onClick={()=>console.log('App')}>
     <AddVideo></AddVideo>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
      <Counter/>
    </div>
    
  );
}

export default App;
