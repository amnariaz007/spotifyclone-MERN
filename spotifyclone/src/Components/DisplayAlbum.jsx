import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../Context/PlayerContext';

const DisplayAlbum = ({album}) => {
    const { id } = useParams();
    const { playwithID, albumsData, songsData } = useContext(PlayerContext);
    const [albumData, setalbumData] = useState(null);
    useEffect(() => {

        if (albumsData.length > 0) {
            const foundAlbum = albumsData.find((item) => item._id === id);
            setalbumData(foundAlbum);
        }
    }, [albumsData, id]);


    if (!albumData) {
        return <div>Loading album...</div>;
    }

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt={albumData.name} />
                <div className='flex flex-col'>
                    <h2 className='text-5xl font-bold mb-4 md:text=7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="Spotify" />
                        <b>Spotify</b> • 1,234,234 likes
                        <b> 50 songs,</b> about 2 hr 20 min
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'> # </b> Title </p>
                <p>Album</p>
                <p className='hidden sm:block'>Date added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="Duration" />
            </div>

            {songsData.filter((item)=> item.album === albumData.name).map((item, index) => (
                <div onClick={() => playwithID(item._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt={item.name} />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))}
        </>
    );
};

export default DisplayAlbum;
