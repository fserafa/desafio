import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#CCE6F4'}} className="p-4 d-flex justify-content-end">
                <p className="font-weight-bold m-0" style={{fontFamily: 'Anton', color: '#4BA3C3'}}>FELIPE SERAFIM</p>
            </div>
        );
    } 
}

export default Header;