import { useEffect, useState } from "react";
import { createContext, useRef } from "react";
import axios from 'axios';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {


    const url = 'http://localhost:3000';

    const [songsData, setsongsData] = useState([])
    const [albumsData , setalbumsData ] = useState([]);
    const audioref = useRef();
    const seekbg = useRef();
    const seekbar = useRef();

    const [track, settrack] = useState(songsData[0]);
    const [playstatus, setplaystatus] = useState(false);
    const [time, settime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totaltime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioref.current.play();
        setplaystatus(true);
    }

    const pause = () => {
        audioref.current.pause();
        setplaystatus(false);
    }

    const playwithID = async (id) => {
        await songsData.map((item)=>{
            if(id === item._id){
                settrack(item);
            }
        })
        await audioref.current.play();
        setplaystatus(true);
    }

    const previous = async () => {

        songsData.map(async (item,index)=>{
            if (track._id === item._id && index > 0) {
                await settrack(songsData[index - 1]);
                await audioref.current.play();
                setplaystatus(true);
            }
        })
       
        console.log(audioref, "audioprev")
    }

    const next = async () => {
        songsData.map(async (item,index)=>{
            if (track._id === item._id && index < songsData.length ) {
                await settrack(songsData[index + 1]);
                await audioref.current.play();
                setplaystatus(true);
            }
        })
       
        console.log(audioref, "audionext")
       
    }

    const seeksong = async (e) => {
        audioref.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioref.current.duration)
    }

    const getsongsData = async () =>{
        try{
        const response = await axios.get(`${url}/api/song/ListSong`);
        setsongsData(response.data.song);
            settrack(response.data.song[0])
        }
        catch(err){
            console.log(err);
        }
    }

    const getAlbumData = async () =>{
        try{
        const response = await axios.get(`${url}/api/album/listAlbum`);
            setalbumsData(response.data.album);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        if (audioref.current) {
            audioref.current.ontimeupdate = () => {
                seekbar.current.style.width = (Math.floor(audioref.current.currentTime / audioref.current.duration * 100)) + "%"
                settime({
                    currentTime: {
                        second: Math.floor(audioref.current.currentTime % 60),
                        minute: Math.floor(audioref.current.currentTime / 60)
                    },
                    totaltime: {
                        second: Math.floor(audioref.current.duration % 60),
                        minute: Math.floor(audioref.current.duration / 60)
                    }
                });
            };
        }
    }, [audioref]);
    

    useEffect(() => {
     getsongsData();
     getAlbumData();
    }, [])
    


    const contextValue = {
        audioref,
        seekbg,
        seekbar,
        track,
        settrack,
        playstatus, setplaystatus,
        time, settime,
        play, pause, playwithID,
        next, previous, seeksong,
        songsData, albumsData,

    }



    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider