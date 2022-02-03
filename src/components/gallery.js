import React,{useState,useRef,useEffect} from 'react';
import imgAlbum1 from '../images/album-1.png'
import imgAlbum2 from '../images/album-2.png'
import imgAlbum3 from '../images/album-3.png'
import imgAlbum4 from '../images/album-4.png'
import imgAlbum5 from '../images/album-5.png'
import imgAlbum6 from '../images/album-6.png'

import song1 from '../images/music-1.mp3'
import song2 from '../images/music-2.mp3'
import song3 from '../images/music-3.mp3'
import song4 from '../images/music-4.mp3'
import song5 from '../images/music-5.mp3'
import song6 from '../images/music-6.mp3'
import GalleryItem from "./gallery-item";



const Gallery = () => {

    const [currentSong,setCurrentSong] = useState({name:'', song:''});
    const [shouldPlay,setShouldPlay] = useState(true);


    const player = useRef(null);

    if(shouldPlay && currentSong.song) {
        player.current.play()
    }

    const handlePlaySong = (song,name) => {

        // pause
        if (currentSong.name === name && shouldPlay) {
            setShouldPlay(false)
            player.current.pause()
        }

        // switch state
        if (currentSong.name !== name) {
            setCurrentSong({name:name,song:song})
            player.current.play()
            setShouldPlay(true)
        }

        // play
        if (currentSong.name === name && !shouldPlay) {
            setCurrentSong({name:name,song:song})
            player.current.play()
            setShouldPlay(true)
        }
    };

    const [isOpenedPlayer,setIsOpenedPlayer] = useState(false);

    const handleTogglePlayer = () => {
        setIsOpenedPlayer(!isOpenedPlayer);
    };


    const playSong = () => {
    player.current.pause();
    };


    const songsList = [
        {
            img: imgAlbum1,
            name: 'NEFFEX cold',
            song: song1
        },
        {
            img: imgAlbum2,
            name: 'Rize Up',
            song: song2
        },
        {
            img: imgAlbum3,
            name: 'Arround The World',
            song: song3
        },
        {
            img: imgAlbum4,
            name: 'THNK U jay someday',
            song: song4
        },
        {
            img: imgAlbum5,
            name: 'NEFFEX life',
            song: song5
        },
        {
            img: imgAlbum6,
            name: 'fun house',
            song: song6
        }

    ];


    return (
       <>
           <div  className="container">

               <h1 onClick={playSong} className="heading"> music playlist </h1>

               <div className={`box-container ${isOpenedPlayer && 'active'}`}>

                   {songsList.map((songItem,index) => {
                       return (
                          <GalleryItem
                          key={index}
                          img={songItem.img}
                          song={songItem.song}
                          name={songItem.name}
                          playSong={handlePlaySong}
                          isActive={currentSong.name === songItem.name}
                          currentSongName={currentSong.name}
                          shouldPlay={shouldPlay}
                          />
                       )
                   })}
               </div>
           </div>

           <div className={`music-player ${isOpenedPlayer?'active':''}`}>
               <div onClick={handleTogglePlayer}  id="close-player"
                    className={`fas fa-angle-up ${isOpenedPlayer ?'fa-times active':''}`}/>
               <h3 className="music-title">{currentSong.name}</h3>
               <audio autoPlay={shouldPlay} onClick={playSong} ref={player} src={currentSong.song} controls/>
           </div>
           </>
    );
};

export default Gallery;
