import React,{useEffect} from 'react';

const GalleryItem = ({img,song,name,playSong,isActive,shouldPlay}) => {

    return (
        <>
            <div  onClick={() => playSong(song,name)} className="box" data-src="images/music-1.mp3">
                <div className="image">
                    <div className={`play ${shouldPlay && isActive ? 'active': ''}`}>
                        <i className={`fas ${shouldPlay && isActive ? 'fa-pause': 'fa-play'}`}/>
                    </div>
                    <img src={img} alt=""/>
                </div>
                <div className="content">
                    <h3>{name}</h3>
                </div>
            </div>
            </>
    );
};

export default GalleryItem;
