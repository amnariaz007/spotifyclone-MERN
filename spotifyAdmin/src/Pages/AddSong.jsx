import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../App';


const AddSong = () => {

    const [image, setimage] = useState(false);
    const [name, setname] = useState("");
    const [audio, setaudio] = useState(false);
    const [desc, setdesc] = useState("");
    const [album, setalbum] = useState("None");
    const [loading, setloading] = useState(false);
    const [albumdata, setalbumdata] = useState([]);

    const onsubmitHandler = async(e) =>{

        e.preventDefault();
        setloading(true)
        try{

            const formData = new FormData();

            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('album', album);
            formData.append('audio', audio);  
            formData.append('image', image);  
          
            const response = await axios.post(`${url}/api/song/AddSong`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });

          
            if(response.data.success){
                toast.success("audio added");

                setname("");
                setdesc("")
                setimage(false);
                setalbum("None")
                setaudio(false)
            }else {
                toast.error("somthing went wrong")
            }
        }
        catch(err){
            console.error("Error adding audio:", err);
            toast.error("not added")
        }
        setloading(false);
    }


  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
<div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>

</div>
    </div>
  ) :(
   
   <form onSubmit={onsubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex gap-8'>
            <div className='flex flex-col gap-4'>
                <p>Uploadd audio</p>
                <input onChange={(e)=>setaudio(e.target.files[0])} name='audio' type="file" id='audio' accept='audio/*' hidden />
                <label htmlFor="audio">
                <img src={audio? assets.upload_added :  assets.upload_song} alt="" className='w-24 cursor-pointer' />
                </label>
            </div>
            <div className='flex flex-col gap-4'>
            <p> Upload image</p>
            <input onChange={(e)=>{setimage(e.target.files[0])}} name='image' type="file" id="image" accept='image/*' hidden />
            <label htmlFor="image">
            <img src={image? URL.createObjectURL(image): assets.upload_area} alt="" className='w-24 cursor-pointer' />
            </label>
            </div>
        </div>

        <div className='flex flex-col gap-2.5'>
            <p> audio name</p>
            <input onChange={(e)=>setname(e.target.value)} value={name} name='name' type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' />
        </div>

        <div className='flex flex-col gap-2.5'>
            <p> audio description </p>
            <input onChange={(e)=>setdesc(e.target.value)} value={desc} name='desc' type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' />
        </div>

        <div className='flex flex-col gap-2.5'>
            <p> album </p>
            <select onChange={(e)=>setalbum(e.target.value)} value={album} name="album" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'>
                <option value="none"> None </option>
            </select>
        </div>

        <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'> Add </button>
   </form>
   
  )
}

export default AddSong