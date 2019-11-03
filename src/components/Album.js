import React from 'react';
import { Container } from 'react-bootstrap';

const Album = (props) => {
    return (

        <div>
            <Container>
                <div className="d-flex align-items-center p-5 justify-content-center border-bottom">
                    <div >
                        <img src={props.album.artworkUrl100} alt={"Artist"} />
                    </div>
                    <div className="ml-3">
                        <h1 className="font-weight-bold m-0 ">{props.album.collectionName}</h1>
                    <h6 className="font-weight-bold m-0 ">{props.album.artistName}</h6>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Album;  