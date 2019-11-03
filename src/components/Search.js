import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
class Search extends Component {
    render() {
        return (
            <Form>
                <Form.Group className="mb-0">
                    <Form.Control type="text" placeholder="Search" />
                </Form.Group>
            </Form>

        );
    }
}

export default Search;