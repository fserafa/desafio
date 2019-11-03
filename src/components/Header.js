import React, { Component } from 'react';
import Logo from '../assets/Logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

class Header extends Component {
    render() {
        const pageTitle = this.props.location.pathname === "/" ? "Artist" : "Album"                
        

        return (
            <div style={{ backgroundColor: '#175676' }} >
                <Container className="p-3 ">
                    <Row>
                        <Col xs={1}  className="d-flex  align-items-center">
                            <img src={Logo} alt={"Logo"} />
                        </Col>
                        <Col xs={11} className="d-flex justify-content-center">
                            <h1 className="font-weight-bold text-white" style={{ fontFamily: 'Lobster'}}>{pageTitle}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(Header);