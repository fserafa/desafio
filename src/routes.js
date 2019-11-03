import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import artists from './data/artists'

import ArtistContainer from './pages/ArtistContainer';
import AlbumContainer from './pages/AlbumContainer';

const artistIndex = Math.floor(Math.random() * artists.length);
const artistId = artists[artistIndex]

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" render={props => <ArtistContainer artistId={artistId} {...props} />} />
                <Route path="/album" component={AlbumContainer} />
            </Switch>
            <Footer />

        </BrowserRouter>

    );
}

export default Routes; 