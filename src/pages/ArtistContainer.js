import React, { Component } from 'react';
import Axios from 'axios';
import Songs from '../components/Songs';
import Albums from '../components/Albums';
import Artist from '../components/Artist';
import './ArtistContainer.css'
import { ToggleButton, ToggleButtonGroup, Spinner, Container } from 'react-bootstrap';

class ArtistContainer extends Component {
    state = {
        data: [],
        artist: [],
        showSongs: false,
        showAlbums: true,
        loading: true,
    }

    async componentDidMount() {
        document.title = "Artist"
        this.setState({ loading: true });

        const response = await Axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${this.props.artistId}&entity=album`);
       
        this.setState({ artist: response.data.results[0], data: response.data.results.slice(1), loading: false });
    }

    handleAlbums = async () => {
        this.setState({ loading: true });
       
        const response = await Axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${this.props.artistId}&entity=album`);
        
        this.setState({ data: response.data.results.slice(1), showAlbums: true, showSongs: false, loading: false });
    }

    handleSongs = async () => {
        this.setState({ loading: true });

        const response = await Axios.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${this.props.artistId}&entity=song`);

        this.setState({ data: response.data.results.slice(1), showAlbums: false, showSongs: true, loading: false });
    }

    handleAlbumClick = (artistId, collectionId) => {
        this.props.history.push('album', { artistId: artistId, collectionId: collectionId });
    }

    render() {
        const { showSongs, showAlbums, data, artist, loading } = this.state;
        return (
            <div>
                <Artist artist={artist} />

                <div className="d-flex flex-column my-3 ">
                    <Container >
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton
                                className="toggle-buttons pl-0"
                                variant="link"
                                type="radio"
                                name="albums"
                                defaultChecked
                                value={1}
                                onClick={() => this.handleAlbums()}>
                                Albums
                    	    </ToggleButton>
                            <ToggleButton
                                className="toggle-buttons pl-0"
                                variant="link"
                                type="radio"
                                name="songs"
                                value={2}
                                onClick={() => this.handleSongs()}>
                                Songs
                    	     </ToggleButton>
                        </ToggleButtonGroup>
                    </Container>
                </div>

                {loading ? (
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                ) :
                    showAlbums ? (
                        <Container className="mb-1">
                            <Albums data={data} handleAlbumClick={this.handleAlbumClick} />
                        </Container>
                    ) :
                        showSongs && (
                            <Container className="mb-1">
                                <Songs data={data} />
                            </Container>
                        )
                }

            </div>
        );
    }
}

export default ArtistContainer;
