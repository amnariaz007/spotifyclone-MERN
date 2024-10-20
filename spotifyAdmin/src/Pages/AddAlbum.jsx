import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../App';

const AddAlbum = () => {

    const [image, setimage] = useState(false);
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [bgColor, setbgColor] = useState("#121212");
    const [loading, setloading] = useState(false);


    const onsubmitHandler = async (e) => {
        e.preventDefault();
        setloading(true)
        try {

            const formData = new FormData();

            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('image', image);
            formData.append('bgColor', bgColor);

            console.log("Selected background color:", bgColor);


            const response = await axios.post(`${url}/api/album/addAlbum`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


            if (response.data.success) {
                toast.success("Album added");
                console.log("Selected background color after:", bgColor);

                setname("");
                setdesc("")
                setimage(false);
              
            } else {
                toast.error("somthing went wrong")
            }
        }
        catch (err) {
            console.error("Error adding Album:", err);
            toast.error("not added")
        }
        setloading(false);
    }

    return loading ? (
        <div className='grid place-items-center min-h-[80vh]'>
            <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>

            </div>
        </div>
    ) : (
        <form onSubmit={onsubmitHandler} className='flex flex-col items-start gap-8 text-gray-800'>
            <div className='flex flex-col gap-4'>
                <p > Upload Image</p>
                <input onChange={(e) => { setimage(e.target.files[0]) }} type="file" id='image' accept='image/*' name='image' hidden />
                <label htmlFor="image">
                    <img className='w-24 cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                </label>
            </div>

            <div className='flex flex-col gap-2.5'>
                <p> Album Name</p>
                <input onChange={(e) => setname(e.target.value)} value={name} name='name' type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' />
            </div>

            <div className='flex flex-col gap-2.5'>
                <p> Album Description </p>
                <input onChange={(e) => setdesc(e.target.value)} value={desc} name='desc' type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' />
            </div>

            <div className='flex flex-col gap-3'>
                <p> Background Color</p>
                <input onChange={(e) => setbgColor(e.target.value)} value={bgColor} type='color' name='bgColor' />
            </div>

            <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'> Add </button>
        </form>
    )
}

export default AddAlbum