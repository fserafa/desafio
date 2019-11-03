import React from 'react';

const Songs = (props) => {
    return (
        props.data.map(song => (
            <div key={song.trackId}>
            <img src={song.artworkUrl60} alt={song.trackName}/>
                <p>{song.artistName}</p>
                <p>{song.trackName}</p>
            </div>
        ))
    );
};

export default Songs; 