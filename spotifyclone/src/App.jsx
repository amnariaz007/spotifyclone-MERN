import React, { useContext, useRef } from 'react';
import Sidebar from './Components/sidebar';
import Player from './Components/Player';
import Display from './Components/Display';
import { PlayerContext } from './Context/PlayerContext';

const App = () => {

  const {audioref, track} =useContext(PlayerContext);


  return (
    <>
      <div className='h-screen bg-black text-white'>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
          <Player/>
          <audio ref={audioref} src={track.file} preload='auto'></audio>
      </div>
    </>
  );
}

export default App;
