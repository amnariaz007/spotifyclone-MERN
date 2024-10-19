import React from 'react'
import { url } from '../App';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const ListSong = () => {


    const FetchSongs = async () => {
        try {
            const response = await axios.get(`${url}/api/song/ListSong`);
            console.log(response.data)
            if(response.data.success){
                toast.success("audio added");
            }else {
                toast.error("somthing went wrong")
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
        <div>ListSong</div>
    )
}

export default ListSong