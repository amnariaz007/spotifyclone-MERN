import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import AddSong from './Pages/AddSong';
import AddAlbum from './Pages/AddAlbum';
import ListSong from './Pages/ListSong';
import ListAlbum from './Pages/ListAlbum';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

export const url = 'http://localhost:3000'

const App = () => {


  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>
      <Sidebar/>
    
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
      <Navbar/>
        <div className='pt-8 pl-10 '>
          <Routes>
            <Route path='/Add-Song' element={<AddSong/>} />
            <Route path='/Add-Album' element={<AddAlbum/>} />
            <Route path='/List-Song' element={<ListSong/>} />
            <Route path='/List-Album' element={<ListAlbum/>} />
          </Routes>

        </div>

      </div>



    </div>
  )
}

export default App