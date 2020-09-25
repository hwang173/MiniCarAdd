import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import '../css/home.css';

export class HomePage extends Component {

    render () {
        return (
            <div>
                <Header />
                <Container className='center-container'>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
