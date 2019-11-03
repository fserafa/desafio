import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Album from './Album';

const AlbumSongs = (props) => {
    return (
        <Container>
            <Album album={props.album[0]}/>

            {props.album.map(song => (
                <Card
                    className="border-right-0 border-left-0 border-bottom-0 rounded-0"
                    key={song.trackId}>
                    <Card.Body className="px-0 py-4">
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex flex-row justify-content-center">
                                <div>
                                    <img src={song.artworkUrl100} alt={song.trackName} />
                                </div>

                                <div className="ml-2 d-flex flex-column justify-content-center">
                                    <div className="font-weight-bold mb-0">{song.trackName}</div>
                                    <p className="mb-0">{song.artistName}</p>
                                </div>
                            </div>

                        </div>

                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
};

export default AlbumSongs; 