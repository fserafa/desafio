import React, { Component } from 'react';
import Logo from '../assets/Logo-footer.png';
import { Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#CCE6F4'}} >
                <Container className="p-4 d-flex justify-content-between align-items-center">
                    <img src={Logo} alt={"Logo"} />

                    <p className="font-weight-bold m-0" style={{ fontFamily: 'Lobster', color: '#4BA3C3' }}>felipe serafim</p>
                </Container>
            </div>
        );
    }
}

export default Footer;