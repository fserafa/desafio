import React from 'react';
import { Container } from 'react-bootstrap';
import artistPlaceholder from '../assets/artist.png';

const Artist = (props) => {
    return (
        <Container>
            <div className="d-flex align-items-center p-5 justify-content-center border-bottom">
                <div >
                    <img src={artistPlaceholder} alt={"Artist"} />
                </div>
                <div className="ml-3"> 
                    <h1 className="font-weight-bold m-0 ">{props.artist.artistName}</h1>
                    <h6 className="font-weight-bold m-0 ">Genre: {props.artist.primaryGenreName}</h6>
                </div>
            </div>
        </Container>
    );
};
 
export default Artist;  