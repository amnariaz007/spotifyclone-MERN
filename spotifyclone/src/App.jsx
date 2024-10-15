import React from 'react';
import Sidebar from './Components/sidebar';
import Player from './Components/Player';

const App = () => {
  return (
    <>
      <div className='h-screen bg-black text-white'>
        <div className='h-[90%] flex'>
          <Sidebar/>
        </div>
      </div>
    </>
  );
}

export default App;
