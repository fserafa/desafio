import React, { Component } from 'react';
import Axios from 'axios';
import AlbumSongs from '../components/AlbumSongs';

class AlbumContainer extends Component {
    state = {
        album: [],
        artistId: this.props.location.state.artistId,
        collectionId: this.props.location.state.collectionId
    }

    async componentDidMount() {
        const response = await Axios.get(`http://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${this.state.artistId}&entity=song`);
        this.setState({ album: response.data.results.filter(song => song.collectionId === this.state.collectionId) });
    }

    render() {
        const { album } = this.state;
        return (
            <div>
                <AlbumSongs album={album} />
            </div>
        );
    }
}

export default AlbumContainer;