import React from 'react';

const AlbumSongs = (props) => {
    return (
        props.album.map(song => (
            <div key={song.trackId}>
            <img src={song.artworkUrl60} alt={song.trackName}/>
                <p>{song.artistName}</p>
                <p>{song.trackName}</p>
            </div>
        ))
    );
};

export default AlbumSongs; 