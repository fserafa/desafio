import React, { Component } from 'react';
import Logo from '../assets/Logo.png';
import Search from './Search';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#175676' }} >
                <Container className="p-3">
                   
                    <Row>
                        <Col> <img src={Logo} alt={"Logo"} /></Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }
}

export default Header;