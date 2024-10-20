import React from 'react'
import { url } from '../App';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

const ListSong = () => {

    const [data, setdata] = useState([])


    const FetchSongs = async () => {
        try {
            const response = await axios.get(`${url}/api/song/ListSong`);
            console.log(response.data);
            if(response.data.success){
                setdata(response.data.song);
            }
        }
        catch (err) {
            console.error("Error adding audio:", err);
            toast.error("not added")
        }
    }

    const deleteSongs = async (id) => {
        try {
            const response = await axios.post(`${url}/api/song/deleteSong`, {id} );
            console.log(response.data);
            if(response.data.success){
                toast.success(response.data.message);
                await FetchSongs();
            }
        }
        catch (err) {
            console.error("Error adding audio:", err);
            toast.error("not added")
        }
    }

    useEffect(() => {
        FetchSongs();
    }, [])

    return (
        <div> 
            All songs list
            <br/>
            <div>
                <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
                <b> Image</b>
                <b> Name</b>
                <b> Album</b>
                <b> Duratio</b>
                <b> Action</b>
                </div>
                {data.map((item,index)=>{
                    return(
                        <div key={index} className='grid grid-cols-[1fr_1fr_01fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                            <img className='w-12' src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.album}</p>
                            <p>{item.duration}  </p>
                            <p className='cursor-pointer' onClick={()=>deleteSongs(item.id)}> x </p>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default ListSong