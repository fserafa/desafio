import React, { Component } from 'react';
import Axios from 'axios';
import Songs from '../components/Songs';
import Albums from '../components/Albums';
import Artist from '../components/Artist';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class ArtistContainer extends Component {
    state = {
        data: [],
        artist: [],
        showSongs: false,
        showAlbums: true
    }

    async componentDidMount() {
        const response = await Axios.get('https://itunes.apple.com/lookup?id=909253&entity=album');
        this.setState({ artist: response.data.results[0], data: response.data.results.slice(1) });
    }

    handleAlbums = async () => {
        const response = await Axios.get('https://itunes.apple.com/lookup?id=909253&entity=album');

        this.setState({ data: response.data.results.slice(1), showAlbums: true, showSongs: false });
    }

    handleSongs = async () => {
        const response = await Axios.get('https://itunes.apple.com/lookup?id=909253&entity=song');

        this.setState({ data: response.data.results.slice(1), showAlbums: false, showSongs: true });
    }

    handleAlbumClick = (artistId, collectionId) => {
        this.props.history.push('album', { artistId: artistId, collectionId: collectionId });
    }

    render() {
        const { showSongs, showAlbums, data, artist } = this.state;
        return (
            <div>
                <Artist artist={artist} />

                <div className="d-flex flex-column">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton
                            type="radio"
                            name="radio"
                            defaultChecked
                            value={1}
                            onClick={() => this.handleAlbums()}>
                            Albums
                        </ToggleButton>
                        <ToggleButton
                            type="radio"
                            name="songs"
                            value={2}
                            onClick={() => this.handleSongs()}>
                            Songs
                         </ToggleButton>
                    </ToggleButtonGroup>
                </div>

                {showSongs && <Songs data={data} />}
                {showAlbums && <Albums data={data} handleAlbumClick={this.handleAlbumClick} />}
            </div>
        );
    }
}

export default ArtistContainer;
