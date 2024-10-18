import { useEffect, useState } from "react";
import { createContext, useRef } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    

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

    useEffect(() => {

        setTimeout(() => {
            audioref.current.ontimeupdate = () => {
                seekbar.current.style.width =(Math.floor(audioref.current.currentTime/audioref.current.duration*100))+"%"
                settime({
                    currentTime: {
                        second: Math.floor(audioref.current.currentTime %60),
                        minute: Math.floor(audioref.current.currentTime /60)
                    },
                    totaltime: {
                        second: Math.floor(audioref.current.duration %60),
                        minute: Math.floor(audioref.current.duration /60)
                    }
                })
            }
        }, 1000);
    }, [audioref])

    const playwithID = async(id) =>{
        await settrack(songsData[id]);
        await audioref.current.play();
        setplaystatus(true);
    }

    const previous = async() => {
            if(track.id >0){
                await settrack(songsData[track.id-1]);
                await audioref.current.play();
                setplaystatus(true);
            }
            console.log("yesssss")
    }
    
    const next = async() => {
        if(track.id < songsData.length-1){
             await settrack(songsData[track.id+1]);
            await audioref.current.play();
            setplaystatus(true);
        }
}

const seeksong = async(e) =>{
    audioref.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioref.current.duration)
}




    const contextValue = {
        audioref,
        seekbg,
        seekbar,
        track,
        settrack,
        playstatus, setplaystatus,
        time, settime,
        play, pause,playwithID,
        next, previous,seeksong

    }

   

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider