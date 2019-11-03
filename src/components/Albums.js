import React from 'react';
import { Card } from 'react-bootstrap';
import Arrow from '../assets/arrow.png';
import './Albums.css';

const Albums = (props) => {
    return (
        props.data.map(album => (
            <Card
                className="border-right-0 border-left-0 border-bottom-0 rounded-0 card-list"
                key={album.collectionId}
                onClick={() => props.handleAlbumClick(album.artistId, album.collectionId)}>
                <Card.Body className="px-0 py-4">
                    <div className="d-flex justify-content-between ">
                        <div className="d-flex flex-row justify-content-center">
                            <div>
                                <img src={album.artworkUrl100} alt={album.collectionName} />
                            </div>

                            <div className="ml-2 d-flex flex-column justify-content-center">
                                <div className="font-weight-bold mb-0">{album.collectionName}</div>
                                <p className="mb-0">{album.artistName}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <img src={Arrow} alt="Arrow-right" />

                        </div>
                    </div>

                </Card.Body>
            </Card>

        ))
    );
};

export default Albums; 