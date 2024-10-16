import React from 'react';
import Sidebar from './Components/sidebar';
import Player from './Components/Player';
import Display from './Components/Display';

const App = () => {
  return (
    <>
      <div className='h-screen bg-black text-white'>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
          <Player/>
      </div>
    </>
  );
}

export default App;
