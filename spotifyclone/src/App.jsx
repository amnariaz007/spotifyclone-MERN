import React, { useContext, useRef } from 'react';
import Sidebar from './Components/sidebar';
import Player from './Components/Player';
import Display from './Components/Display';
import { PlayerContext } from './Context/PlayerContext';
import { songsData } from './assets/frontend-assets/assets';

const App = () => {

  const {audioref, track, songsData} =useContext(PlayerContext);

  console.log(audioref, "audioref")


  return (
    <>
      <div className='h-screen bg-black text-white'>
        {
          songsData.length !== 0
          ? <>
             <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
          <Player/>
          </>
          : null
        }
       
          <audio ref={audioref} src={track? track.file: ""} preload='auto'></audio>
      </div>
    </>
  );
}

export default App;
