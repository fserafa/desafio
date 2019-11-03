import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'

const Albums = (props) => {
    return (
        props.data.map(album => (
            <Card className="border-right-0 border-left-0 border-bottom-0 rounded-0" key={album.collectionId} onClick={() => props.handleAlbumClick(album.artistId, album.collectionId)}>
                <ListGroup>
                    <Card.Body>
                        <div className="d-flex justify-content-start ">
                            <div>
                                <img src={album.artworkUrl100} alt={album.collectionName} />
                            </div>
                            <div className="ml-2 d-flex flex-column justify-content-center">
                                <p className="font-weight-bold mb-0">{album.collectionName}</p>
                                <p className="mb-0">{album.artistName}</p>
                            </div>
                        </div>
                    </Card.Body>
                </ListGroup>
            </Card>
        ))
    );
};

export default Albums; 