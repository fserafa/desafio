import React from 'react';
import { Container } from 'react-bootstrap'

const Artist = (props) => {
    return (
        <Container className="d-flex flex-column align-items-center">
            <h1>{props.artist.artistName}</h1>
            <p>Genre: {props.artist.primaryGenreName}</p>
        </Container>
    );
};

export default Artist; 