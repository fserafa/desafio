import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import ArtistContainer from './pages/ArtistContainer';
import AlbumContainer from './pages/AlbumContainer';

const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={ArtistContainer} />
                <Route exact path="/album" component={AlbumContainer} />
            </Switch>
        <Footer />

        </BrowserRouter>

    );
}

export default Routes; 