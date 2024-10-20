import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../App'
import { toast } from 'react-toastify'

const ListAlbum = () => {


    const [data, setdata] = useState([]);


    const FetchAlbum = async () => {
        try {
            const response = await axios.get(`${url}/api/album/listAlbum`);
            console.log(response.data);
            if(response.data.success){
                setdata(response.data.album);
            }
        }
        catch (err) {
            console.error("Error adding audio:", err);
            toast.error("not added")
        }
    }

    const deleteAlbum = async (id) => {
        try {
            const response = await axios.post(`${url}/api/album/deleteAlbum`, {id} );
            console.log(response.data);
            if(response.data.success){
                toast.success(response.data.message);
                await FetchAlbum();
            }
        }
        catch (err) {
            console.error("Error adding audio:", err);
            toast.error("not added")
        }
    }

    useEffect(() => {
        FetchAlbum();
    }, [])

    return (
        <div> 
           <p> All Album list</p> 
            <br/>
            <div>
                <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
                <b> Image</b>
                <b> Name</b>
                <b> Description</b>
                <b> bgColor</b>
                <b> Action</b>
                </div>
                {data.map((item,index)=>{
                    return(
                        <div key={index} className='grid grid-cols-[1fr_1fr_01fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                            <img className='w-12' src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.desc}</p>
                            <input type="color" value={item.bgColor} />
                            <p className='cursor-pointer' onClick={()=>deleteAlbum(item.id)}> x </p>
                        </div>)
                })}
              
            </div>
        </div>
    )
 
}

export default ListAlbum