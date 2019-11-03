import React, { Component } from 'react';
import Axios from 'axios';
import AlbumSongs from '../components/AlbumSongs';
import { Spinner } from 'react-bootstrap';

class AlbumContainer extends Component {
    state = {
        album: [],
        artistId: this.props.location.state.artistId,
        collectionId: this.props.location.state.collectionId,
        loading: true

    }

    async componentDidMount() {
        this.setState({ loading: true });

        const response = await Axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${this.state.artistId}&entity=song`);
        this.setState({ album: response.data.results.filter(song => song.collectionId === this.state.collectionId), loading: false });
    }

    render() {
        const { album, loading } = this.state;
        return (
            <div>
                {loading ? (
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                ) : <AlbumSongs album={album} />}

            </div>
        );
    }
}

export default AlbumContainer;